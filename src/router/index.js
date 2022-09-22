import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/start',
  },
  {
    path: '/start',
    name: 'Home',
    component: Home
  },
  {
    path: '/inspection-start',
    name: 'Inspection Start',
    component: () => import(/* webpackChunkName: "inspectionStart" */ '../views/InspectionStart.vue')
  },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
