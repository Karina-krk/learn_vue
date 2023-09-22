import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'table',
      component: () => import ('../views/TablePage.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import ('../views/CardsPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import ('../views/ProfilePage.vue')
    },
    {
      path: '/car/:id',
      name: 'car',
      component: () => import ('../views/CarIdPage.vue')
    },
    // {
    //   path: '/documentation',
    //   name: 'documentation',
    //   component: () => import ('../views/CarIdPage.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import ('../views/NotFoundPage.vue')
    },
  ]
})

export default router
