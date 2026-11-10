<template>
  <q-dialog
    v-model="isOpen"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="hands-free-container flex flex-column justify-between q-pa-lg text-white">
      <!-- Barra Superior: Fechar / Minimizar & Configurações Rápidas -->
      <div class="row items-center justify-between q-mb-md">
        <div class="flex items-center q-gutter-x-sm">
          <q-btn
            round
            flat
            dense
            icon="close"
            color="grey-4"
            size="md"
            @click="closePlayer"
          >
            <q-tooltip class="bg-grey-9 text-caption">Fechar Modo Mãos-Livres</q-tooltip>
          </q-btn>
          <div>
            <div class="text-caption text-accent text-weight-bold uppercase font-outfit">
              Modo Mãos-Livres (Hands-Free Walk & Listen) 🎧
            </div>
            <div class="text-subtitle1 text-weight-bold font-outfit text-white">
              Dia {{ lesson.day }}: {{ lesson.title }}
            </div>
          </div>
        </div>

        <!-- Indicador de Status do Player -->
        <div class="flex items-center q-gutter-x-xs">
          <q-badge
            :color="isPlaying ? 'positive' : 'grey-8'"
            class="font-outfit text-weight-bold q-py-xs q-px-sm rounded-borders"
          >
            <q-icon :name="isPlaying ? 'graphic_eq' : 'pause'" size="14px" class="q-mr-xs" />
            <span>{{ isPlaying ? currentStatusText : 'Pausado' }}</span>
          </q-badge>
        </div>
      </div>

      <!-- Centro: Card de Alta Visibilidade (Texto Grande & Contraste) -->
      <div class="flex flex-center col q-my-md">
        <div class="hands-free-stage q-pa-xl text-center full-width relative-position">
          <!-- Categoria do item atual -->
          <div class="text-caption text-weight-bold uppercase font-outfit q-mb-sm" :class="itemBadgeColor">
            <q-icon :name="itemBadgeIcon" size="16px" class="q-mr-xs" />
            <span>{{ currentItem?.categoryLabel || 'Prática Oral' }} • {{ currentIndex + 1 }} de {{ playlist.length }}</span>
          </div>

          <!-- Texto em Inglês em Fonte Gigante -->
          <div class="text-h4 text-weight-bold font-outfit text-white q-my-md leading-normal tracking-wide animate-fade-in">
            {{ currentItem?.text }}
          </div>

          <!-- Tradução em Português -->
          <div
            v-if="includePortuguese"
            class="text-h6 text-grey-4 font-outfit italic q-my-sm animate-fade-in"
          >
            "{{ currentItem?.translation }}"
          </div>

          <!-- Barra de Contagem de Silêncio para Repetição -->
          <div v-if="playbackState === 'WAITING_REPETITION'" class="repetition-prompt q-mt-lg animate-fade-in">
            <div class="text-subtitle1 text-warning font-outfit text-weight-bold flex items-center justify-center q-mb-xs">
              <q-icon name="record_voice_over" size="20px" class="q-mr-xs animate-pulse" />
              <span>Sua vez: Repita em voz alta agora!</span>
            </div>
            <q-linear-progress
              :value="repetitionProgress"
              color="warning"
              track-color="grey-9"
              class="rounded-borders q-mx-auto"
              style="max-width: 300px; height: 8px;"
            />
          </div>
        </div>
      </div>

      <!-- Painel Inferior: Controles de Áudio Grandes e Opções Rápidas -->
      <div class="hands-free-controls q-pa-md rounded-borders border-all bg-dark-glass">
        <!-- Linha 1: Opções de Ajuste (Silêncio, Tradução, Loop) -->
        <div class="row items-center justify-between q-col-gutter-sm q-mb-md">
          <!-- Tempo de Silêncio para Repetir -->
          <div class="flex items-center q-gutter-x-xs">
            <span class="text-caption text-grey-4 font-outfit">Pausa p/ Repetir:</span>
            <q-btn-toggle
              v-model="pauseDuration"
              dense
              unelevated
              rounded
              toggle-color="accent"
              color="dark"
              text-color="grey-4"
              size="sm"
              :options="[
                { label: '2s', value: 2 },
                { label: '3s', value: 3 },
                { label: '4s', value: 4 }
              ]"
              class="border-all font-outfit"
            />
          </div>

          <!-- Toggles: Tradução & Loop -->
          <div class="flex items-center q-gutter-x-sm">
            <q-toggle
              v-model="includePortuguese"
              dense
              color="accent"
              label="Falar Tradução"
              class="text-caption text-grey-4 font-outfit"
            />
            <q-toggle
              v-model="loopPlaylist"
              dense
              color="positive"
              label="Repetir em Loop"
              class="text-caption text-grey-4 font-outfit"
            />
          </div>
        </div>

        <!-- Linha 2: Barra de Progresso Geral da Lição -->
        <div class="q-mb-md">
          <div class="flex justify-between text-caption text-grey-5 font-outfit q-mb-xs">
            <span>Progresso da Lição</span>
            <span>{{ currentIndex + 1 }} / {{ playlist.length }}</span>
          </div>
          <q-linear-progress
            :value="(currentIndex + 1) / playlist.length"
            color="accent"
            track-color="grey-9"
            class="rounded-borders"
            style="height: 6px;"
          />
        </div>

        <!-- Linha 3: Controles de Playback Grandes e Fáceis de Tocar -->
        <div class="flex items-center justify-center q-gutter-x-lg">
          <!-- Frase Anterior -->
          <q-btn
            round
            unelevated
            color="dark"
            icon="skip_previous"
            size="lg"
            class="border-all text-grey-3"
            :disable="currentIndex === 0"
            @click="prevItem"
          >
            <q-tooltip class="bg-grey-9 text-caption">Anterior</q-tooltip>
          </q-btn>

          <!-- Play / Pause Principal Gigante -->
          <q-btn
            round
            unelevated
            :color="isPlaying ? 'warning' : 'accent'"
            :icon="isPlaying ? 'pause' : 'play_arrow'"
            size="xl"
            class="pulse-glow shadow-6"
            @click="togglePlayPause"
          >
            <q-tooltip class="bg-grey-9 text-caption">
              {{ isPlaying ? 'Pausar Áudio' : 'Iniciar Áudio Contínuo' }}
            </q-tooltip>
          </q-btn>

          <!-- Próxima Frase -->
          <q-btn
            round
            unelevated
            color="dark"
            icon="skip_next"
            size="lg"
            class="border-all text-grey-3"
            :disable="currentIndex >= playlist.length - 1 && !loopPlaylist"
            @click="nextItem"
          >
            <q-tooltip class="bg-grey-9 text-caption">Próxima</q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { speechService } from '../services/speech'
