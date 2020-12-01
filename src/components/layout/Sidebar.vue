<template>
  <div class="sidebar">
    <el-menu
        :default-active="activeRoute"
        :unique-opened="true"
    >
      <!--如果是嵌套路由-->
      <template v-for="item in routeList">
        <el-submenu v-if="item.children" :index="item.name">
          <template slot="title">
            <span><i v-if="item.meta.icon" :class="item.meta.icon"></i>{{ item.name }} {{
                item.meta && item.meta.title
              }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="n.name" v-for="n in item.children" :key="n.name" @click="routerTo(n.name)">{{
                n.name
              }} {{ n.meta && n.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!--如果不是嵌套路由-->
        <template v-else>
          <el-menu-item :index="item.name" @click="routerTo(item.name)">
            <span class="menu-item"><i v-if="item.meta.icon" :class="item.meta.icon"></i>{{ item.name }} {{
                item.meta && item.meta.title
              }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      activeRoute: '',
      routeList: this.$router.options.routes
    }
  },
  watch: {
    activeRoute(val, oldVal) {
      if (val && val !== oldVal) {
        this.$router.push({name: val}).then(() => {
        }).catch(err => err)
      }
    }
  },
  methods: {
    /**
     * 点击菜单回调
     * @param name 路由名
     */
    routerTo(name) {
      this.activeRoute = name
    }
  },
  mounted() {
    this.activeRoute = "Home"
  }
}
</script>

<style scoped lang="less">
/deep/ .el-menu {
  min-height: 100vh;
}

.sidebar {
  text-align: left;

  .menu-item {
    vertical-align: middle;

    i {
      transform: translateY(-1.5px);
    }
  }
}
</style>