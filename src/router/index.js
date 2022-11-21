import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