import { useSettingsStore } from '../stores/settings'
import { useStudyStore } from '../stores/study'
import { useAuthStore } from '../stores/auth'
import confetti from 'canvas-confetti'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  lesson: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const settingsStore = useSettingsStore()
const studyStore = useStudyStore()
const authStore = useAuthStore()

function formatUserText(text) {
  if (!text) return ''
  const name = authStore.displayName || 'Dev'
  return text.replace(/\{userName\}|\bGabriel\b/g, name)
}

function formatSpeaker(speaker) {
  if (speaker === 'Você' || speaker === '{userName}' || speaker === 'Gabriel') {
    return authStore.displayName || 'Você'
  }
  return speaker
}

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// Configurações do modo Mãos-Livres
const pauseDuration = ref(3) // segundos de silêncio para repetição
const includePortuguese = ref(true)
const loopPlaylist = ref(true)

// Estado da Máquina de Reprodução
const isPlaying = ref(false)
const currentIndex = ref(0)
const playbackState = ref('IDLE') // 'IDLE' | 'SPEAKING_EN' | 'WAITING_REPETITION' | 'SPEAKING_PT'
const repetitionProgress = ref(0)

let repetitionInterval = null
let wakeLockSentinel = null

// Constrói a lista ordenada de reprodução da lição
const playlist = computed(() => {
  if (!props.lesson) return []

  const items = []

  // 1. Vocabulários-chave
  if (props.lesson.vocabulary && Array.isArray(props.lesson.vocabulary)) {
    props.lesson.vocabulary.forEach((v, idx) => {
      items.push({
        id: `vocab_${idx}`,
        type: 'vocabulary',
        categoryLabel: 'Vocabulário',
        text: v.word,
        translation: v.translation
      })
    })
  }

  // 2. Frases práticas
  if (props.lesson.phrases && Array.isArray(props.lesson.phrases)) {
    props.lesson.phrases.forEach((p, idx) => {
      items.push({
        id: `phrase_${idx}`,
        type: 'phrase',
        categoryLabel: 'Frase de Uso Real',
        text: formatUserText(p.english),
        translation: formatUserText(p.portuguese)
      })
    })
  }

  // 3. Diálogos
  if (props.lesson.dialogue && Array.isArray(props.lesson.dialogue)) {
    props.lesson.dialogue.forEach((d, idx) => {
      items.push({
        id: `dialogue_${idx}`,
        type: 'dialogue',
        categoryLabel: `Diálogo • ${formatSpeaker(d.speaker)}`,
        text: formatUserText(d.text),
        translation: `Fala de ${formatSpeaker(d.speaker)}`
      })
    })
  }

  return items
})

const currentItem = computed(() => {
  if (playlist.value.length === 0) return null
  return playlist.value[currentIndex.value] || playlist.value[0]
})

const itemBadgeColor = computed(() => {
  if (!currentItem.value) return 'text-grey-4'
  if (currentItem.value.type === 'vocabulary') return 'text-accent'
  if (currentItem.value.type === 'phrase') return 'text-warning'
  return 'text-info'
})

const itemBadgeIcon = computed(() => {
  if (!currentItem.value) return 'hearing'
  if (currentItem.value.type === 'vocabulary') return 'translate'
  if (currentItem.value.type === 'phrase') return 'record_voice_over'
  return 'forum'
})

