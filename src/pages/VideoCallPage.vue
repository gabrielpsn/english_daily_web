<template>
  <div class="whatsapp-call-wrapper">
    <!-- ========================================================= -->
    <!-- ESTADO 0: SELEÇÃO DE CONTATO & CONFIGURAÇÃO DA CHAMADA     -->
    <!-- ========================================================= -->
    <div v-if="callState === 'IDLE'" class="q-pa-md max-width-container animate-slide-up">
      <!-- Cabeçalho -->
      <div class="row items-center justify-between q-col-gutter-sm q-mb-lg">
        <div class="flex items-center q-gutter-x-sm">
          <q-btn
            flat
            round
            dense
            icon="arrow_back"
            color="grey-4"
            :to="{ name: 'dashboard' }"
          />
          <div>
            <div class="text-caption text-positive text-weight-bold uppercase font-outfit flex items-center">
              <q-icon name="call" size="16px" class="q-mr-xs" />
              <span>WhatsApp AI Call Simulator</span>
            </div>
            <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-white">
              Chamada de Vídeo com IA 📱
            </h1>
          </div>
        </div>
      </div>

      <!-- Card Explicativo de Imersão -->
      <div class="glass-card q-pa-lg border-all q-mb-xl bg-gradient-wa">
        <div class="row items-center q-col-gutter-md">
          <div class="col-12 col-md-8">
            <h2 class="text-h5 text-weight-bold font-outfit text-white q-my-none flex items-center">
              <q-icon name="videocam" color="positive" size="28px" class="q-mr-sm" />
              <span>Treine Conversas em Tempo Real sem Julgamento</span>
            </h2>
            <p class="text-body2 text-grey-3 q-mt-sm q-mb-none">
              Simule uma ligação de vídeo realista no WhatsApp com falantes nativos. O app liga sua câmera frontal, toca ringtone de chamada, transcreve sua voz e responde instantaneamente com inteligência artificial.
            </p>
          </div>
          <div class="col-12 col-md-4 flex justify-end">
            <q-badge color="positive" text-color="dark" class="font-outfit text-weight-bold q-py-xs q-px-md rounded-borders">
              Câmera + Microfone Reais
            </q-badge>
          </div>
        </div>
      </div>

      <!-- Seleção de Contatos Gringos -->
      <div class="text-subtitle1 text-weight-bold font-outfit text-white q-mb-md">
        Escolha com quem você deseja simular a chamada:
      </div>

      <div class="row q-col-gutter-lg q-mb-xl">
        <div
          v-for="persona in CALL_PERSONAS"
          :key="persona.id"
          class="col-12 col-md-4"
        >
          <div
            class="glass-card q-pa-lg h-100 flex flex-column justify-between border-all persona-card cursor-pointer"
            :class="{ 'persona-selected': selectedPersona.id === persona.id }"
            @click="selectedPersona = persona"
          >
            <div>
              <div class="flex items-center justify-between q-mb-md">
                <q-avatar size="68px" class="shadow-4">
                  <img :src="persona.avatar" :alt="persona.name" />
                </q-avatar>
                <q-badge
                  :color="persona.color"
                  text-color="white"
                  class="font-outfit text-caption text-weight-bold"
                >
                  Sotaque {{ persona.accent }}
                </q-badge>
              </div>

              <div class="text-h6 text-weight-bold font-outfit text-white">
                {{ persona.name }}
              </div>
              <div class="text-caption text-positive font-outfit text-weight-bold q-mb-xs">
                {{ persona.role }}
              </div>
              <div class="text-caption text-grey-4 q-mb-sm">
                {{ persona.company }}
              </div>

              <div class="glass-card-flat q-pa-sm rounded-borders text-caption text-grey-3 italic border-all">
                "{{ persona.context }}"
              </div>
            </div>

            <!-- Botões de Início de Chamada -->
            <div class="q-mt-lg row q-col-gutter-xs">
              <div class="col-12 col-sm-6">
                <q-btn
                  unelevated
                  color="positive"
                  text-color="dark"
                  icon="call"
                  label="Receber Ligação"
                  class="font-outfit text-weight-bold rounded-borders full-width"
                  @click.stop="triggerIncomingCall(persona)"
                >
                  <q-tooltip class="bg-grey-9 text-caption">O celular vai tocar como chamada recebida</q-tooltip>
                </q-btn>
              </div>
              <div class="col-12 col-sm-6">
                <q-btn
                  outline
                  color="white"
                  icon="videocam"
                  label="Discar"
                  class="font-outfit text-weight-bold rounded-borders full-width"
                  @click.stop="startOutgoingCall(persona)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ========================================================= -->
    <!-- ESTADO 1: TELA DE CHAMADA RECEBIDA (RINGING WHATSAPP)     -->
    <!-- ========================================================= -->
    <div v-else-if="callState === 'RINGING'" class="whatsapp-fullscreen-ringing flex flex-column justify-between q-pa-xl text-center">
      <div class="q-mt-xl">
        <div class="text-caption text-grey-4 font-outfit uppercase tracking-widest q-mb-xs flex items-center justify-center">
          <q-icon name="lock" size="14px" class="q-mr-xs text-positive" />
          <span>WhatsApp Video Call • End-to-end encrypted</span>
        </div>
        <div class="text-h3 text-weight-bold font-outfit text-white q-my-sm">
          {{ selectedPersona.name }}
        </div>
        <div class="text-subtitle1 text-positive font-outfit text-weight-medium">
          Chamada de vídeo recebida...
        </div>
      </div>

      <!-- Avatar com Ondas Pulsantes -->
      <div class="flex flex-center q-my-xl">
        <div class="avatar-ripple-container">
          <div class="ripple ripple-1"></div>
          <div class="ripple ripple-2"></div>
          <div class="ripple ripple-3"></div>
          <q-avatar size="140px" class="shadow-10 relative-position">
            <img :src="selectedPersona.avatar" :alt="selectedPersona.name" />
          </q-avatar>
        </div>
      </div>

      <!-- Botões de Atender / Recusar -->
      <div class="q-mb-xl flex items-center justify-center q-gutter-x-xl">
        <!-- Recusar -->
        <div class="text-center">
          <q-btn
            round
            unelevated
            size="xl"
            color="negative"
            icon="call_end"
            class="shadow-6 q-mb-xs"
            @click="declineCall"
          />
          <div class="text-caption text-grey-4 font-outfit">Recusar</div>
        </div>

        <!-- Atender -->
        <div class="text-center">
          <q-btn
            round
            unelevated
            size="xl"
            color="positive"
            text-color="dark"
            icon="videocam"
            class="shadow-6 pulse-glow q-mb-xs"
            @click="answerCall"
          />
          <div class="text-caption text-white text-weight-bold font-outfit">Atender</div>
        </div>
      </div>
    </div>

    <!-- ========================================================= -->
    <!-- ESTADO 2: CHAMADA DE VÍDEO ATIVA (WHATSAPP VIDEO CALL)   -->
    <!-- ========================================================= -->
    <div v-else-if="callState === 'CONNECTED'" class="whatsapp-call-active flex flex-column justify-between relative-position">
      <!-- Barra Superior da Chamada (Estilo WhatsApp) -->
      <div class="call-top-bar q-pa-md flex items-center justify-between z-top">
        <div class="flex items-center q-gutter-x-sm">
          <q-avatar size="36px">
            <img :src="selectedPersona.avatar" :alt="selectedPersona.name" />
          </q-avatar>
          <div>
            <div class="text-subtitle2 text-weight-bold font-outfit text-white line-height-tight">
              {{ selectedPersona.name }}
            </div>
            <div class="text-caption text-positive font-mono text-weight-bold">
              {{ formatSeconds(callSeconds) }}
            </div>
          </div>
        </div>

        <!-- Botões de Controle Superior (Legendas & Dicas) -->
        <div class="flex items-center q-gutter-x-xs">
          <!-- Toggle Legendas / Closed Captions -->
          <q-btn
            round
            flat
            dense
            size="sm"
            :color="showSubtitles ? 'positive' : 'grey-5'"
            :icon="showSubtitles ? 'subtitles' : 'subtitles_off'"
            @click="showSubtitles = !showSubtitles"
          >
            <q-tooltip class="bg-grey-9 text-caption">
              {{ showSubtitles ? 'Ocultar legendas' : 'Mostrar legendas em inglês' }}
            </q-tooltip>
          </q-btn>

          <!-- Botão Dicas de Resposta (Se Travar) -->
          <q-btn
            round
            flat
            dense
            size="sm"
            color="amber-9"
            icon="lightbulb"
            @click="showHintsModal = true"
          >
            <q-tooltip class="bg-grey-9 text-caption">Ideias do que falar (Dicas)</q-tooltip>
          </q-btn>
        </div>
      </div>

      <!-- Centro: Vídeo / Avatar da Pessoa Remota -->
      <div class="remote-video-container flex flex-center col relative-position">
        <div class="text-center relative-position">
          <div class="avatar-remote-halo" :class="{ 'speaking-active': isAiSpeaking }">
            <q-avatar size="160px" class="shadow-10">
              <img :src="selectedPersona.avatar" :alt="selectedPersona.name" />
            </q-avatar>
          </div>

          <!-- Indicador de Status da IA (Falando / Ouvindo) -->
          <div class="q-mt-md">
            <q-badge
              v-if="isAiSpeaking"
              color="positive"
              text-color="dark"
              class="font-outfit text-weight-bold q-py-xs q-px-md rounded-borders animate-pulse"
            >
              <q-icon name="volume_up" size="14px" class="q-mr-xs" />
              <span>{{ selectedPersona.name }} está falando...</span>
            </q-badge>
            <q-badge
              v-else-if="isUserListening"
              color="amber-9"
              text-color="dark"
              class="font-outfit text-weight-bold q-py-xs q-px-md rounded-borders animate-pulse"
            >
              <q-icon name="mic" size="14px" class="q-mr-xs" />
              <span>Ouvindo sua voz... Fale agora!</span>
            </q-badge>
            <q-badge
              v-else
              color="grey-9"
              text-color="grey-4"
              class="font-outfit q-py-xs q-px-sm rounded-borders"
            >
              <span>Conectado</span>
            </q-badge>
          </div>
        </div>

        <!-- Janela PiP da Câmera do Usuário (Canto Superior Direito) -->
        <div class="local-camera-pip shadow-8">
          <video
            ref="localVideoRef"
            autoplay
            playsinline
            muted
            class="local-video-element"
            :class="{ 'video-disabled': !isCameraOn }"
          ></video>
          <div v-if="!isCameraOn" class="camera-off-placeholder flex flex-center">
            <q-avatar size="38px" color="deep-purple-9" text-color="white" class="shadow-4 text-weight-bold font-outfit">
              {{ authStore.userAvatar || '💻' }}
            </q-avatar>
          </div>
          <div class="pip-label">{{ authStore.displayName || 'Você' }}</div>
        </div>
      </div>

      <!-- Legendas em Tempo Real (Subtitles Overlay) -->
      <div v-if="showSubtitles && latestSubtitle" class="subtitles-overlay q-pa-md text-center z-top animate-fade-in">
        <div class="subtitles-bubble q-pa-sm rounded-borders text-body2 font-outfit text-white">
          <strong :class="latestSubtitle.isAi ? 'text-positive' : 'text-warning'">
            {{ latestSubtitle.speaker }}:
          </strong>
          <span> {{ latestSubtitle.text }}</span>
        </div>
      </div>

      <!-- Painel Inferior de Controles da Chamada (Estilo WhatsApp) -->
      <div class="call-bottom-controls q-pa-lg flex items-center justify-center q-gutter-x-lg z-top">
        <!-- Alternar Câmera (Liga/Desliga) -->
        <q-btn
          round
          unelevated
          size="lg"
          :color="isCameraOn ? 'dark' : 'grey-8'"
          :icon="isCameraOn ? 'videocam' : 'videocam_off'"
          class="border-all text-white shadow-4"
          @click="toggleCamera"
        >
          <q-tooltip class="bg-grey-9 text-caption">
            {{ isCameraOn ? 'Desativar Câmera' : 'Ativar Câmera' }}
          </q-tooltip>
        </q-btn>

        <!-- Botão Principal de Desligar (Vermelho WhatsApp) -->
        <q-btn
          round
          unelevated
          size="xl"
          color="negative"
          icon="call_end"
          class="shadow-8 pulse-glow"
          @click="hangupCall"
        >
          <q-tooltip class="bg-grey-9 text-caption">Encerrar Chamada</q-tooltip>
        </q-btn>

        <!-- Microfone (Mute / Gravação) -->
        <q-btn
          round
          unelevated
          size="lg"
          :color="isUserListening ? 'positive' : 'grey-8'"
          :text-color="isUserListening ? 'dark' : 'white'"
          :icon="isUserListening ? 'mic' : 'mic_off'"
          class="border-all shadow-4"
          @click="toggleUserMic"
        >
          <q-tooltip class="bg-grey-9 text-caption">
            {{ isUserListening ? 'Microfone Ativo (Ouvindo)' : 'Ativar Microfone' }}
          </q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- ========================================================= -->
    <!-- ESTADO 3: CHAMADA ENCERRADA (RELATÓRIO & FEEDBACK DE VOZ) -->
    <!-- ========================================================= -->
    <div v-else-if="callState === 'ENDED'" class="q-pa-md max-width-container animate-slide-up">
      <div class="glass-card q-pa-xl text-center border-all">
        <div class="q-mb-md flex justify-center">
          <q-avatar size="80px" color="positive" text-color="dark" class="shadow-6 pulse-glow">
            <q-icon name="check_circle" size="48px" />
          </q-avatar>
        </div>

        <div class="text-caption text-positive text-weight-bold uppercase font-outfit">
          Chamada WhatsApp Concluída com Sucesso!
        </div>
        <h2 class="text-h4 text-weight-bold font-outfit q-my-xs text-white">
          Ótima Conversa com {{ selectedPersona.name }}! 👏
        </h2>
        <p class="text-body1 text-grey-3 max-w-600 q-mx-auto q-mb-lg">
          Você praticou conversação realista em inglês por <strong>{{ formatSeconds(callSeconds) }}</strong> no cenário: <em>"{{ selectedPersona.context }}"</em>.
        </p>

        <!-- Transcrição Completa da Conversa -->
        <div class="glass-card-flat q-pa-md text-left rounded-borders border-all max-w-800 q-mx-auto q-mb-xl">
          <div class="text-subtitle2 text-weight-bold font-outfit text-white q-mb-sm flex items-center">
            <q-icon name="chat" size="18px" class="q-mr-xs text-positive" />
            <span>Transcrição da Chamada</span>
          </div>

          <div class="q-gutter-y-sm">
            <div
              v-for="(msg, msgIdx) in transcriptList"
              :key="msgIdx"
              class="q-pa-sm rounded-borders flex items-start q-gutter-x-sm"
              :style="{ background: msg.role === 'user' ? 'rgba(38, 166, 154, 0.1)' : 'rgba(255, 255, 255, 0.03)' }"
            >
              <q-avatar size="24px" :color="msg.role === 'user' ? 'teal-8' : selectedPersona.color" text-color="white" class="text-caption text-weight-bold">
                {{ msg.speaker.charAt(0) }}
              </q-avatar>
              <div class="col">
                <div class="text-caption text-weight-bold" :class="msg.role === 'user' ? 'text-positive' : 'text-accent'">
                  {{ msg.speaker }}
                </div>
                <div class="text-body2 text-white">
                  {{ msg.text }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Ações pós-chamada -->
        <div class="row q-col-gutter-sm justify-center items-center">
          <div class="col-12 col-sm-auto">
            <q-btn
              outline
              color="white"
              icon="replay"
              label="Ligar Novamente"
              class="font-outfit text-weight-bold rounded-borders q-py-sm full-width"
              @click="triggerIncomingCall(selectedPersona)"
            />
          </div>
          <div class="col-12 col-sm-auto">
            <q-btn
              unelevated
              color="positive"
              text-color="dark"
              icon="dashboard"
              label="Voltar ao Dashboard"
              class="font-outfit text-weight-bold rounded-borders q-py-sm pulse-glow full-width"
              :to="{ name: 'dashboard' }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Dicas / Sugestões de Resposta (Se Travar) -->
    <q-dialog v-model="showHintsModal">
      <q-card class="bg-dark text-white q-pa-md border-all" style="max-width: 500px; width: 100%;">
        <q-card-section class="row items-center justify-between q-pb-none">
          <div class="text-h6 text-weight-bold font-outfit text-warning flex items-center">
            <q-icon name="lightbulb" size="22px" class="q-mr-xs" />
            Sugestões do que Falar
          </div>
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <p class="text-caption text-grey-4 q-mb-md">
            Clique em qualquer frase para falar ou se inspirar durante a conversa:
          </p>
          <div class="q-gutter-y-sm">
            <div
              v-for="(hint, hIdx) in currentHints"
              :key="hIdx"
              class="glass-card-flat q-pa-sm rounded-borders border-all cursor-pointer hover-glow"
              @click="useHint(hint)"
            >
              <div class="text-body2 text-white font-outfit font-weight-medium">
                "{{ hint }}"
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { CALL_PERSONAS, aiCallService } from '../services/aiCallService'
import { callSoundEffects } from '../services/callRingtone'
import { speechService } from '../services/speech'
import { useSettingsStore } from '../stores/settings'
import { useAuthStore } from '../stores/auth'
import { useStudyStore } from '../stores/study'
import { Notify } from 'quasar'
import confetti from 'canvas-confetti'

const settingsStore = useSettingsStore()
const authStore = useAuthStore()
const studyStore = useStudyStore()

// Estados: 'IDLE' | 'RINGING' | 'CONNECTED' | 'ENDED'
const callState = ref('IDLE')
const selectedPersona = ref(CALL_PERSONAS[0])

// Mídia da Câmera Local
const localVideoRef = ref(null)
let localMediaStream = null
const isCameraOn = ref(true)

// Temporizador da Chamada
const callSeconds = ref(0)
let callTimer = null

// Status do Diálogo
const isAiSpeaking = ref(false)
const isUserListening = ref(false)
const showSubtitles = ref(true)
const latestSubtitle = ref(null)
const transcriptList = ref([])

// Dicas de resposta
const showHintsModal = ref(false)
const currentHints = ref([])

// Receber chamada com ringtone
function triggerIncomingCall(persona) {
  selectedPersona.value = persona
  callState.value = 'RINGING'
  callSoundEffects.startIncomingRingtone()
}

// Discar diretamente para o contato
function startOutgoingCall(persona) {
  selectedPersona.value = persona
  answerCall()
}

// Recusar chamada
function declineCall() {
  callSoundEffects.stop()
  callState.value = 'IDLE'
}

// Atender chamada
async function answerCall() {
  callSoundEffects.playConnectSound()
  callState.value = 'CONNECTED'
  callSeconds.value = 0
  transcriptList.value = []

  // Inicializa temporizador da chamada
  if (callTimer) clearInterval(callTimer)
  callTimer = setInterval(() => {
    callSeconds.value++
  }, 1000)

  // Inicia captura de câmera e microfone
  await startLocalCamera()

  // Inicializa a persona no serviço de IA
  aiCallService.initCall(selectedPersona.value, authStore.displayName)
  currentHints.value = selectedPersona.value.suggestions || []

  // IA fala a primeira saudação
  speakAiLine(selectedPersona.value.initialGreeting)
}

// Inicia câmera frontal do usuário
async function startLocalCamera() {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) return

  try {
    localMediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
        width: { ideal: 640 },
        height: { ideal: 480 }
      },
      audio: false // O áudio é tratado pelo STT para evitar eco
    })

    if (localVideoRef.value) {
      localVideoRef.value.srcObject = localMediaStream
    }
  } catch (err) {
    // Se o dispositivo não possui câmera física ou permissão negada, transiciona suavemente para o avatar
    isCameraOn.value = false
    localMediaStream = null
  }
}

