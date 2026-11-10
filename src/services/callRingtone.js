/**
 * Gerador de efeitos sonoros de chamada (Ringtone / Dial Tone / Hangup)
 * utilizando Web Audio API nativa (100% offline, sem arquivos externos).
 */

class CallSoundEffects {
  constructor() {
    this.audioCtx = null
    this.ringInterval = null
  }

  getAudioContext() {
    if (typeof window === 'undefined') return null
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass()
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume()
    }
    return this.audioCtx
  }

  /**
   * Toca o tom de chamada recebida (WhatsApp / Phone Ring) em loop
   */
  startIncomingRingtone() {
    this.stop()
    const ctx = this.getAudioContext()
    if (!ctx) return

    const playRingBurst = () => {
      try {
        const now = ctx.currentTime

        // Duas frequências harmônicas combinadas (som de chamada moderno)
        const osc1 = ctx.createOscillator()
        const osc2 = ctx.createOscillator()
        const gain = ctx.createGain()

        osc1.type = 'sine'
        osc2.type = 'sine'
        osc1.frequency.setValueAtTime(440, now) // A4
        osc2.frequency.setValueAtTime(480, now) // ~B4

        gain.gain.setValueAtTime(0, now)
        gain.gain.linearRampToValueAtTime(0.2, now + 0.05)
        gain.gain.setValueAtTime(0.2, now + 0.8)
        gain.gain.linearRampToValueAtTime(0, now + 0.9)

        // Segundo pulso da chamada
        gain.gain.setValueAtTime(0, now + 1.1)
        gain.gain.linearRampToValueAtTime(0.2, now + 1.15)
        gain.gain.setValueAtTime(0.2, now + 1.9)
        gain.gain.linearRampToValueAtTime(0, now + 2.0)

        osc1.connect(gain)
        osc2.connect(gain)
        gain.connect(ctx.destination)

        osc1.start(now)
        osc2.start(now)
        osc1.stop(now + 2.1)
        osc2.stop(now + 2.1)
      } catch (err) {
        console.warn('Erro ao tocar ringtone:', err)
      }
    }

    playRingBurst()
    this.ringInterval = setInterval(playRingBurst, 3200)
  }

  /**
   * Som de chamada atendida / conectada
   */
  playConnectSound() {
    this.stop()
    const ctx = this.getAudioContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(523.25, now) // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15) // E5

      gain.gain.setValueAtTime(0.25, now)
      gain.gain.linearRampToValueAtTime(0, now + 0.25)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.25)
    } catch {
      // Ignora
    }
  }

  /**
   * Som de desligar chamada (Hangup tone)
   */
  playHangupSound() {
    this.stop()
    const ctx = this.getAudioContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(400, now)
      osc.frequency.setValueAtTime(0, now + 0.2)

      gain.gain.setValueAtTime(0.2, now)
      gain.gain.linearRampToValueAtTime(0, now + 0.25)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.25)
    } catch {
      // Ignora
    }
  }

  /**
   * Para qualquer som de chamada ativo
   */
  stop() {
    if (this.ringInterval) {
      clearInterval(this.ringInterval)
      this.ringInterval = null
    }
  }
}

export const callSoundEffects = new CallSoundEffects()
export default callSoundEffects
