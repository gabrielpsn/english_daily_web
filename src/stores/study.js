import { defineStore } from 'pinia'
import storageService from '../services/storage'
import lessonsData from '../data/lessonsData'

export const useStudyStore = defineStore('study', {
  state: () => ({
    completedLessons: [], // IDs das aulas concluídas (ex: [1, 2])
    notes: {},           // Dicionário de anotações { "1": "anotação da aula 1" }
    studyDates: [],      // Array de datas com estudo real (formato 'YYYY-MM-DD')
    streak: 0,           // Quantidade de dias seguidos estudando
    totalMinutes: 0      // Tempo total estudado em minutos acumulados
  }),

  getters: {
    /**
     * Retorna a quantidade total de aulas concluídas
     */
    completedCount: (state) => state.completedLessons.length,

    /**
     * Retorna o percentual geral de progresso do curso (90 dias)
     */
    progress: (state) => {
      const total = 90
      if (state.completedLessons.length === 0) return 0
      return Math.round((state.completedLessons.length / total) * 100)
    },

    /**
     * Retorna a próxima aula pendente
     */
    nextLesson: (state) => {
      for (let i = 1; i <= 90; i++) {
        if (!state.completedLessons.includes(i)) {
          return lessonsData.find(lesson => lesson.day === i)
        }
      }
      // Se concluiu todas, retorna a última aula como referência
      return lessonsData[89]
    },

    /**
     * Retorna as aulas agrupadas por status para exibição
     */
    lessonsStatusList: (state) => {
      return lessonsData.map(lesson => {
        let status = 'future' // future (cinza), current (azul), completed (verde)
        if (state.completedLessons.includes(lesson.day)) {
          status = 'completed'
        } else {
          // A primeira aula não concluída é a atual
          const isNextPending = !state.completedLessons.includes(lesson.day) &&
            (lesson.day === 1 || state.completedLessons.includes(lesson.day - 1))
          if (isNextPending) {
            status = 'current'
          }
        }
        return {
          ...lesson,
          status
        }
      })
    }
  },

  actions: {
    /**
     * Carrega os dados salvos do localStorage
     */
    loadStudyData() {
      const saved = storageService.load()
      if (saved) {
        if (saved.completedLessons) this.completedLessons = saved.completedLessons
        if (saved.notes) this.notes = saved.notes
        if (saved.studyDates) this.studyDates = saved.studyDates
        if (saved.streak) this.streak = saved.streak
        if (saved.totalMinutes) this.totalMinutes = saved.totalMinutes
      }
      this.recalculateActiveStreak()
    },

    /**
     * Salva o estado atual no localStorage
     */
    saveStudyData() {
      const saved = storageService.load() || {}
      saved.completedLessons = this.completedLessons
      saved.notes = this.notes
      saved.studyDates = this.studyDates
      saved.streak = this.streak
      saved.totalMinutes = this.totalMinutes
      storageService.save(saved)
    },

    /**
     * Marca uma lição como concluída ou pendente e recalcula o streak
     * @param {number} day - O dia da lição
     * @param {boolean} isCompleted - Status de conclusão
     */
    completeLesson(day, isCompleted = true) {
      if (isCompleted) {
        if (!this.completedLessons.includes(day)) {
          this.completedLessons.push(day)
          // Incrementa tempo estudado médio (15 min por aula padrão)
          this.totalMinutes += 15
          this.registerStudyDate()
        }
      } else {
        const index = this.completedLessons.indexOf(day)
        if (index > -1) {
          this.completedLessons.splice(index, 1)
          if (this.totalMinutes >= 15) this.totalMinutes -= 15
        }
      }
      
      this.recalculateActiveStreak()
      this.saveStudyData()
    },

    /**
     * Salva uma anotação vinculada a uma lição
     * @param {number} day - Dia da lição
     * @param {string} text - Conteúdo da nota
     */
    saveNote(day, text) {
      this.notes[day.toString()] = text
      this.registerStudyDate()
      this.saveStudyData()
    },

    /**
     * Registra o dia de hoje como data estudada
     */
    registerStudyDate() {
      const todayStr = new Date().toLocaleDateString('sv') // Sweden format 'YYYY-MM-DD'
      if (!this.studyDates.includes(todayStr)) {
        this.studyDates.push(todayStr)
      }
    },

    /**
     * Recalcula o streak ativo de forma precisa
     */
    recalculateActiveStreak() {
      if (this.studyDates.length === 0) {
        this.streak = 0
        return
      }

      // Ordena as datas em ordem cronológica
      const sortedDates = [...this.studyDates]
        .map(d => new Date(d))
        .sort((a, b) => a - b)

      let currentStreak = 1
      let maxStreak = 1

      for (let i = 1; i < sortedDates.length; i++) {
        const prev = sortedDates[i - 1]
        const curr = sortedDates[i]
        
        // Zera a hora para calcular apenas diferença em dias inteiros
        prev.setHours(0,0,0,0)
        curr.setHours(0,0,0,0)

        const diffTime = curr - prev
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays === 1) {
          currentStreak++
        } else if (diffDays > 1) {
          currentStreak = 1 // Quebra do streak anterior, recomeça do 1
        }
        
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak
        }
      }

      // Valida se o streak atual ainda está ativo
      // O último dia estudado deve ser hoje ou ontem. Caso contrário, o streak foi quebrado.
      const today = new Date()
      today.setHours(0,0,0,0)
      
      const lastStudyDate = sortedDates[sortedDates.length - 1]
      lastStudyDate.setHours(0,0,0,0)

      const diffTimeFromLast = today - lastStudyDate
      const diffDaysFromLast = Math.round(diffTimeFromLast / (1000 * 60 * 60 * 24))

      if (diffDaysFromLast > 1) {
        this.streak = 0 // Mais de 1 dia sem estudar: streak ativo zera
      } else {
        // Se estudou hoje ou ontem, o streak ativo é a sequência atual contada a partir do último bloco
        // Vamos varrer de trás para a frente a partir de lastStudyDate para saber a sequência ativa exata
        let activeSeq = 1
        for (let i = sortedDates.length - 1; i > 0; i--) {
          const curr = sortedDates[i]
          const prev = sortedDates[i - 1]
          curr.setHours(0,0,0,0)
          prev.setHours(0,0,0,0)
          
          const diff = Math.round((curr - prev) / (1000 * 60 * 60 * 24))
          if (diff === 1) {
            activeSeq++
          } else if (diff > 1) {
            break
          }
        }
        this.streak = activeSeq
      }
    },

    /**
     * Limpa todo o estado do Pinia e LocalStorage
     */
    resetAllData() {
      this.completedLessons = []
      this.notes = {}
      this.studyDates = []
      this.streak = 0
      this.totalMinutes = 0
      
      storageService.reset()
    }
  }
})
export default useStudyStore