// Alterna vídeo da câmera do usuário
function toggleCamera() {
  isCameraOn.value = !isCameraOn.value
  if (localMediaStream) {
    localMediaStream.getVideoTracks().forEach(track => {
      track.enabled = isCameraOn.value
    })
  }
}

// IA pronuncia sua fala e depois ativa o microfone do usuário
async function speakAiLine(text) {
  isAiSpeaking.value = true
  latestSubtitle.value = {
    speaker: selectedPersona.value.name,
    text,
    isAi: true
  }

  try {
    await speechService.speak(
      text,
      selectedPersona.value.accent,
      settingsStore.speed
    )
  } catch (err) {
    console.warn('Erro ao falar áudio da IA:', err)
  } finally {
    isAiSpeaking.value = false

    // Quando a IA termina de falar, abre automaticamente a escuta do usuário
    startListeningToUser()
  }
}

// Inicia escuta do microfone do usuário (STT)
function startListeningToUser() {
  if (callState.value !== 'CONNECTED' || isAiSpeaking.value) return

  isUserListening.value = true

  speechService.startListening(
    selectedPersona.value.accent,
    async (recognizedText) => {
      if (!recognizedText || !recognizedText.trim()) return

      isUserListening.value = false
      latestSubtitle.value = {
        speaker: 'Você',
        text: recognizedText,
        isAi: false
      }

      // Envia fala do usuário para a IA e aguarda resposta
      try {
        const response = await aiCallService.getResponse(
          selectedPersona.value,
          recognizedText,
          settingsStore.geminiApiKey || '',
          authStore.displayName
        )

        currentHints.value = response.hints || []
        speakAiLine(response.reply)
      } catch (err) {
        console.error('Erro na resposta da IA:', err)
      }
    },
    (err) => {
      if (err?.error !== 'no-speech' && err?.error !== 'aborted') {
        console.warn('Aviso no reconhecimento de voz:', err)
      }
      isUserListening.value = false
    },
    () => {
      isUserListening.value = false
    }
  )
}

