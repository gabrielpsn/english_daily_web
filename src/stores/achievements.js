import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import storageService from '../services/storage'

export const useAchievementsStore = defineStore('achievements', {
  state: () => ({
    achievementsList: [
      {
        id: 'first_lesson',
        title: 'Primeiro Passo (First Step)',
        description: 'Concluiu a primeira aula de inglês.',
        icon: 'emoji_events',
        color: '#81C784', // Verde claro
        unlocked: false,
        unlockedAt: null
      },
      {
        id: 'streak_7',
        title: 'Determinação (7-Day Streak)',
        description: 'Alcançou 7 dias seguidos de estudos. 🔥',
        icon: 'local_fire_department',
        color: '#FFB74D', // Laranja
        unlocked: false,
        unlockedAt: null
      },
      {
        id: 'streak_15',
        title: 'Hábito Formado (15-Day Streak)',
        description: 'Alcançou 15 dias seguidos de estudos.',
        icon: 'insights',
        color: '#FF8A65', // Laranja escuro
        unlocked: false,
        unlockedAt: null
      },
      {
        id: 'streak_30',
        title: 'Inabalável (30-Day Streak)',
        description: 'Alcançou 30 dias seguidos de estudos. Excelente foco!',
        icon: 'workspace_premium',
        color: '#BA68C8', // Roxo claro
        unlocked: false,
        unlockedAt: null
      },
      {
        id: 'lessons_50',
        title: 'Mais da Metade (50 Lessons)',
        description: 'Concluiu 50 ou mais aulas no total.',
        icon: 'task_alt',
        color: '#4FC3F7', // Azul claro
        unlocked: false,
        unlockedAt: null
      },
      {
        id: 'course_complete',
        title: 'Mestre da Fluência (Graduation)',
        description: 'Concluiu as 90 lições! Parabéns, você é fluente!',
        icon: 'school',
        color: '#FFD54F', // Dourado
        unlocked: false,
        unlockedAt: null
      }
    ]
  }),

  actions: {
    /**
     * Carrega os dados salvos do localStorage
     */
    loadAchievements() {
      const saved = storageService.load()
      if (saved && saved.achievements) {
        saved.achievements.forEach(savedAch => {
          const ach = this.achievementsList.find(a => a.id === savedAch.id)
          if (ach) {
            ach.unlocked = true
            ach.unlockedAt = savedAch.unlockedAt
          }
        })
      }
    },

    /**
     * Verifica e desbloqueia conquistas com base no progresso
     * @param {number} completedCount - Aulas concluídas
     * @param {number} streak - Streak atual
     */
    checkAchievements(completedCount, streak) {
      let newlyUnlocked = false
      const todayStr = new Date().toLocaleDateString('sv')

      this.achievementsList.forEach(ach => {
        if (ach.unlocked) return // Já conquistada

        let shouldUnlock = false

        switch (ach.id) {
          case 'first_lesson':
            shouldUnlock = completedCount >= 1
            break
          case 'streak_7':
            shouldUnlock = streak >= 7
            break
          case 'streak_15':
            shouldUnlock = streak >= 15
            break
          case 'streak_30':
            shouldUnlock = streak >= 30
            break
          case 'lessons_50':
            shouldUnlock = completedCount >= 50
            break
          case 'course_complete':
            shouldUnlock = completedCount >= 90
            break
        }

        if (shouldUnlock) {
          ach.unlocked = true
          ach.unlockedAt = todayStr
          newlyUnlocked = true

          // Exibe notificação estilizada
          Notify.create({
            message: `🎉 Nova Conquista Desbloqueada: ${ach.title}`,
            caption: ach.description,
            icon: ach.icon,
            color: 'purple-10',
            textColor: 'white',
            position: 'top-right',
            timeout: 6000,
            badgeStyle: `background-color: ${ach.color}`
          })
        }
      })

      if (newlyUnlocked) {
        this.saveAchievements()
      }
    },

    /**
     * Salva o status das conquistas no LocalStorage
     */
    saveAchievements() {
      const saved = storageService.load() || {}
      saved.achievements = this.achievementsList
        .filter(a => a.unlocked)
        .map(a => ({ id: a.id, unlockedAt: a.unlockedAt }))
      storageService.save(saved)
    },

    /**
     * Reseta as conquistas
     */
    resetAchievements() {
      this.achievementsList.forEach(a => {
        a.unlocked = false
        a.unlockedAt = null
      })
      this.saveAchievements()
    }
  }
})
export default useAchievementsStore
