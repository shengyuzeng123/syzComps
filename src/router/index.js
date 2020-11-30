import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/class',
        name: 'class',
        component: () => import('../views/Class.vue')
    },
    {
        path: '/blob',
        name: 'blob',
        component: () => import('../views/Blob.vue')
    },
    {
        path: '/vdom',
        name: 'vdom',
        component: () => import('../views/Vdom.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
