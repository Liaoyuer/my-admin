import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require("./_import_" + process.env.NODE_ENV).default

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: _import('Layout'),
    children: [
      {
        path: "/home",
        name: 'Home',
        component: _import('Home')
      },
      {
        path: "/set",
        name: 'Set',
        component: _import('Set')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
