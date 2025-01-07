import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/Explore.vue'),
    },
    {
      path: '/become-a-teacher',
      name: 'teach',
      component: () => import('../views/Teaching.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PlansAndPricing.vue'),
    },
    {
      path: '/sign-in',
      name: 'sing-in',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('../views/CreateAccount.vue'),
    }

  ],
})

export default router
