<template>
  <div>
    <canvas></canvas>
  </div>
</template>
<script>
  export default {  // default 暂时不支持这么玩，废弃了。
    data() {
      return {
        name: 'canvasBgc',
        STAR_SIZE: 3,  // 星星类型，暂时没有想出来是干什么的
        STAR_MIN_SCALE: 0.2,  // 星体最小刻度
        OVERFLOW_THRESHOLD: 50, // 溢出阈值，其实是出现位置
        scale: 1, // device pixel ratio   设备像素比设置为1
        width: null,
        height: null,
        stars: [],
        pointerX: null,
        pointerY: null, // 指针 pointer
        velocity: { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 }, // 速度
        touchInput: false
      }
    },
    created() {
      if (process.browser) {
        this.STAR_COUNT = (window.innerWidth + window.innerHeight) / 8  // 星光计数
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        window.onresize = this.resize  // 调整大小
        document.onmouseleave = this.onMouseLeave // 移动事件
      }
      // this.generate()   // 生成
      // this.resize()  // 改变大小
      // this.step() // 步骤
    },
    method: {
      generate() { // 生成
        for (let i = 0; i < this.STAR_COUNT; i++) { // 根据星光计数而随机生成数量
          this.stars.push({
            x: 0,
            y: 0,
            z: this.STAR_MIN_SCALE + Math.random() * (1 - this.STAR_MIN_SCALE)   // 0.2 + Math.random() * (1 - 0.2) 这个z 我感觉像随机生成的速度
          })
        }
      },
      placeStar(star) { // 星光的位置随机
        star.x = Math.random() * this.width
        star.y = Math.random() * this.height
      },
      recycleStar(star) { // 星光回收 绝对不止回收这么简单。
        let direction = 'z'
        let vx = Math.abs(this.velocity.x) // x速度取绝对值都是正值
        let vy = Math.abs(this.velocity.y) // y速度取绝对值都是正值
        if (vx > 1 || vy > 1) { // 这个是什么分离算法模型嘛, 后来读代码发现分离，扩散的代码，不在这，
          let axis // 轴
          if (vx > vy) { // 从操作上看只有 x 大于 y，是左右移动的情况。什么情况下  vx / ( vx + vy ) 大于 1,  h 代表水平， v 竖直。
            axis = Math.random() < vx / (vx + vy) ? 'h' : 'v'
          } else { // 上下移动
            axis = Math.random() < vy / (vx + vy) ? 'v' : 'h'
          }
          if (axis === 'h') { // h 代表 水平， v 竖直
            direction = this.velocity.x > 0 ? 'l' : 'r'
          } else {
            direction = this.velocity.y > 0 ? 't' : 'b'
          }
        }
        star.z = this.STAR_MIN_SCALE + Math.random() * (1 - this.STAR_MIN_SCALE)
        if (direction === 'z') {  // direction 方向  实际上是在判断方向，出多少 加多少，低速确实是 均被z轴吃掉了，z轴吃掉后再生
          star.z = 0.1
          star.x = Math.random() * this.width
          star.y = Math.random() * this.height
        } else if (direction === 'l') { // 回收的星星的出生点
          star.x = -this.OVERFLOW_THRESHOLD
          star.y = this.height * Math.random()
        } else if (direction === 'r') { // 累计加的
          star.x = this.width + this.OVERFLOW_THRESHOLD
          star.y = this.height * Math.random()
        } else if (direction === 't') { // top位置出生点
          star.x = this.width * Math.random()
          star.y = -this.OVERFLOW_THRESHOLD
        } else if (direction === 'b') { // bottom位置出生点
          star.x = this.width * Math.random()
          star.y = this.height + this.OVERFLOW_THRESHOLD
        }
      },
      resize() { // 调整大小
        this.scale = window.devicePixelRatio || 1  // 判断是否存在像素比，没有那就是1
        this.width = window.innerWidth * this.scale  // 获取窗口的高度与宽度(不包含工具条与滚动条
        this.height = window.innerHeight * this.scale
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.stars.forEach(this.placeStar)
      },
      step() { // 步骤
        this.context.clearRect(0, 0, this.width, this.height) // 首先清场

        this.update()
        this.render()

        this.requestAnimationFrame(this.step) // 告诉浏览器 —— 你希望执行一个动画，并且要求浏览器在下次重绘之前调用制定的回调函数更新动画。
          // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘前执行， 回调函数执行次数通常是每秒60次  是60帧的原因嘛
      },
      update() { // velocity 速度
        this.velocity.tx *= 0.96  // 基底速度* .96, 目测这基底速度算是报废了，永远是0
        this.velocity.ty *= 0.96  // 基底速度* .96

        this.velocity.x += (this.velocity.tx - this.velocity.x) * 0.8 // 单方向速度 tx， - 位置 x.
        this.velocity.y += (this.velocity.ty - this.velocity.y) * 0.8 // 单方向速度 ty， - 位置 y.

        this.stars.forEach((star) => { // 给星星加上速度 z 是调节速度专业, z 是  0<z<1 的介于中间的一个小数
          this.star.x += this.velocity.x * star.z
          this.star.y += this.velocity.y * star.z

          this.star.x += (star.x - this.width / 2) * this.velocity.z * star.z //
          this.star.y += (star.y - this.height / 2) * this.velocity.z * star.z // x 和 y 方向上的值，通过这种随机正好是离散的
          this.star.z += this.velocity.z // z 控制移动速度？

              // recycle when out of bounds 出界时回收
          if (star.x < -this.OVERFLOW_THRESHOLD || star.x > this.width + this.OVERFLOW_THRESHOLD || star.y < -this.OVERFLOW_THRESHOLD || star.y > this.height + this.OVERFLOW_THRESHOLD) {
            this.recycleStar(star)  // 回收
          }
        })
      },
      render() { // 渲染
        this.stars.forEach((star) => {
          this.context.beginPath() // 重置绘画路径的意思
          this.context.lineCap = 'round'  // 向线条的每个末端添加圆形线帽, 被用作绘制圆形
          this.context.lineWidth = this.STAR_SIZE * star.z * this.scale // lineWidth 属性设置或返回当前线条的宽度，以像素计
          this.context.strokeStyle = 'rgba(255,255,255,' + (0.5 + 0.5 * Math.random()) + ')' // 属性设置或返回用于笔触的颜色、渐变或模式

          this.context.beginPath() // beginPath() 方法开始一条路径，或重置当前的路径
          this.context.moveTo(star.x, star.y) // 实际本质上还是绘线， 由于 context.clearRect 清场函数的存在，每次好像点在移动

          let tailX = this.velocity.x * 2
          let tailY = this.velocity.y * 2

                // stroke() wont work on an invisible line  // 不会在看不见的线上工作
          if (Math.abs(tailX) < 0.1) tailX = 0.5
          if (Math.abs(tailY) < 0.1) tailY = 0.5

          this.context.lineTo(star.x + tailX, star.y + tailY) // 增量连线，绘制点的方法基本在这

          this.context.stroke() // 是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法
        })
      },
      movePointer(x, y) { // 移动指针， 由于鼠标移动或者 touch 触摸
        if (typeof pointerX === 'number' && typeof pointerY === 'number') {
          let ox = x - this.pointerX
          let oy = y - this.pointerY

          this.velocity.tx = this.velocity.tx + (ox / 8 * this.scale) * (this.touchInput ? 1 : -1)
          this.velocity.ty = this.velocity.ty + (oy / 8 * this.scale) * (this.touchInput ? 1 : -1)
        }

        this.pointerX = x
        this.pointerY = y
      },
      onMouseMove(event) { // 鼠标移动
        this.touchInput = false

        this.movePointer(event.clientX, event.clientY)
      },
      onTouchMove(event) { // 触摸移动
        this.touchInput = true

        this.movePointer(event.touches[0].clientX, event.touches[0].clientY, true)

        event.preventDefault()
      },
      onMouseLeave() { // 鼠标离开
        this.pointerX = null
        this.pointerY = null
      }
    },
    mounted() {
      this.canvas.onmousemove = this.onMouseMove // 移动事件
      this.canvas.ontouchmove = this.onTouchMove // 移动事件
      this.canvas.ontouchend = this.onMouseLeave // 移动事件
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
