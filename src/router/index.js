import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home')
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/goods')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
