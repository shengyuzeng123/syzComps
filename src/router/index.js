import Vue from 'vue'
import VueRouter from 'vue-router'
import CompsRoute from './compsExp/compsExp'
import LearningRoute from './learning/learning'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'el-icon-s-home'
    }
  },
  ...CompsRoute,
  // ...LearningRoute
]

const router = new VueRouter({
  routes
})

export default router
