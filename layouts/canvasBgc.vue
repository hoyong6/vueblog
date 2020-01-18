<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'canvasBgc'
      }
    },
    created() {
      this.STAR_COUNT = (window.innerWidth + window.innerHeight) / 8  // 星光计数
      this.STAR_SIZE = 3  // 星星类型，暂时没有想出来是干什么的
      this.STAR_MIN_SCALE = 0.2  // 星体最小刻度
      this.OVERFLOW_THRESHOLD = 50 // 溢出阈值，其实是出现位置
      this.canvas = document.querySelector('canvas')
      this.context = canvas.getContext('2d')
      this.scale = 1 // device pixel ratio   设备像素比设置为1
      this.width = null
      this.height = null
      this.stars = []
      this.pointerX
      this.pointerY  // 指针 pointer
      this.velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 }  // 速度
      this.touchInput = false
      window.onresize = resize  // 调整大小
      this.canvas.onmousemove = onMouseMove // 移动事件
      this.canvas.ontouchmove = onTouchMove // 移动事件
      this.canvas.ontouchend = onMouseLeave // 移动事件
      this.document.onmouseleave = onMouseLeave // 移动事件
      this.generate()   // 生成
      this.resize()  // 改变大小
      this.step()   // 步骤
    },
    method: {
      generate() { // 生成
        for (let i = 0; i < STAR_COUNT; i++) { // 根据星光计数而随机生成数量
          stars.push({
            x: 0,
            y: 0,
            z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)   // 0.2 + Math.random() * (1 - 0.2) 这个z 我感觉像随机生成的速度
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  canvas {
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: -100px;
  }
</style>
