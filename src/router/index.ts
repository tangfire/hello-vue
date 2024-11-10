import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () => import('../views/test1.vue')
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import('../views/test2.vue')
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../views/test3.vue')
  },
  {
    path: '/test4',
    name: 'Test4',
    component: () => import('../views/test4.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
