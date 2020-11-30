<template>
  <div>
   <el-button type="primary" @click="test">防抖测试</el-button>
  </div>
</template>

<script>
export default {
  name: "Vdom",
  methods: {
    test() {
      this.$utils.debounce(() => {
        console.log(this)
      })()
    }
  },
  mounted() {
  }
}

</script>

<style scoped>

</style>