import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "Home",
      component: HomeView
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: () => import('@/views/AboutUsView.vue')
    },
    {
      path: '/ourServices',
      name: 'OurServices',
      component: () => import('@/views/OurServicesView.vue')
    },
    {
      path: '/ourProjects',
      name: 'OurProjects',
      component: () => import('@/views/OurProjectsView.vue')
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: () => import('@/views/ContactUsView.vue')
    },
  ]
})

export default router