const currentStatusText = computed(() => {
  if (playbackState.value === 'SPEAKING_EN') return 'Ouvindo Inglês...'
  if (playbackState.value === 'WAITING_REPETITION') return 'Sua Vez de Repetir 🗣️'
  if (playbackState.value === 'SPEAKING_PT') return 'Tradução em Português...'
  return 'Reproduzindo'
})

// Inicia / Pausa
function togglePlayPause() {
  if (isPlaying.value) {
    pausePlayback()
  } else {
    startPlayback()
  }
}

function startPlayback() {
  isPlaying.value = true
  requestWakeLock()
  runPlaybackStep()
}

function pausePlayback() {
  isPlaying.value = false
  playbackState.value = 'IDLE'
  speechService.stopSpeaking()
  clearInterval(repetitionInterval)
  releaseWakeLock()
}

// Ciclo do Passo Atual (Inglês -> Pausa de Repetição -> Português -> Avançar)
async function runPlaybackStep() {
  if (!isPlaying.value || !currentItem.value) return

  try {
    // 1. Fala em Inglês com sotaque e velocidade configurada
    playbackState.value = 'SPEAKING_EN'
    await speechService.speak(
      currentItem.value.text,
      settingsStore.accent,
      settingsStore.speed
    )

    if (!isPlaying.value) return

    // 2. Intervalo de Silêncio para o usuário repetir em voz alta
    playbackState.value = 'WAITING_REPETITION'
    repetitionProgress.value = 0

    const totalMs = pauseDuration.value * 1000
    const stepMs = 50
    let elapsed = 0

    await new Promise((resolve) => {
      clearInterval(repetitionInterval)
      repetitionInterval = setInterval(() => {
        if (!isPlaying.value) {
          clearInterval(repetitionInterval)
          resolve()
          return
        }

        elapsed += stepMs
        repetitionProgress.value = Math.min(1, elapsed / totalMs)

        if (elapsed >= totalMs) {
          clearInterval(repetitionInterval)
          resolve()
        }
      }, stepMs)
    })

    if (!isPlaying.value) return

    // 3. Fala Tradução em Português (se habilitado)
    if (includePortuguese.value && currentItem.value.translation) {
      playbackState.value = 'SPEAKING_PT'
      await speechService.speakPortuguese(currentItem.value.translation, 1.0)
    }

    if (!isPlaying.value) return

    // Pequena pausa natural de 400ms antes do próximo card
    await new Promise(r => setTimeout(r, 400))

    if (!isPlaying.value) return

    // 4. Avança para o próximo item
    advanceToNext()
  } catch (err) {
    if (err?.error === 'interrupted' || err?.error === 'canceled') {
      return
    }
    console.warn('Ciclo hands-free pausado:', err)
    pausePlayback()
  }
}

function advanceToNext() {
  if (currentIndex.value + 1 < playlist.value.length) {
    currentIndex.value++
    runPlaybackStep()
  } else {
    // Fim da lição
    if (loopPlaylist.value) {
      currentIndex.value = 0
      runPlaybackStep()
    } else {
      pausePlayback()
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.7 }
      })
    }
  }
}

function prevItem() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    if (isPlaying.value) {
      speechService.stopSpeaking()
      clearInterval(repetitionInterval)
      runPlaybackStep()
    }
  }
}

function nextItem() {
  if (currentIndex.value + 1 < playlist.value.length) {
    currentIndex.value++
    if (isPlaying.value) {
      speechService.stopSpeaking()
      clearInterval(repetitionInterval)
      runPlaybackStep()
    }
  } else if (loopPlaylist.value) {
    currentIndex.value = 0
    if (isPlaying.value) {
      speechService.stopSpeaking()
      clearInterval(repetitionInterval)
      runPlaybackStep()
    }
  }
}

function closePlayer() {
  pausePlayback()
  isOpen.value = false
}

// Mantém a tela do celular acordada durante o modo mãos-livres (se suportado)
async function requestWakeLock() {
  if ('wakeLock' in navigator && !wakeLockSentinel) {
    try {
      wakeLockSentinel = await navigator.wakeLock.request('screen')
    } catch {
      // Ignora erro se wakeLock não for permitido pelo dispositivo
    }
  }
}

function releaseWakeLock() {
  if (wakeLockSentinel) {
    try {
      wakeLockSentinel.release()
    } catch {
      // Ignora
    }
    wakeLockSentinel = null
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    currentIndex.value = 0
    startPlayback()
  } else {
    pausePlayback()
  }
})

onBeforeUnmount(() => {
  pausePlayback()
})
</script>

<style lang="scss" scoped>
.hands-free-container {
  background: radial-gradient(circle at center, #1b1333 0%, #0c0817 100%);
  height: 100vh;
  width: 100vw;
}

.hands-free-stage {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  max-width: 800px;
}

.border-all {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.bg-dark-glass {
  background: rgba(18, 14, 30, 0.85);
  backdrop-filter: blur(12px);
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.leading-normal {
  line-height: 1.4;
}

.tracking-wide {
  letter-spacing: 0.02em;
}

.animate-pulse {
  animation: pulse-icon 1.2s infinite;
}

@keyframes pulse-icon {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>
