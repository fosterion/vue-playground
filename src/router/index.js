import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/raw-html',
      name: 'raw-html',
      component: () => import('../views/RawHtml.vue')
    }
  ]
})

export default router
