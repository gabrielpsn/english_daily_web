import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Inicializa o cliente Supabase de forma segura
// Se as credenciais não estiverem configuradas, o cliente será nulo
// permitindo que o app continue funcionando 100% no modo local sem quebras.
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

if (!supabase) {
  console.warn(
    'Supabase: Chaves de API não configuradas no .env. O aplicativo funcionará exclusivamente no modo offline/local.'
  )
}

export const supabaseService = {
  /**
   * Verifica se o Supabase está ativado e configurado
   */
  isEnabled() {
    return !!supabase
  },

  // ==========================================
  // SERVIÇOS DE AUTENTICAÇÃO
  // ==========================================

  /**
   * Cria uma nova conta de usuário
   */
  async signUp(email, password, fullName) {
    if (!supabase) throw new Error('Supabase não configurado')
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })

    if (error) throw error
    return data
  },

  /**
   * Realiza o login do usuário
   */
  async signIn(email, password) {
    if (!supabase) throw new Error('Supabase não configurado')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    return data
  },

  /**
   * Realiza o login com provedor social (OAuth)
   * @param {string} provider - 'github' | 'google'
   */
  async signInWithOAuth(provider) {
    if (!supabase) throw new Error('Supabase não configurado')

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin
      }
    })

    if (error) throw error
    return data
  },

  /**
   * Encerra a sessão do usuário
   */
  async signOut() {
    if (!supabase) return
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  /**
   * Obtém o usuário logado atualmente
   */
  async getCurrentUser() {
    if (!supabase) return null
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) return null
    return user
  },

  /**
   * Escuta as mudanças de estado de autenticação (login/logout/token_refreshed)
   */
  onAuthStateChange(callback) {
    if (!supabase) return () => {}
    const { data: { subscription } } = supabase.auth.onAuthStateChange(callback)
    return () => subscription.unsubscribe()
  },

  // ==========================================
  // SERVIÇOS DE PRODUTIVIDADE & SINCRONIZAÇÃO
  // ==========================================

  /**
   * Salva ou atualiza o progresso do estudo do usuário na nuvem (UPSERT)
   */
  async saveProgress(userId, { completedLessons, studyDates, streak, totalMinutes }) {
    if (!supabase) return
    const { error } = await supabase
      .from('study_progress')
      .upsert({
        user_id: userId,
        completed_lessons: completedLessons,
        study_dates: studyDates,
        streak,
        total_minutes: totalMinutes,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' })

    if (error) {
      console.error('Erro ao salvar progresso no Supabase:', error)
      throw error
    }
  },

  /**
   * Carrega o progresso de estudo do usuário na nuvem
   */
  async loadProgress(userId) {
    if (!supabase) return null
    const { data, error } = await supabase
      .from('study_progress')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (error) {
      console.error('Erro ao carregar progresso do Supabase:', error)
      throw error
    }
    return data
  },

  /**
   * Salva ou atualiza uma anotação diária na nuvem
   */
  async saveNote(userId, day, text) {
    if (!supabase) return
    const { error } = await supabase
      .from('daily_notes')
      .upsert({
        user_id: userId,
        day,
        note_text: text,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,day' })

    if (error) {
      console.error(`Erro ao salvar anotação do dia ${day} no Supabase:`, error)
      throw error
    }
  },

  /**
   * Carrega todas as anotações diárias do usuário
   */
  async loadNotes(userId) {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('daily_notes')
      .select('day, note_text')
      .eq('user_id', userId)

    if (error) {
      console.error('Erro ao carregar anotações do Supabase:', error)
      throw error
    }
    return data || []
  },

  /**
   * Salva ou atualiza as configurações de preferência
   */
  async saveSettings(userId, settings) {
    if (!supabase) return
    const { error } = await supabase
      .from('user_settings')
      .upsert({
        user_id: userId,
        theme: settings.theme,
        notifications: settings.notifications,
        speech_enabled: settings.speechEnabled,
        voice_recognition_enabled: settings.voiceRecognitionEnabled,
        accent: settings.accent,
        voice_name: settings.voiceName,
        speed: settings.speed,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' })

    if (error) {
      console.error('Erro ao salvar preferências no Supabase:', error)
      throw error
    }
  },

  /**
   * Carrega as configurações do usuário na nuvem
   */
  async loadSettings(userId) {
    if (!supabase) return null
    const { data, error } = await supabase
      .from('user_settings')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (error) {
      console.error('Erro ao carregar configurações do Supabase:', error)
      throw error
    }
    return data
  },

  /**
   * Salva ou atualiza a lista de conquistas do usuário na nuvem
   */
  async saveAchievements(userId, unlockedAchievements) {
    if (!supabase) return
    if (unlockedAchievements.length === 0) return

    const records = unlockedAchievements.map(ach => ({
      user_id: userId,
      achievement_id: ach.id,
      unlocked_at: ach.unlockedAt
    }))

    const { error } = await supabase
      .from('achievements')
      .upsert(records, { onConflict: 'user_id,achievement_id' })

    if (error) {
      console.error('Erro ao salvar conquistas no Supabase:', error)
      throw error
    }
  },

  /**
   * Carrega as conquistas do usuário na nuvem
   */
  async loadAchievements(userId) {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('achievements')
      .select('achievement_id, unlocked_at')
      .eq('user_id', userId)

    if (error) {
      console.error('Erro ao carregar conquistas do Supabase:', error)
      throw error
    }
    return data || []
  }
}

export default supabaseService
