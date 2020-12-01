<!--
  文字跑马灯组件
  @time 2020-11-30
-->
<template>
  <div class="sh-marquee-wrap" ref="sh-marquee-wrap">
    <div :class="customClass" :ref="customClass">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "ShMarquee",
  props: {
    // 自定义类名
    customClass: {
      type: String,
      default: 'sh-marquee'
    },
    // 每条内容滚动几次后会触发finish事件（不是总共滚动几次，因为通常意义下，marquee应为无限滚动）
    loop: {
      type: [Number, String],
      default: 1
    },
    // 速率
    speed: {
      type: [Number, String],
      default: 3
    },
    // 内容（我们需要监听content的变化，所以不能放在slot中）
    content: String
  },
  data() {
    return {
      // 容器宽度
      wrapW: 0,
      // 内容宽度
      marqueeW: 0,
      // 计时器
      marqueeTimer: '',
      // 计时器频率
      duration: 50,
      // 剩余滚动次数
      restTime: 0,
      // X轴移动速率
      speedX: 0
    }
  },
  methods: {
    /**
     * 初始化
     */
    init() {
      this.marqueeStop();
      if (!this.content) return false;
      this.restTime = parseInt(this.loop) - 1;
      this.speedX = parseInt(this.speed);
      let marquee = this.$refs[this.customClass],
          marqueeW = marquee.offsetWidth,
          marqueeWrap = this.$refs['sh-marquee-wrap'],
          wrapW = marqueeWrap.offsetWidth;
      this.wrapW = wrapW;
      this.marqueeW = marqueeW;
      marquee.style.marginLeft = this.wrapW + "px";
      let that = this;
      setTimeout(function () {
        marquee.style.transition = `all ${that.duration}ms linear`;
      }, that.duration);
      this.marqueeTimer = setInterval(this.marqueeMove, this.duration)
    },
    /**
     * 开始运行
     */
    marqueeMove() {
      let marquee = this.$refs[this.customClass];
      let marqueeX = parseInt(marquee.style.marginLeft.substring(0, marquee.style.marginLeft.indexOf("px")));
      if (marqueeX < this.marqueeW * -1) {
        if (this.restTime) {
          this.restTime--
        } else {
          this.$emit('finish')
        }
        marquee.style.transition = "none";
        marqueeX = this.wrapW;
        marquee.style.marginLeft = marqueeX - this.speedX + "px";
        let that = this;
        setTimeout(function () {
          marquee.style.transition = `all ${that.duration}ms linear`
        }, that.duration)
      } else {
        marquee.style.marginLeft = marqueeX - this.speedX + "px"
      }
    },
    /**
     * 停止运行
     */
    marqueeStop() {
      this.marqueeTimer && clearInterval(this.marqueeTimer)
    }
  },
  watch: {
    // 监听内容变化
    content() {
      this.$nextTick(() => {
        this.init()
      })
    },
    speed() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    });
    window.addEventListener("resize", this.init)
  },
  beforeDestroy() {
    this.marqueeStop();
    window.removeEventListener("resize", this.init)
  }
}
</script>

<style scoped>
.sh-marquee-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
}

.sh-marquee {
  display: inline-block;
}
</style>