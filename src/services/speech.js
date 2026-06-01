// Serviço de Síntese de Voz (TTS) e Reconhecimento de Voz (STT) via Web Speech API

// Verifica suporte às APIs do navegador
const hasSpeechSynthesis = typeof window !== 'undefined' && 'speechSynthesis' in window
const SpeechRecognition = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition)

let recognitionInstance = null

export const speechService = {
  // --- SÍNTESE DE VOZ (TEXT-TO-SPEECH) ---

  /**
   * Verifica se a síntese é suportada no navegador atual
   * @returns {boolean}
   */
  isSynthesisSupported() {
    return hasSpeechSynthesis
  },

  /**
   * Obtém a lista de vozes disponíveis filtradas por sotaque
   * @param {string} accentCode - 'US' | 'UK' | 'AU'
   * @returns {Array} Vozes disponíveis
   */
  getAvailableVoices(accentCode = 'US') {
    if (!hasSpeechSynthesis) return []

    const voices = window.speechSynthesis.getVoices()
    
    // Mapeamento de sotaques para tags de idiomas
    const accentLangMap = {
      'US': 'en-US',
      'UK': 'en-GB',
      'AU': 'en-AU'
    }

    const targetLang = accentLangMap[accentCode] || 'en-US'
    
    // Filtra vozes inglesas com o sotaque escolhido
    return voices.filter(v => v.lang.toLowerCase() === targetLang.toLowerCase() || v.lang.startsWith(targetLang.split('-')[0]))
  },

  /**
   * Fala um texto em voz alta com sotaque e velocidade configuráveis
   * @param {string} text - Texto a ser pronunciado
   * @param {string} accentCode - 'US' | 'UK' | 'AU'
   * @param {number} rate - Velocidade da fala (0.5 a 2.0)
   * @returns {Promise} Resolvida quando a fala terminar
   */
  speak(text, accentCode = 'US', rate = 0.95) {
    return new Promise((resolve, reject) => {
      if (!hasSpeechSynthesis) {
        return reject(new Error('Síntese de voz não é suportada neste navegador.'))
      }

      // Cancela falas anteriores ativas
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      
      // Encontra a voz adequada baseada no sotaque
      const voices = this.getAvailableVoices(accentCode)
      if (voices.length > 0) {
        // Prefere vozes locais/nativas premium se disponíveis
        const preferredVoice = voices.find(v => v.localService) || voices[0]
        utterance.voice = preferredVoice
      }

      // Mapeamento de sotaque para a tag de idioma exata
      const accentLangMap = {
        'US': 'en-US',
        'UK': 'en-GB',
        'AU': 'en-AU'
      }
      utterance.lang = accentLangMap[accentCode] || 'en-US'
      utterance.rate = rate
      utterance.pitch = 1.0

      utterance.onend = () => resolve()
      utterance.onerror = (e) => reject(e)

      window.speechSynthesis.speak(utterance)
    })
  },

  /**
   * Interrompe qualquer reprodução de áudio de síntese de voz ativa
   */
  stopSpeaking() {
    if (hasSpeechSynthesis) {
      window.speechSynthesis.cancel()
    }
  },

  // --- RECONHECIMENTO DE VOZ (SPEECH-TO-TEXT) ---

  /**
   * Verifica se o reconhecimento de voz é suportado
   * @returns {boolean}
   */
  isRecognitionSupported() {
    return !!SpeechRecognition
  },

  /**
   * Inicia o reconhecimento de voz
   * @param {string} accentCode - Sotaque esperado ('US' | 'UK' | 'AU')
   * @param {Function} onResult - Callback para receber o texto reconhecido
   * @param {Function} onError - Callback para tratamento de erros
   * @param {Function} onEnd - Callback disparado ao fechar o microfone
   */
  startListening(accentCode = 'US', onResult, onError, onEnd) {
    if (!this.isRecognitionSupported()) {
      if (onError) onError(new Error('Reconhecimento de voz não suportado neste navegador. Use Chrome/Edge.'))
      return
    }

    // Para qualquer instância anterior para evitar erros
    this.stopListening()

    recognitionInstance = new SpeechRecognition()
    recognitionInstance.continuous = false
    recognitionInstance.interimResults = false

    const accentLangMap = {
      'US': 'en-US',
      'UK': 'en-GB',
      'AU': 'en-AU'
    }
    recognitionInstance.lang = accentLangMap[accentCode] || 'en-US'

    recognitionInstance.onresult = (event) => {
      if (event.results && event.results.length > 0) {
        const textResult = event.results[0][0].transcript
        if (onResult) onResult(textResult)
      }
    }

    recognitionInstance.onerror = (event) => {
      console.error('Erro no reconhecimento de voz:', event.error)
      if (onError) onError(event)
    }

    recognitionInstance.onend = () => {
      recognitionInstance = null
      if (onEnd) onEnd()
    }

    try {
      recognitionInstance.start()
    } catch (e) {
      if (onError) onError(e)
    }
  },

  /**
   * Para o reconhecimento de voz ativo
   */
  stopListening() {
    if (recognitionInstance) {
      try {
        recognitionInstance.stop()
      } catch (e) {
        console.warn('Erro ao parar reconhecimento de voz:', e)
      }
      recognitionInstance = null
    }
  }
}

export default speechService
