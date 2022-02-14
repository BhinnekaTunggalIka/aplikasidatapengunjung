import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import Regist from '../views/Regist.vue'
import VisitorBook from '../views/VisitorBook.vue'
import CheckOut from '../views/CheckOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/visitorbook',
    name: 'VisitorBook',
    component: VisitorBook
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut
  },
]

const router = new VueRouter({
  routes
})

export default router
