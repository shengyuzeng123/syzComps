<template>
  <div class="conf-bar">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>配置项</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="reset">重置</el-button>
      </div>
      <el-form ref="confBarForm" :model="config" label-position="top" label-width="120px">
        <template v-for="(item,key) in config">
          <el-form-item :label="`${item.name} (${key})`">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </template>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ConfBar",
  props: {
    // 配置项集合
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      initConfig: "",
    }
  },
  methods: {
    /**
     * 重置
     */
    reset() {
      Object.assign(this.config, this.$utils.deepCopy(this.initConfig))
    }
  },
  mounted() {
    this.initConfig = this.$utils.deepCopy(this.config)
  },
}
</script>

<style scoped>
/deep/.el-form-item__label{
  padding: 0;
  text-indent: 2px;
}
.conf-bar {
  width: 400px;
}
</style>