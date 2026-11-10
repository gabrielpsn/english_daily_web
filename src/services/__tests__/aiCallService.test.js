import { describe, it, expect, beforeEach, vi } from 'vitest'
import { aiCallService, CALL_PERSONAS } from '../aiCallService'
import { callSoundEffects } from '../callRingtone'

describe('aiCallService.js - Serviço de Inteligência para Chamada de Vídeo', () => {
  beforeEach(() => {
    aiCallService.conversationHistory = []
    aiCallService.currentScenarioIndex = 0
  })

  it('deve disponibilizar personas estruturadas com sotaques e cenários reais', () => {
    expect(CALL_PERSONAS.length).toBeGreaterThanOrEqual(3)

    const sarah = CALL_PERSONAS.find(p => p.id === 'sarah_recruiter')
    expect(sarah).toBeDefined()
    expect(sarah.accent).toBe('UK')
    expect(sarah.initialGreeting).toContain('Gabriel')

    const david = CALL_PERSONAS.find(p => p.id === 'david_architect')
    expect(david).toBeDefined()
    expect(david.accent).toBe('US')

    const alex = CALL_PERSONAS.find(p => p.id === 'alex_lead')
    expect(alex).toBeDefined()
  })

  it('deve inicializar o histórico da chamada com a saudação da persona', () => {
    const persona = CALL_PERSONAS[0]
    aiCallService.initCall(persona, 'Gabriel')

    expect(aiCallService.conversationHistory.length).toBe(1)
    expect(aiCallService.conversationHistory[0].speaker).toBe(persona.name)
    expect(aiCallService.conversationHistory[0].text).toBe(persona.initialGreeting)
  })

  it('deve gerar respostas locais inteligentes e sugestões de fala no modo offline', async () => {
    const persona = CALL_PERSONAS[0]
    aiCallService.initCall(persona, 'Gabriel')

    const result = await aiCallService.getResponse(
      persona,
      'Yes, I can hear you clearly! Nice to meet you.',
      '', // Sem API key -> usa motor local inteligente
      'Gabriel'
    )

    expect(result).toBeDefined()
    expect(result.reply).toBeDefined()
    expect(typeof result.reply).toBe('string')
    expect(Array.isArray(result.hints)).toBe(true)
    expect(result.hints.length).toBeGreaterThan(0)

    // O histórico deve conter a mensagem do usuário e da IA
    expect(aiCallService.conversationHistory.length).toBe(3)
    expect(aiCallService.conversationHistory[1].role).toBe('user')
    expect(aiCallService.conversationHistory[2].role).toBe('model')
  })
})

describe('callRingtone.js - Efeitos Sonoros Web Audio', () => {
  it('deve permitir chamar stop sem lançar erros em ambiente de teste', () => {
    expect(() => callSoundEffects.stop()).not.toThrow()
    expect(() => callSoundEffects.playHangupSound()).not.toThrow()
    expect(() => callSoundEffects.playConnectSound()).not.toThrow()
  })
})
