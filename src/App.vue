<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-aside width="240px">
          <Sidebar></Sidebar>
        </el-aside>
        <el-main>
          <div class="bread-crumbs">
            <div class="bread-crumbs-item" v-for="(item,index) in breadCrumbs" :key="item.name">
              <el-button type="text" :disabled="item.disabled">
                {{ item.meta.title }}
              </el-button>
            </div>
          </div>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Sidebar from "@/components/layout/Sidebar";

export default {
  name: 'app',
  components: {
    Sidebar
  },
  data() {
    return {
      // 面包屑数据
      breadCrumbs: []
    }
  },
  watch: {
    $route() {
      let {name, matched} = this.$route;
      this.breadCrumbs = matched.map(item => {
        item.disabled = item.name === name;
        return item
      })
    }
  },
  mounted() {

  }
}
</script>
<style lang="less">
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .el-container {
    height: 100vh;

    .el-main {
      padding: 0;

      .bread-crumbs {
        padding: 0 20px;
        border-bottom: 1px solid #d6d6d6;

        .bread-crumbs-item {
          position: relative;
          display: inline-block;
          margin-right: 20px;

          &:not(:last-child) {
            &:after {
              content: "/";
              position: absolute;
              right: -12.9px;
              top: 10.4px;
              opacity: 0.4;
            }
          }
        }
      }
    }
  }
}
</style>
