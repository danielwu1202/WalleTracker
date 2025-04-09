import { createRouter, createWebHistory } from 'vue-router'
import PreOrderList from '../views/PreOrderList.vue'
import login from '@/views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Login', name: 'login', component: login },
    {
      path: '/PreOrderList',
      name: 'PreOrderList',
      component: PreOrderList,
    },
  ],
})

export default router
