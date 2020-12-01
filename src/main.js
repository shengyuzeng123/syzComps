import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import util from "@/utils/util";
import syzComps from "@/components/index"
import comps from "@/components/layout/index"

// 安装syz公共组件
Vue.use(syzComps)
// 安装公共组件
Vue.use(comps)
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$utils = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
