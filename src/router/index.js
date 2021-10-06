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
    path: '/pronadirecen',
    name: 'PronadiRecen',
    component: () => import('../views/PronadiRecen.vue')
  },
  {
    path: '/dodajrecen',
    name: 'DodajRecen',
    component: () => import('../views/DodajRecen.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