function toggleUserMic() {
  if (isUserListening.value) {
    speechService.stopListening()
    isUserListening.value = false
  } else {
    startListeningToUser()
  }
}

// Usa uma dica do modal para responder
function useHint(hintText) {
  showHintsModal.value = false
  latestSubtitle.value = {
    speaker: 'Você',
    text: hintText,
    isAi: false
  }

  aiCallService.getResponse(
    selectedPersona.value,
    hintText,
    settingsStore.geminiApiKey || '',
    authStore.displayName
  ).then(response => {
    currentHints.value = response.hints || []
    speakAiLine(response.reply)
  })
}

// Encerrar chamada
function hangupCall() {
  callSoundEffects.playHangupSound()
  speechService.stopSpeaking()
  speechService.stopListening()

  if (callTimer) {
    clearInterval(callTimer)
    callTimer = null
  }

  // Desliga tracks de vídeo
  if (localMediaStream) {
    localMediaStream.getTracks().forEach(t => t.stop())
    localMediaStream = null
  }

  transcriptList.value = [...aiCallService.conversationHistory]
  callState.value = 'ENDED'

  // Salva métricas de estudo (+5 minutos de conversação)
  studyStore.totalMinutes += 5
  studyStore.registerStudyDate()
  studyStore.saveStudyData()

  confetti({
    particleCount: 100,
    spread: 60,
    origin: { y: 0.6 }
  })
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

onBeforeUnmount(() => {
  callSoundEffects.stop()
  speechService.stopSpeaking()
  speechService.stopListening()
  if (callTimer) clearInterval(callTimer)
  if (localMediaStream) {
    localMediaStream.getTracks().forEach(t => t.stop())
  }
})
</script>

<style lang="scss" scoped>
.whatsapp-call-wrapper {
  min-height: calc(100vh - 120px);
}

.border-all {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.bg-gradient-wa {
  background: linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 27, 34, 0.9) 100%);
  border-radius: 16px;
}

