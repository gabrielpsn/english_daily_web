import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import { supabase } from '../services/supabase'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginPage.vue')
  },
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

// Navigation Guard de Segurança (Login Gate)
router.beforeEach(async (to) => {
  // Se o Supabase não estiver configurado localmente no .env,
  // permite passagem livre para continuar rodando o app em modo local/offline original.
  if (!supabase) {
    return true
  }

  const authStore = useAuthStore()

  // Aguarda a verificação inicial do estado da sessão do Supabase terminar
  if (authStore.loading) {
    // Um pequeno intervalo ou aguarda o status
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (!authStore.loading) {
          clearInterval(interval)
          resolve()
        }
      }, 50)
    })
  }

  const isAuthenticated = authStore.isAuthenticated

  if (to.name !== 'login' && !isAuthenticated) {
    return { name: 'login' }
  } else if (to.name === 'login' && isAuthenticated) {
    return { name: 'dashboard' }
  }
  
  return true
})

export default router
