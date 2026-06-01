import { defineStore } from 'pinia'
import { Dark } from 'quasar'
import storageService from '../services/storage'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'dark',
    notifications: true,
    speechEnabled: true,
    voiceRecognitionEnabled: true,
    accent: 'US', // 'US', 'UK', 'AU'
    voiceName: '',
    speed: 0.95
  }),

  actions: {
    /**
     * Inicializa as configurações aplicando-as
     */
    initSettings() {
      const saved = storageService.load()
      if (saved && saved.settings) {
        this.$patch(saved.settings)
      }
      
      // Seta o estado do Dark Mode no Quasar
      Dark.set(this.theme === 'dark')
    },

    /**
     * Alterna o tema de cores
     */
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      Dark.set(this.theme === 'dark')
      this.saveSettings()
    },

    /**
     * Atualiza sotaque selecionado
     * @param {string} accentCode - 'US' | 'UK' | 'AU'
     */
    setAccent(accentCode) {
      this.accent = accentCode
      this.saveSettings()
    },

    /**
     * Salva as configurações localmente e sincroniza na nuvem se autenticado
     */
    saveSettings() {
      const saved = storageService.load() || {}
      saved.settings = {
        theme: this.theme,
        notifications: this.notifications,
        speechEnabled: this.speechEnabled,
        voiceRecognitionEnabled: this.voiceRecognitionEnabled,
        accent: this.accent,
        voiceName: this.voiceName,
        speed: this.speed
      }
      storageService.save(saved)

      // Sincroniza assincronamente com o Supabase se logado (evitando importação circular)
      import('./auth').then(({ useAuthStore }) => {
        const authStore = useAuthStore()
        if (authStore.isAuthenticated) {
          import('../services/supabase').then(({ supabaseService }) => {
            supabaseService.saveSettings(authStore.userId, this).catch(err => {
              console.error('Erro ao sincronizar configurações na nuvem:', err)
            })
          })
        }
      })
    }
  }
})
export default useSettingsStore
