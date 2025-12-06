<template>
  <div class="cyber-spine" ref="wrap">
    <canvas ref="canvas"></canvas>
    <div class="scanlines"></div>
  </div>
</template>

<script>
export default {
  name: "canvas-bgc",
  data() {
    return {
      ctx: null,
      rafId: null,
      segments: [],
      dots: [],
      t: 0,
      dpr: 1,
      size: { w: 0, h: 0 }
    };
  },
  mounted() {
    // only run on client
    this.init();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      if (!canvas) return;
      this.ctx = canvas.getContext("2d");
      this.dpr = window.devicePixelRatio || 1;
      this.handleResize();
      this.createSpine();
      this.loop();
    },
    handleResize() {
      const wrap = this.$refs.wrap;
      if (!wrap || !this.ctx) return;
      this.size.w = wrap.clientWidth;
      this.size.h = wrap.clientHeight;
      const canvas = this.$refs.canvas;
      canvas.width = this.size.w * this.dpr;
      canvas.height = this.size.h * this.dpr;
      canvas.style.width = `${this.size.w}px`;
      canvas.style.height = `${this.size.h}px`;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    },
    createSpine() {
      const count = 42;
      const centerX = this.size.w / 2;
      const centerY = this.size.h / 2;
      this.segments = new Array(count).fill(0).map((_, i) => ({
        x: centerX,
        y: centerY + i * 4,
        angle: 0,
        speed: 0.9 + i * 0.012
      }));
      this.dots = new Array(28).fill(0).map(() => ({
        x: centerX,
        y: centerY,
        r: 1 + Math.random() * 2,
        drift: Math.random() * Math.PI * 2
      }));
    },
    loop() {
      this.rafId = requestAnimationFrame(() => this.loop());
      this.draw();
    },
    draw() {
      const ctx = this.ctx;
      const { w, h } = this.size;
      if (!ctx || !w || !h) return;

      this.t += 0.015;
      ctx.clearRect(0, 0, w, h);

      // background haze
      const gradient = ctx.createRadialGradient(
        w * 0.5,
        h * 0.35,
        10,
        w * 0.5,
        h * 0.35,
        w * 0.6
      );
      gradient.addColorStop(0, "rgba(0, 30, 50, 0.55)");
      gradient.addColorStop(1, "rgba(0, 0, 15, 0.2)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // update head path
      const head = this.segments[0];
      const amp = Math.max(w, h) * 0.14;
      head.x =
        w / 2 +
        Math.sin(this.t * 1.5) * amp * 0.4 +
        Math.sin(this.t * 4.3) * 16;
      head.y =
        h * 0.35 +
        Math.cos(this.t * 1.2) * amp * 0.2 +
        Math.sin(this.t * 3.7) * 18;

      // propagate spine
      for (let i = 1; i < this.segments.length; i++) {
        const prev = this.segments[i - 1];
        const seg = this.segments[i];
        const dx = prev.x - seg.x;
        const dy = prev.y - seg.y;
        const targetAngle = Math.atan2(dy, dx);
        seg.angle += (targetAngle - seg.angle) * 0.25;
        const len = 16 + Math.sin(this.t * 0.6 + i * 0.3) * 1.4;
        seg.x = prev.x - Math.cos(seg.angle) * len;
        seg.y = prev.y - Math.sin(seg.angle) * len;
      }

      // draw spine core
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(130, 255, 255, 0.5)";
      for (let i = 0; i < this.segments.length - 1; i++) {
        const a = this.segments[i];
        const b = this.segments[i + 1];
        const width =
          5 +
          Math.sin(this.t * 2 + i * 0.6) * 1.5 +
          (1 - i / this.segments.length) * 12;
        const hue = (this.t * 210 + i * 8) % 360;
        ctx.strokeStyle = `hsla(${hue}, 90%, 65%, 0.9)`;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(
          (a.x + b.x) / 2 + Math.sin(this.t * 3 + i) * 6,
          (a.y + b.y) / 2 + Math.cos(this.t * 3 + i) * 6,
          b.x,
          b.y
        );
        ctx.stroke();
      }
      ctx.restore();

      // glowing rings
      this.segments.forEach((seg, idx) => {
        if (idx % 4 !== 0) return;
        ctx.save();
        const hue = (this.t * 260 + idx * 5) % 360;
        ctx.strokeStyle = `hsla(${hue}, 100%, 70%, 0.5)`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.6)`;
        const r = 10 + Math.sin(this.t * 4 + idx) * 3;
        ctx.beginPath();
        ctx.arc(seg.x, seg.y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // floating particles
      this.dots.forEach((dot, idx) => {
        dot.drift += 0.01 + idx * 0.0002;
        dot.x = w / 2 + Math.cos(this.t * 0.8 + dot.drift) * (w * 0.35);
        dot.y =
          h * 0.45 + Math.sin(this.t * 0.7 + dot.drift * 1.3) * (h * 0.25);
        const hue = (this.t * 180 + idx * 9) % 360;
        ctx.save();
        ctx.fillStyle = `hsla(${hue}, 100%, 75%, 0.85)`;
        ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.8)`;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(
          dot.x,
          dot.y,
          dot.r + Math.sin(this.t * 3 + idx) * 0.8,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      });

      // scanline glare
      ctx.save();
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(255,255,255,0.04)");
      grad.addColorStop(
        0.5 + Math.sin(this.t * 2) * 0.1,
        "rgba(255,255,255,0.12)"
      );
      grad.addColorStop(1, "rgba(255,255,255,0.02)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }
  }
};
</script>

<style scoped lang="scss">
.cyber-spine {
  position: relative;
  width: 100%;
  height: 420px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 18px;
  background: radial-gradient(
      circle at 40% 30%,
      rgba(0, 255, 255, 0.08),
      rgba(0, 0, 0, 0.75)
    ),
    linear-gradient(
      120deg,
      rgba(30, 0, 60, 0.3),
      rgba(0, 80, 120, 0.3),
      rgba(0, 0, 0, 0.2)
    );
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35),
    inset 0 0 50px rgba(0, 255, 255, 0.05);
}

canvas {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.35));
}

.scanlines {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px
  );
  background-size: 100% 4px;
  mix-blend-mode: screen;
  opacity: 0.45;
  animation: shimmer 6s linear infinite;
}

@keyframes shimmer {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(4px);
  }
}

@media screen and (max-width: 768px) {
  .cyber-spine {
    height: 320px;
    border-radius: 12px;
  }
}
</style>
