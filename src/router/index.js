import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require("./_import_" + process.env.NODE_ENV).default
// const _importComp = require("./_import_" + process.env.NODE_ENV + "Comp").default;

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
      },
      {
        path: "/dagComponents",
        name: 'DagComponents',
        component: _import('DagComponents')
      },
      {
        path: "/steps",
        name: 'steps',
        component: _import('steps/index')
      },
      {
        path: "/parent",
        name: 'Parent',
        component: _import('parentToGrandchild/Parent')
      },
      {
        path: "/provideInject",
        name: 'Parent',
        component: _import('provideInject/Parent')
      },
    //   {
    //     path: "/sealDrag",
    //     name: 'SealDrag',
    //     component: _import('SealDrag')
    //   }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