.persona-card {
  transition: all 0.3s ease;
  &:hover {
    border-color: #25d366;
    transform: translateY(-3px);
  }
}

.persona-selected {
  border-color: #25d366;
  background: rgba(37, 211, 102, 0.05);
}

/* Tela de Ringing WhatsApp */
.whatsapp-fullscreen-ringing {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, #11281e 0%, #0b141a 100%);
  z-index: 9999;
}

.avatar-ripple-container {
  position: relative;
  width: 140px;
  height: 140px;
}

.ripple {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.6);
  animation: pulse-ring 2s infinite ease-out;

  &.ripple-2 { animation-delay: 0.6s; }
  &.ripple-3 { animation-delay: 1.2s; }
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2.2); opacity: 0; }
}

/* Tela Ativa de Chamada de Vídeo */
.whatsapp-call-active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0b141a;
  z-index: 9999;
}

.call-top-bar {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
}

.remote-video-container {
  height: 100%;
  width: 100%;
}

.avatar-remote-halo {
  border-radius: 50%;
  padding: 8px;
  display: inline-block;
  transition: all 0.3s ease;

  &.speaking-active {
    box-shadow: 0 0 35px #25d366;
    background: radial-gradient(circle, rgba(37, 211, 102, 0.3) 0%, transparent 70%);
    animation: speaking-pulse 1.2s infinite;
  }
}

@keyframes speaking-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Janela PiP da Câmera do Usuário */
.local-camera-pip {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: #1f2c34;
  z-index: 10;

  @media (max-width: 600px) {
    width: 90px;
    height: 120px;
  }
}

.local-video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1); // Espelha a câmera frontal como no WhatsApp real
}

.video-disabled {
  display: none;
}

.camera-off-placeholder {
  width: 100%;
  height: 100%;
  background: #111b21;
}

.pip-label {
  position: absolute;
  bottom: 4px;
  left: 6px;
  font-size: 10px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
}

/* Legendas em Tempo Real */
.subtitles-overlay {
  position: absolute;
  bottom: 110px;
  left: 0;
  width: 100%;
}

.subtitles-bubble {
  background: rgba(11, 20, 26, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: inline-block;
  max-width: 90%;
}

/* Controles Inferiores */
.call-bottom-controls {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
}

.max-w-600 {
  max-width: 600px;
}

.max-w-800 {
  max-width: 800px;
}

.line-height-tight {
  line-height: 1.2;
}

.hover-glow:hover {
  border-color: #25d366;
  background: rgba(37, 211, 102, 0.1);
}
</style>
