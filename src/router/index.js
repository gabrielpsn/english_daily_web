import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../pages/DashboardPage.vue')
      },
      {
        path: 'lessons',
        name: 'lessons',
        component: () => import('../pages/LessonsPage.vue')
      },
      {
        path: 'lessons/:id',
        name: 'lesson-detail',
        component: () => import('../pages/LessonDetailPage.vue')
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('../pages/StatisticsPage.vue')
      },
      {
        path: 'achievements',
        name: 'achievements',
        component: () => import('../pages/AchievementsPage.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../pages/SettingsPage.vue')
      }
    ]
  },
  // Rota curinga para redirecionar ao dashboard
  {
    path: '/:catchAll(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Rolar para o topo em mudanças de rota
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
