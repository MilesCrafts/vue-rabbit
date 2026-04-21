import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { 
        path: '',
       component: Home,
  },
      { 
        path: 'category',
        component: Category
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router