import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/age',
    name: 'age',
    component: () => import( '../views/AgeView.vue')
  },
  {
    path: '/gender',
    name: 'gender',
    component: () => import( '../views/GenderView.vue')
  },
  {
    path: '/area',
    name: 'area',
    component: () => import( '../views/AreaView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import( '../views/HistoryView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
