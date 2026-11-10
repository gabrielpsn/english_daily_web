/**
 * Serviço utilitário para gravação de áudio do microfone via MediaRecorder API.
 * Gerencia o ciclo de vida do MediaStream, formato de codificação e geração de Blob/ObjectURL.
 */

class AudioRecorderService {
  constructor() {
    this.mediaRecorder = null
    this.audioChunks = []
    this.stream = null
    this.startTime = null
    this.mimeType = ''
  }

  /**
   * Verifica se o navegador atual tem suporte a captura de áudio e MediaRecorder
   * @returns {boolean}
   */
  isSupported() {
    const nav = typeof navigator !== 'undefined' ? navigator : null
    const mr = typeof window !== 'undefined' ? window.MediaRecorder : (typeof MediaRecorder !== 'undefined' ? MediaRecorder : null)
    return !!(nav?.mediaDevices?.getUserMedia && mr)
  }

  /**
   * Seleciona o melhor MIME type suportado pelo navegador
   * @returns {string}
   */
  getBestMimeType() {
    const mr = typeof window !== 'undefined' ? window.MediaRecorder : (typeof MediaRecorder !== 'undefined' ? MediaRecorder : null)
    if (!mr) {
      return ''
    }

    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4',
      'audio/aac'
    ]

    for (const type of candidates) {
      if (typeof mr.isTypeSupported === 'function' && mr.isTypeSupported(type)) {
        return type
      }
    }
    return ''
  }

  /**
   * Inicia a gravação do microfone
   * @returns {Promise<void>}
   */
  async start() {
    if (!this.isSupported()) {
      throw new Error('A gravação de áudio não é suportada neste navegador ou ambiente.')
    }

    // Se houver gravação anterior em andamento, encerra primeiro
    this.stopAndDiscard()

    this.audioChunks = []
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    })

    this.mimeType = this.getBestMimeType()
    const options = this.mimeType ? { mimeType: this.mimeType } : undefined

    this.mediaRecorder = new MediaRecorder(this.stream, options)

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.audioChunks.push(event.data)
      }
    }

    this.startTime = Date.now()
    this.mediaRecorder.start(100) // Coleta chunks a cada 100ms
  }

  /**
   * Finaliza a gravação e retorna os dados do áudio gravado
   * @returns {Promise<{ blob: Blob, audioUrl: string, durationMs: number, mimeType: string }>}
   */
  stop() {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        return reject(new Error('Nenhuma gravação ativa para finalizar.'))
      }

      this.mediaRecorder.onstop = () => {
        try {
          const durationMs = this.startTime ? Date.now() - this.startTime : 0
          const actualMime = this.mimeType || this.mediaRecorder.mimeType || 'audio/webm'
          const blob = new Blob(this.audioChunks, { type: actualMime })
          const audioUrl = URL.createObjectURL(blob)

          this.releaseStream()

          resolve({
            blob,
            audioUrl,
            durationMs,
            mimeType: actualMime
          })
        } catch (err) {
          reject(err)
        }
      }

      this.mediaRecorder.onerror = (event) => {
        this.releaseStream()
        reject(event.error || new Error('Erro durante a gravação de áudio.'))
      }

      this.mediaRecorder.stop()
    })
  }

  /**
   * Interrompe e descarta qualquer gravação ou stream em execução
   */
  stopAndDiscard() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop()
      } catch {
        // Ignora erros ao descartar
      }
    }
    this.releaseStream()
    this.audioChunks = []
    this.startTime = null
    this.mediaRecorder = null
  }

  /**
   * Para os tracks de áudio da captura para liberar o microfone no dispositivo
   */
  releaseStream() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => {
        try {
          track.stop()
        } catch {
          // Ignora
        }
      })
      this.stream = null
    }
  }

  /**
   * Revoga uma ObjectURL previamente criada para evitar vazamentos de memória
   * @param {string} url 
   */
  revokeUrl(url) {
    if (url && typeof window !== 'undefined' && typeof URL?.revokeObjectURL === 'function') {
      try {
        URL.revokeObjectURL(url)
      } catch {
        // Ignora
      }
    }
  }
}

export const audioRecorderService = new AudioRecorderService()
export default audioRecorderService
