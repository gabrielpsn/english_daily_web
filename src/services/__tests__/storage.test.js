import { describe, it, expect, beforeEach } from 'vitest'
import { storageService } from '../storage'

// Mock para simular o comportamento do LocalStorage em ambiente Node/Vitest
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

describe('storage.js - Persistência Segura no LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('deve salvar e carregar dados estruturados corretamente', () => {
    const payload = {
      completedLessons: [1, 2, 3],
      streak: 3,
      notes: { '1': 'Ótima aula sobre self-introduction' }
    }

    const saved = storageService.save(payload)
    expect(saved).toBe(true)

    const loaded = storageService.load()
    expect(loaded).toEqual(payload)
  })

  it('deve retornar null ao carregar dados inexistentes', () => {
    const loaded = storageService.load()
    expect(loaded).toBeNull()
  })

  it('deve limpar os dados ao executar reset', () => {
    storageService.save({ completedLessons: [1] })
    expect(storageService.load()).not.toBeNull()

    storageService.reset()
    expect(storageService.load()).toBeNull()
  })
})
