import { describe, it, expect } from 'vitest'
import {
  cleanString,
  expandContractions,
  calculateLevenshtein,
  compareWords,
  calculateSimilarity
} from '../similarity'

describe('similarity.js - Algoritmo de Similaridade e Avaliação de Fala', () => {
  describe('expandContractions', () => {
    it('deve expandir contrações comuns em inglês para a forma canônica', () => {
      expect(expandContractions("I'm a software engineer")).toBe('i am a software engineer')
      expect(expandContractions("We don't have any blockers")).toBe('we do not have any blockers')
      expect(expandContractions("It's working as expected")).toBe('it is working as expected')
      expect(expandContractions("They've finished the sprint")).toBe('they have finished the sprint')
    })

    it('deve lidar com textos vazios ou nulos sem falhar', () => {
      expect(expandContractions('')).toBe('')
      expect(expandContractions(null)).toBe('')
    })
  })

  describe('cleanString', () => {
    it('deve remover pontuações, espaços duplos e normalizar para minúsculas', () => {
      const raw = ' Hello, World! This is a test...   '
      expect(cleanString(raw)).toBe('hello world this is a test')
    })
  })

  describe('calculateLevenshtein', () => {
    it('deve retornar 0 para strings idênticas', () => {
      expect(calculateLevenshtein('developer', 'developer')).toBe(0)
    })

    it('deve calcular a distância correta para inserções, deleções e substituições', () => {
      expect(calculateLevenshtein('cat', 'hat')).toBe(1) // substituição
      expect(calculateLevenshtein('book', 'books')).toBe(1) // inserção
      expect(calculateLevenshtein('code', 'cod')).toBe(1) // deleção
    })
  })

  describe('compareWords', () => {
    it('deve identificar correspondências exatas e aproximadas entre palavras', () => {
      const original = 'I am a software developer'
      const spoken = 'I am a softwar developer'
      const diff = compareWords(original, spoken)

      expect(diff).toEqual([
        { word: 'i', matched: true },
        { word: 'am', matched: true },
        { word: 'a', matched: true },
        { word: 'software', matched: true }, // aproximação válida
        { word: 'developer', matched: true }
      ])
    })
  })

  describe('calculateSimilarity', () => {
    it('deve retornar 100% para frases idênticas', () => {
      const phrase = 'Yesterday I worked on the login screen'
      expect(calculateSimilarity(phrase, phrase)).toBe(100)
    })

    it('deve retornar 100% quando a única diferença for uma contração válida', () => {
      const original = "I'm a web developer"
      const spoken = 'I am a web developer'
      expect(calculateSimilarity(original, spoken)).toBe(100)
    })

    it('deve conceder pontuação alta (>= 80%) para pronúncia quase perfeita com pequeno erro', () => {
      const original = 'Can you please review my pull request today?'
      const spoken = 'Can you please review my pull requests today?'
      const score = calculateSimilarity(original, spoken)
      expect(score).toBeGreaterThanOrEqual(85)
    })

    it('deve retornar pontuação baixa para frases completamente diferentes', () => {
      const original = 'Good morning team'
      const spoken = 'I love eating pizza on weekends'
      const score = calculateSimilarity(original, spoken)
      expect(score).toBeLessThan(35)
    })
  })
})
