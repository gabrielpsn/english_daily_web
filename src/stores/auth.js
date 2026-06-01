import { defineStore } from 'pinia'
import supabaseService from '../services/supabase'
import { useStudyStore } from './study'
import { useSettingsStore } from './settings'
import { useAchievementsStore } from './achievements'
import { Notify } from 'quasar'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    syncing: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    userId: (state) => state.user?.id || null,
    userEmail: (state) => state.user?.email || '',
    displayName: (state) => {
      if (!state.user) return 'Visitante'
      const fullName = state.user?.user_metadata?.full_name || state.user?.email?.split('@')[0] || 'Visitante'
      return fullName.trim().split(' ')[0]
    }
  },

  actions: {
    /**
     * Inicializa a escuta de autenticação do Supabase
     */
    initAuth() {
      if (!supabaseService.isEnabled()) return

      this.loading = true
      
      // Obtém usuário inicial se houver sessão ativa
      supabaseService.getCurrentUser().then(user => {
        this.user = user
        this.loading = false
        
        if (user) {
          this.syncFromCloud()
        }
      }).catch(err => {
        console.error('Erro ao verificar sessão atual:', err)
        this.loading = false
      })

      // Escuta mudanças de estado de autenticação
      supabaseService.onAuthStateChange(async (event, session) => {
        const newUser = session?.user || null
        const userChanged = this.user?.id !== newUser?.id

        this.user = newUser

        if (event === 'SIGNED_IN' && newUser) {
          Notify.create({
            message: `Bem-vindo de volta, ${this.displayName}!`,
            color: 'accent',
            icon: 'cloud_done',
            position: 'top-right'
          })
          await this.syncFromCloud()
        } else if (event === 'SIGNED_OUT') {
          // Ao deslogar, resetamos as stores locais para começar limpo
          // ou recarregar do LocalStorage local original
          const studyStore = useStudyStore()
          const settingsStore = useSettingsStore()
          const achievementsStore = useAchievementsStore()

          studyStore.resetAllData()
          achievementsStore.resetAchievements()
          settingsStore.$patch({
            theme: 'dark',
            notifications: true,
            speechEnabled: true,
            voiceRecognitionEnabled: true,
            accent: 'US',
            voiceName: '',
            speed: 0.95
          })
          settingsStore.saveSettings()
          settingsStore.initSettings()

          // Recarrega o localStorage se houver
          studyStore.loadStudyData()
          achievementsStore.loadAchievements()
          settingsStore.initSettings()

          Notify.create({
            message: 'Sessão encerrada com sucesso.',
            color: 'info',
            icon: 'logout',
            position: 'top-right'
          })

          // Redireciona dinamicamente para a tela de login (evitando importação circular)
          import('../router').then(({ default: router }) => {
            if (router.currentRoute.value.name !== 'login') {
              router.push({ name: 'login' })
            }
          })
        }
      })
    },

    /**
     * Registra um novo usuário
     */
    async register(email, password, fullName) {
      this.loading = true
      try {
        const data = await supabaseService.signUp(email, password, fullName)
        Notify.create({
          message: 'Cadastro efetuado! Verifique seu e-mail para confirmar a conta.',
          color: 'positive',
          icon: 'mail_outline',
          timeout: 7000
        })
        return data
      } catch (err) {
        Notify.create({
          message: 'Falha no cadastro',
          caption: err.message,
          color: 'negative',
          icon: 'error_outline'
        })
        throw err
      } finally {
        this.loading = false
      }
    },

    /**
     * Realiza login por e-mail e senha
     */
    async login(email, password) {
      this.loading = true
      try {
        const data = await supabaseService.signIn(email, password)
        if (data && data.user) {
          this.user = data.user
        }
        return data
      } catch (err) {
        Notify.create({
          message: 'Falha ao efetuar login',
          caption: err.message,
          color: 'negative',
          icon: 'error_outline'
        })
        throw err
      } finally {
        this.loading = false
      }
    },

    /**
     * Realiza login por provedor social (OAuth)
     */
    async loginWithOAuth(provider) {
      this.loading = true
      try {
        const data = await supabaseService.signInWithOAuth(provider)
        return data
      } catch (err) {
        Notify.create({
          message: `Falha ao efetuar login com ${provider}`,
          caption: err.message,
          color: 'negative',
          icon: 'error_outline'
        })
        throw err
      } finally {
        this.loading = false
      }
    },

    /**
     * Encerra a sessão
     */
    async logout() {
      this.loading = true
      try {
        await supabaseService.signOut()
      } catch (err) {
        console.error('Erro ao deslogar:', err)
      } finally {
        this.loading = false
      }
    },

    /**
     * Sincroniza dados da nuvem para o app local
     */
    async syncFromCloud() {
      if (!this.userId) return
      this.syncing = true

      const studyStore = useStudyStore()
      const settingsStore = useSettingsStore()
      const achievementsStore = useAchievementsStore()

      try {
        // 1. Carrega Progresso Geral
        const progress = await supabaseService.loadProgress(this.userId)
        if (progress) {
          studyStore.completedLessons = progress.completed_lessons || []
          studyStore.studyDates = progress.study_dates || []
          studyStore.streak = progress.streak || 0
          studyStore.totalMinutes = progress.total_minutes || 0
        }

        // 2. Carrega Anotações
        const notesData = await supabaseService.loadNotes(this.userId)
        const notesObj = {}
        notesData.forEach(n => {
          notesObj[n.day.toString()] = n.note_text
        })
        studyStore.notes = notesObj

        // Salva localmente as informações obtidas
        studyStore.saveStudyData()
        studyStore.recalculateActiveStreak()

        // 3. Carrega Configurações
        const settings = await supabaseService.loadSettings(this.userId)
        if (settings) {
          settingsStore.$patch({
            theme: settings.theme,
            notifications: settings.notifications,
            speechEnabled: settings.speech_enabled,
            voiceRecognitionEnabled: settings.voice_recognition_enabled,
            accent: settings.accent,
            voiceName: settings.voice_name,
            speed: parseFloat(settings.speed)
          })
          settingsStore.saveSettings()
          settingsStore.initSettings()
        }

        // 4. Carrega Conquistas
        const achievementsData = await supabaseService.loadAchievements(this.userId)
        if (achievementsData.length > 0) {
          achievementsStore.resetAchievements()
          achievementsData.forEach(savedAch => {
            const ach = achievementsStore.achievementsList.find(a => a.id === savedAch.achievement_id)
            if (ach) {
              ach.unlocked = true
              ach.unlockedAt = savedAch.unlocked_at
            }
          })
          achievementsStore.saveAchievements()
        }
      } catch (err) {
        console.error('Erro ao sincronizar dados da nuvem:', err)
        Notify.create({
          message: 'Erro na sincronização de dados.',
          caption: 'O app continuará rodando com os dados locais salvos.',
          color: 'warning',
          icon: 'cloud_off'
        })
      } finally {
        this.syncing = false
      }
    },

    /**
     * Envia todos os dados locais vigentes para a nuvem (para o caso de primeiro login com dados locais existentes)
     */
    async syncToCloud() {
      if (!this.userId) return
      this.syncing = true

      const studyStore = useStudyStore()
      const settingsStore = useSettingsStore()
      const achievementsStore = useAchievementsStore()

      try {
        // Envia progresso
        await supabaseService.saveProgress(this.userId, {
          completedLessons: studyStore.completedLessons,
          studyDates: studyStore.studyDates,
          streak: studyStore.streak,
          totalMinutes: studyStore.totalMinutes
        })

        // Envia anotações uma a uma
        const notePromises = Object.entries(studyStore.notes).map(([day, text]) => {
          return supabaseService.saveNote(this.userId, parseInt(day), text)
        })
        await Promise.all(notePromises)

        // Envia configurações
        await supabaseService.saveSettings(this.userId, settingsStore)

        // Envia conquistas desbloqueadas
        const unlockedAchievements = achievementsStore.achievementsList
          .filter(a => a.unlocked)
          .map(a => ({ id: a.id, unlockedAt: a.unlockedAt }))
        await supabaseService.saveAchievements(this.userId, unlockedAchievements)

        Notify.create({
          message: 'Sincronização completa de progresso local enviada para a nuvem!',
          color: 'positive',
          icon: 'cloud_upload'
        })
      } catch (err) {
        console.error('Erro ao enviar dados locais para o Supabase:', err)
        Notify.create({
          message: 'Falha ao sincronizar dados locais para a nuvem.',
          color: 'negative',
          icon: 'error_outline'
        })
      } finally {
        this.syncing = false
      }
    }
  }
})

export default useAuthStore
