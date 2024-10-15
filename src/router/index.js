import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // http://localhost:5173/
      name: 'home',
      component: HomeView // views/HomeView.vue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/binding',
      name: 'binding',
      component: () => import('../views/DataBinding.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/Component.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('../views/VuexView.vue')
    },
    {
      path: '/server',
      name: 'server',
      component: () => import('../views/ServerBinding.vue')
    }
  ]
})

export default router
