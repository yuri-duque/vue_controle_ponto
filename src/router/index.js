import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendario from '../views/calendario/Calendario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calendario',
    component: Calendario
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
