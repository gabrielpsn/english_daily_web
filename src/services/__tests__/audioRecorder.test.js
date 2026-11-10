import { describe, it, expect, beforeEach, vi } from 'vitest'
import { audioRecorderService } from '../audioRecorder'

describe('audioRecorder.js - Serviço de Gravação com MediaRecorder', () => {
  beforeEach(() => {
    audioRecorderService.stopAndDiscard()
  })

  it('deve verificar suporte a gravação com base no ambiente', () => {
    // Em ambiente Node padrão sem mocks de mediaDevices, isSupported deve retornar falso
    const supported = audioRecorderService.isSupported()
    expect(typeof supported).toBe('boolean')
  })

  it('deve identificar o melhor MIME type quando MediaRecorder.isTypeSupported estiver disponível', () => {
    const originalMediaRecorder = globalThis.MediaRecorder

    globalThis.MediaRecorder = {
      isTypeSupported: vi.fn((type) => type.includes('audio/webm'))
    }

    const mime = audioRecorderService.getBestMimeType()
    expect(mime).toBe('audio/webm;codecs=opus')

    globalThis.MediaRecorder = originalMediaRecorder
  })

  it('deve lançar erro amigável ao tentar iniciar gravação sem suporte', async () => {
    vi.spyOn(audioRecorderService, 'isSupported').mockReturnValue(false)

    await expect(audioRecorderService.start()).rejects.toThrow(
      'A gravação de áudio não é suportada neste navegador ou ambiente.'
    )
  })

  it('deve limpar com segurança streams e chunks no stopAndDiscard', () => {
    const fakeTrack = { stop: vi.fn() }
    audioRecorderService.stream = {
      getTracks: () => [fakeTrack]
    }
    audioRecorderService.audioChunks = [new Uint8Array([1, 2, 3])]

    audioRecorderService.stopAndDiscard()

    expect(fakeTrack.stop).toHaveBeenCalled()
    expect(audioRecorderService.audioChunks).toEqual([])
    expect(audioRecorderService.stream).toBeNull()
  })
})
