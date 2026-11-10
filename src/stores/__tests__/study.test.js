import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

// Mock da store de autenticação para isolar testes unitários em ambiente Node
vi.mock('../auth', () => ({
  useAuthStore: () => ({
    isAuthenticated: false,
    userId: null
  })
}))

import { useStudyStore } from '../study'

// Mock de localStorage em memória
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    removeItem: (key) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    }
  }
})()

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true
})

describe('study.js - Store de Estudos e Algoritmo SRS (Leitner)', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('deve inicializar com estado limpo', () => {
    const store = useStudyStore()
    expect(store.completedLessons).toEqual([])
    expect(store.streak).toBe(0)
    expect(store.flashcards).toEqual({})
  })

  it('deve completar uma lição e atualizar métricas', () => {
    const store = useStudyStore()
    store.completeLesson(1, true)

    expect(store.completedLessons).toContain(1)
    expect(store.completedCount).toBe(1)
    expect(store.totalMinutes).toBe(15)
  })

  it('deve registrar revisão de flashcard com algoritmo Leitner (SRS)', () => {
    const store = useStudyStore()

    // 1. Avaliação "hard" -> Box 1, interval 1 dia
    store.recordFlashcardReview('Deployment', 'hard')
    let card = store.flashcards['deployment']
    expect(card).toBeDefined()
    expect(card.box).toBe(1)
    expect(card.interval).toBe(1)
    expect(card.reviews).toBe(1)

    // 2. Avaliação "good" -> Box 2, interval 3 dias
    store.recordFlashcardReview('Deployment', 'good')
    card = store.flashcards['deployment']
    expect(card.box).toBe(2)
    expect(card.interval).toBe(3)
    expect(card.reviews).toBe(2)

    // 3. Avaliação "easy" -> Box sobe +2 (Box 4), interval 14 dias
    store.recordFlashcardReview('Deployment', 'easy')
    card = store.flashcards['deployment']
    expect(card.box).toBe(4)
    expect(card.interval).toBe(14)
    expect(card.reviews).toBe(3)
  })

  it('deve persistir e recarregar os flashcards do localStorage', () => {
    const store = useStudyStore()
    store.recordFlashcardReview('Refactoring', 'easy')
    expect(store.flashcards['refactoring']).toBeDefined()

    // Cria nova instância para testar re-hidratação do storage
    const newStore = useStudyStore()
    newStore.loadStudyData()
    expect(newStore.flashcards['refactoring']).toBeDefined()
    expect(newStore.flashcards['refactoring'].box).toBe(3)
  })

  it('deve registrar e acumular sessões de shadowing por lição', () => {
    const store = useStudyStore()
    expect(store.totalShadowingSessions).toBe(0)

    store.recordShadowingPractice(1)
    store.recordShadowingPractice(1)
    store.recordShadowingPractice(2)

    expect(store.shadowingSessions['1']).toBe(2)
    expect(store.shadowingSessions['2']).toBe(1)
    expect(store.totalShadowingSessions).toBe(3)
  })

  it('deve registrar simulações de Daily Scrum e incrementar tempo de prática', () => {
    const store = useStudyStore()
    expect(store.scrumSessionsCount).toBe(0)
    const initialMinutes = store.totalMinutes

    store.recordScrumSimulation()
    expect(store.scrumSessionsCount).toBe(1)
    expect(store.totalMinutes).toBe(initialMinutes + 5)
  })
})
