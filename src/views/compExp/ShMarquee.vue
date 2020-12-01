<template>
  <div class="comps-sh-marquee">
    <div class="sh-marquee-wrap">
      <sh-marquee
          :content="config.content.value"
          :speed="config.speed.value"
      ></sh-marquee>
    </div>
    <conf-bar :config="config"></conf-bar>
  </div>
</template>

<script>
import ShMarquee from "@/components/common/ShMarquee";

export default {
  name: "CompsShMarquee",
  data() {
    return {
      config: {
        content: {
          name: '内容',
          value: '文字跑马灯测试测试测试'
        },
        speed: {
          name: '速度',
          value: 5
        }
      }
    }
  },
  components: {
    ShMarquee
  }
}
</script>

<style scoped lang="less">
.comps-sh-marquee {
  color: @theme-color;

  .sh-marquee-wrap {
    margin: 20px 0;
  }
}
</style>