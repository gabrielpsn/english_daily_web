<template>
  <div class="glass-card-flat q-pa-lg shadowing-studio">
    <!-- Cabeçalho do Estúdio -->
    <div class="row items-center justify-between q-col-gutter-sm q-mb-md">
      <div>
        <div class="flex items-center text-accent text-weight-bold font-outfit uppercase q-mb-xs">
          <q-icon name="record_voice_over" size="20px" class="q-mr-xs" />
          <span>Laboratório de Shadowing & Prosódia</span>
        </div>
        <h2 class="text-h6 text-weight-bold font-outfit q-my-none text-white">
          Treino Auditivo Lado a Lado
        </h2>
        <p class="text-caption text-grey-4 q-my-none">
          Ouça o modelo nativo, grave sua voz e compare lado a lado para ajustar ritmo, entonação e pausas.
        </p>
      </div>

      <!-- Badge de Práticas Realizadas -->
      <q-badge
        color="purple-9"
        text-color="white"
        class="font-outfit text-weight-bold q-py-xs q-px-sm rounded-borders shadow-1"
      >
        <q-icon name="headphones" size="14px" class="q-mr-xs text-purple-2" />
        <span>{{ dayShadowingCount }} gravações nesta aula</span>
      </q-badge>
    </div>

    <!-- Seletor de Origem: Frases-Chave vs Diálogo Real -->
    <div class="row items-center justify-between q-col-gutter-sm q-mb-md">
      <q-btn-toggle
        v-model="sourceType"
        no-caps
        rounded
        dense
        unelevated
        toggle-color="accent"
        color="dark"
        text-color="grey-4"
        :options="[
          { label: `Frases da Lição (${lessonPhrases.length})`, value: 'phrases' },
          { label: `Diálogo Real (${lessonDialogues.length})`, value: 'dialogue' }
        ]"
        class="font-outfit text-weight-bold border-all"
        @update:model-value="onSourceChange"
      />

      <!-- Navegação Anterior / Próximo -->
      <div class="flex items-center q-gutter-x-xs">
        <q-btn
          round
          flat
          dense
          icon="chevron_left"
          color="grey-4"
          :disable="currentIndex === 0"
          @click="prevItem"
        >
          <q-tooltip class="bg-grey-9 text-caption">Frase anterior</q-tooltip>
        </q-btn>
        <span class="text-caption font-outfit text-weight-bold text-grey-4 q-px-xs">
          {{ currentIndex + 1 }} / {{ currentList.length }}
        </span>
        <q-btn
          round
          flat
          dense
          icon="chevron_right"
          color="grey-4"
          :disable="currentIndex >= currentList.length - 1"
          @click="nextItem"
        >
          <q-tooltip class="bg-grey-9 text-caption">Próxima frase</q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- Card Central da Sentença em Prática -->
    <div v-if="currentItem" class="sentence-stage q-pa-lg rounded-borders text-center relative-position q-mb-lg border-all">
      <div v-if="currentItem.speaker" class="speaker-tag q-mb-xs font-outfit text-caption text-weight-bold text-accent uppercase">
        <q-icon name="person" size="14px" class="q-mr-xs" />
        Falta de: {{ currentItem.speaker }}
      </div>

      <!-- Texto em Inglês em Alta Visibilidade -->
      <div class="text-h5 text-weight-bold font-outfit text-white q-my-sm leading-relaxed">
        {{ currentItem.text }}
      </div>

      <!-- Tradução / Contexto -->
      <div class="text-body2 text-grey-4 italic q-mt-xs">
        "{{ currentItem.translation }}"
      </div>

      <!-- Barra de Velocidade e Sotaque para o Treino -->
      <div class="q-mt-md flex justify-center items-center q-gutter-x-sm">
        <span class="text-caption text-grey-5 font-outfit">Velocidade Modelo:</span>
        <q-btn-toggle
          v-model="playbackRate"
          dense
          unelevated
          rounded
          toggle-color="deep-purple-7"
          color="dark"
          text-color="grey-4"
          size="sm"
          :options="[
            { label: '0.75x (Lento / Detalhes)', value: 0.75 },
            { label: '0.90x (Médio)', value: 0.9 },
            { label: '1.0x (Nativo Real)', value: 1.0 }
          ]"
          class="border-all font-outfit"
        />
      </div>
    </div>

    <!-- Deck de Gravação & Players Lado a Lado -->
    <div class="row q-col-gutter-md q-mb-lg">
      <!-- Player A: Modelo de Voz Nativa -->
      <div class="col-12 col-md-6">
        <div class="player-panel q-pa-md rounded-borders h-100 flex flex-column justify-between border-all" :class="{ 'panel-active': isPlayingNative }">
          <div>
            <div class="row items-center justify-between q-mb-sm">
              <span class="text-caption text-weight-bold font-outfit text-accent uppercase flex items-center">
                <q-icon name="volume_up" size="16px" class="q-mr-xs" />
                1. Áudio Modelo (Nativo)
              </span>
              <q-badge color="dark" text-color="grey-4" class="font-outfit text-xs border-all">
                {{ accent }} • {{ playbackRate }}x
              </q-badge>
            </div>
            <p class="text-caption text-grey-4 q-mb-md">
              Ouça com atenção a conexão entre palavras (connected speech) e onde a voz sobe ou desce.
            </p>
          </div>

          <div class="flex items-center justify-between q-mt-sm">
            <q-btn
              unelevated
              :color="isPlayingNative ? 'deep-purple-9' : 'accent'"
              :icon="isPlayingNative ? 'graphic_eq' : 'play_arrow'"
              :label="isPlayingNative ? 'Reproduzindo...' : 'Ouvir Modelo'"
              class="font-outfit text-weight-bold rounded-borders full-width"
              :loading="isPlayingNative"
              @click="playNativeSpeech"
            />
          </div>
        </div>
      </div>

      <!-- Player B: Gravação do Usuário -->
      <div class="col-12 col-md-6">
        <div class="player-panel q-pa-md rounded-borders h-100 flex flex-column justify-between border-all" :class="{ 'panel-recording': isRecording, 'panel-active': isPlayingUser }">
          <div>
            <div class="row items-center justify-between q-mb-sm">
              <span class="text-caption text-weight-bold font-outfit text-warning uppercase flex items-center">
                <q-icon name="mic" size="16px" class="q-mr-xs" />
                2. Sua Gravação
              </span>
              <q-badge v-if="userAudioUrl" color="positive" text-color="white" class="font-outfit text-xs">
                Pronto para comparar
              </q-badge>
              <q-badge v-else color="grey-9" text-color="grey-5" class="font-outfit text-xs">
                Aguardando gravação
              </q-badge>
            </div>

            <!-- Visualizador durante a Gravação -->
            <div v-if="isRecording" class="recording-indicator q-my-sm q-pa-sm rounded-borders flex items-center justify-between bg-dark">
              <div class="flex items-center q-gutter-x-xs">
                <div class="sound-wave-bar bar-1"></div>
                <div class="sound-wave-bar bar-2"></div>
                <div class="sound-wave-bar bar-3"></div>
                <div class="sound-wave-bar bar-4"></div>
                <span class="text-caption text-red-4 font-outfit text-weight-bold uppercase q-ml-xs animate-pulse">
                  Gravando sua voz...
                </span>
              </div>
              <span class="text-caption font-mono text-weight-bold text-white">
                {{ formatSeconds(recordingSeconds) }}
              </span>
            </div>

            <p v-else-if="!userAudioUrl" class="text-caption text-grey-4 q-mb-md">
              Fale ao microfone no mesmo ritmo do modelo. Você poderá escutar seu áudio logo em seguida.
            </p>
            <p v-else class="text-caption text-grey-4 q-mb-md">
              Áudio gravado com sucesso! Ouça separadamente ou utilize a comparação sequencial abaixo.
            </p>
          </div>

          <!-- Ações de Gravação / Reprodução -->
          <div class="q-mt-sm">
            <!-- Botão quando ainda NÃO gravou ou está gravando -->
            <div v-if="!userAudioUrl || isRecording" class="full-width">
              <q-btn
                v-if="!isRecording"
                unelevated
                color="negative"
                icon="mic"
                label="Gravar Minha Voz"
                class="font-outfit text-weight-bold rounded-borders full-width pulse-glow"
                @click="startRecording"
              />
              <q-btn
                v-else
                unelevated
                color="negative"
                icon="stop"
                label="Parar e Concluir Gravação"
                class="font-outfit text-weight-bold rounded-borders full-width"
                @click="stopRecording"
              />
            </div>

            <!-- Botões quando JÁ gravou o áudio -->
            <div v-else class="row q-col-gutter-xs full-width">
              <div class="col-8">
                <q-btn
                  unelevated
                  :color="isPlayingUser ? 'warning' : 'amber-9'"
                  :icon="isPlayingUser ? 'stop' : 'play_arrow'"
                  :label="isPlayingUser ? 'Pausar Áudio' : 'Ouvir Minha Voz'"
                  class="font-outfit text-weight-bold rounded-borders full-width text-dark"
                  @click="toggleUserAudio"
                />
              </div>
              <div class="col-4">
                <q-btn
                  flat
                  color="grey-4"
                  icon="refresh"
                  label="Regravar"
                  class="font-outfit text-weight-bold rounded-borders full-width border-all"
                  @click="startRecording"
                >
                  <q-tooltip class="bg-grey-9 text-caption">Gravar nova tentativa</q-tooltip>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ⭐ Player Comparativo Lado a Lado (A/B Sequencial Automático) -->
    <div class="glass-card-flat q-pa-md rounded-borders q-mb-lg border-all bg-gradient-sequential">
      <div class="row items-center justify-between q-col-gutter-sm">
        <div class="col-12 col-md-7">
          <div class="flex items-center text-subtitle1 text-weight-bold font-outfit text-white">
            <q-icon name="compare_arrows" size="22px" class="q-mr-xs text-accent" />
            <span>Comparação Sequencial (Modelo ➔ Minha Voz)</span>
          </div>
          <p class="text-caption text-grey-4 q-my-none">
            Reproduz automaticamente o áudio modelo seguido imediatamente pela sua gravação, destacando nuances de pitch e pausas.
          </p>
        </div>

        <div class="col-12 col-md-5 flex justify-end">
          <q-btn
            unelevated
            :color="isPlayingSequential ? 'deep-purple-9' : 'accent'"
            :icon="isPlayingSequential ? 'graphic_eq' : 'sync_alt'"
            :label="isPlayingSequential ? sequentialStatusText : 'Comparar em Sequência'"
            :disable="!userAudioUrl || isRecording"
            :loading="isPlayingSequential"
            class="font-outfit text-weight-bold rounded-borders q-py-sm q-px-lg full-width-mobile pulse-glow"
            @click="playSequentialComparison"
          >
            <q-tooltip v-if="!userAudioUrl" class="bg-grey-9 text-caption">
              Grave sua voz primeiro para habilitar a comparação
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>

    <!-- Checklist Guiado de Auto-Percepção Fonética -->
    <div v-if="userAudioUrl" class="glass-card-flat q-pa-md rounded-borders border-all animate-fade-in">
      <div class="row items-center justify-between q-mb-sm">
        <div class="text-subtitle2 text-weight-bold font-outfit text-white flex items-center">
          <q-icon name="checklist" size="18px" class="q-mr-xs text-positive" />
          <span>Auto-Monitoramento Fonético (Checklist do Dev)</span>
        </div>
        <q-badge
          :color="allChecklistDone ? 'positive' : 'grey-8'"
          class="font-outfit text-weight-bold q-py-xs q-px-sm rounded-borders"
        >
          {{ completedChecklistCount }} de 3 itens
        </q-badge>
      </div>
      <p class="text-caption text-grey-4 q-mb-md">
        Ao escutar sua gravação em comparação com o modelo nativo, avalie com sinceridade os pontos abaixo:
      </p>

      <div class="q-gutter-y-xs">
        <q-checkbox
          v-model="checklist.tempo"
          dark
          color="accent"
          label="Ritmo & Duração: Falei no mesmo compasso, sem pausas longas entre as palavras."
          class="text-caption text-grey-3"
          @update:model-value="onChecklistChange"
        />
        <q-checkbox
          v-model="checklist.liaison"
          dark
          color="accent"
          label="Conexão de Palavras (Connected Speech): Emendei sons consonantais na vogal seguinte de forma fluida."
          class="text-caption text-grey-3"
          @update:model-value="onChecklistChange"
        />
        <q-checkbox
          v-model="checklist.noEpenthesis"
          dark
          color="accent"
          label="Sem 'i' Fantasma: Não adicionei som de 'i' antes de S (standup, script) ou após consoantes finais (code, bug)."
          class="text-caption text-grey-3"
          @update:model-value="onChecklistChange"
        />
      </div>

      <!-- Banner de Consolidação de Shadowing -->
      <div v-if="allChecklistDone" class="q-mt-md q-pa-sm rounded-borders bg-positive text-white flex items-center justify-between animate-fade-in font-outfit">
        <div class="flex items-center text-weight-bold text-caption">
          <q-icon name="verified" size="18px" class="q-mr-xs" />
          <span>Excelente auto-monitoramento! Treino de shadowing registrado no seu progresso.</span>
        </div>
        <q-btn
          flat
          dense
          size="sm"
          label="Próxima Frase"
          icon-right="arrow_forward"
          class="text-weight-bold"
          :disable="currentIndex >= currentList.length - 1"
          @click="nextItem"
        />
      </div>
    </div>

    <!-- Elemento de áudio invisível para reproduzir a gravação do usuário -->
    <audio ref="userAudioElement" :src="userAudioUrl" class="hidden" @ended="onUserAudioEnded" />
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, watch } from 'vue'
import { speechService } from '../services/speech'
import { audioRecorderService } from '../services/audioRecorder'
import { useStudyStore } from '../stores/study'
import { Notify } from 'quasar'
import confetti from 'canvas-confetti'

const props = defineProps({
  lesson: {
    type: Object,
    required: true
  },
  accent: {
    type: String,
    default: 'US'
  },
  speed: {
    type: Number,
    default: 0.95
  },
  speechEnabled: {
    type: Boolean,
    default: true
  }
})

const studyStore = useStudyStore()

// Estado de Origem das Frases
const sourceType = ref('phrases') // 'phrases' | 'dialogue'
const currentIndex = ref(0)
const playbackRate = ref(0.9)

// Estado de Reprodução
const isPlayingNative = ref(false)
const isPlayingUser = ref(false)
const isPlayingSequential = ref(false)
const sequentialStatusText = ref('Comparando...')

// Estado de Gravação
const isRecording = ref(false)
const recordingSeconds = ref(0)
let recordingTimer = null
const userAudioUrl = ref('')
const userAudioElement = ref(null)

// Checklist de auto-avaliação
const checklist = ref({
  tempo: false,
  liaison: false,
  noEpenthesis: false
})
const hasRecordedPracticeForCurrent = ref(false)

// Lista de Frases formatadas
const lessonPhrases = computed(() => {
  if (!props.lesson?.phrases) return []
  return props.lesson.phrases.map((p, idx) => ({
    id: `phrase_${idx}`,
    text: p.english,
    translation: p.portuguese,
    speaker: null
  }))
})

// Lista de Diálogos formatados
const lessonDialogues = computed(() => {
  if (!props.lesson?.dialogue) return []
  return props.lesson.dialogue.map((d, idx) => ({
    id: `dialogue_${idx}`,
    text: d.text,
    translation: `Fala no diálogo da lição`,
    speaker: d.speaker
  }))
})

const currentList = computed(() => {
  return sourceType.value === 'phrases' ? lessonPhrases.value : lessonDialogues.value
})

const currentItem = computed(() => {
  if (currentList.value.length === 0) return null
  return currentList.value[currentIndex.value] || currentList.value[0]
})

const dayShadowingCount = computed(() => {
  if (!props.lesson?.day) return 0
  return studyStore.shadowingSessions?.[props.lesson.day.toString()] || 0
})

const completedChecklistCount = computed(() => {
  let count = 0
  if (checklist.value.tempo) count++
  if (checklist.value.liaison) count++
  if (checklist.value.noEpenthesis) count++
  return count
})

const allChecklistDone = computed(() => {
  return checklist.value.tempo && checklist.value.liaison && checklist.value.noEpenthesis
})

// Alterna origem
function onSourceChange() {
  currentIndex.value = 0
  resetCurrentPractice()
}

function prevItem() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    resetCurrentPractice()
  }
}

function nextItem() {
  if (currentIndex.value < currentList.value.length - 1) {
    currentIndex.value++
    resetCurrentPractice()
  }
}

function resetCurrentPractice() {
  stopAllAudio()
  cleanupUserAudio()
  checklist.value = { tempo: false, liaison: false, noEpenthesis: false }
  hasRecordedPracticeForCurrent.value = false
}

// Síntese de Voz Modelo (TTS)
async function playNativeSpeech() {
  if (!currentItem.value || !props.speechEnabled) return

  stopAllAudio()
  isPlayingNative.value = true

  try {
    await speechService.speak(currentItem.value.text, props.accent, playbackRate.value)
  } catch (err) {
    Notify.create({
      message: 'Erro na reprodução do modelo de voz',
      caption: err.message,
      color: 'negative',
      icon: 'warning'
    })
  } finally {
    isPlayingNative.value = false
  }
}

// Gravação de Áudio com MediaRecorder
async function startRecording() {
  stopAllAudio()
  cleanupUserAudio()

  try {
    await audioRecorderService.start()
    isRecording.value = true
    recordingSeconds.value = 0

    if (recordingTimer) clearInterval(recordingTimer)
    recordingTimer = setInterval(() => {
      recordingSeconds.value++
      // Limite seguro de 20s para gravação de frase
      if (recordingSeconds.value >= 20) {
        stopRecording()
      }
    }, 1000)
  } catch (err) {
    Notify.create({
      message: 'Não foi possível acessar o microfone',
      caption: err.message || 'Verifique as permissões de áudio no seu navegador.',
      color: 'negative',
      icon: 'mic_off'
    })
  }
}

async function stopRecording() {
  if (!isRecording.value) return

  if (recordingTimer) {
    clearInterval(recordingTimer)
    recordingTimer = null
  }
  isRecording.value = false

  try {
    const result = await audioRecorderService.stop()
    userAudioUrl.value = result.audioUrl

    Notify.create({
      message: 'Gravação concluída!',
      caption: 'Agora compare sua voz com o áudio nativo.',
      color: 'positive',
      icon: 'check_circle',
      timeout: 2000
    })
  } catch (err) {
    Notify.create({
      message: 'Erro ao processar áudio gravado',
      caption: err.message,
      color: 'negative',
      icon: 'warning'
    })
  }
}

// Reprodução do Áudio do Usuário
function toggleUserAudio() {
  if (!userAudioElement.value || !userAudioUrl.value) return

  if (isPlayingUser.value) {
    userAudioElement.value.pause()
    isPlayingUser.value = false
  } else {
    stopAllAudio()
    userAudioElement.value.currentTime = 0
    userAudioElement.value.play().then(() => {
      isPlayingUser.value = true
    }).catch(err => {
      console.error('Erro ao tocar áudio do usuário:', err)
      isPlayingUser.value = false
    })
  }
}

function onUserAudioEnded() {
  isPlayingUser.value = false
  if (isPlayingSequential.value) {
    isPlayingSequential.value = false
    sequentialStatusText.value = 'Comparando...'
  }
}

// ⭐ Comparação Lado a Lado Sequencial Automática (Modelo ➔ Minha Voz)
async function playSequentialComparison() {
  if (!currentItem.value || !userAudioUrl.value || isRecording.value) return

  stopAllAudio()
  isPlayingSequential.value = true

  try {
    // 1. Toca Modelo Nativo
    sequentialStatusText.value = '1/2: Ouvindo Modelo...'
    isPlayingNative.value = true
    await speechService.speak(currentItem.value.text, props.accent, playbackRate.value)
    isPlayingNative.value = false

    // Pausa sutil de 400ms para assimilação mental
    sequentialStatusText.value = 'Transição...'
    await new Promise(resolve => setTimeout(resolve, 400))

    // 2. Toca Gravação do Usuário
    if (userAudioElement.value) {
      sequentialStatusText.value = '2/2: Ouvindo Sua Voz...'
      isPlayingUser.value = true
      userAudioElement.value.currentTime = 0
      await userAudioElement.value.play()
    }
  } catch (err) {
    console.error('Erro na comparação sequencial:', err)
    stopAllAudio()
    isPlayingSequential.value = false
    sequentialStatusText.value = 'Comparando...'
  }
}

function stopAllAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
  isPlayingNative.value = false

  if (userAudioElement.value) {
    userAudioElement.value.pause()
  }
  isPlayingUser.value = false
  isPlayingSequential.value = false
  sequentialStatusText.value = 'Comparando...'
}

function cleanupUserAudio() {
  if (userAudioUrl.value) {
    audioRecorderService.revokeUrl(userAudioUrl.value)
    userAudioUrl.value = ''
  }
}

function onChecklistChange() {
  if (allChecklistDone.value && !hasRecordedPracticeForCurrent.value) {
    hasRecordedPracticeForCurrent.value = true
    studyStore.recordShadowingPractice(props.lesson.day)
    
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    })

    Notify.create({
      message: 'Treino de Shadowing Concluído! 🎯',
      caption: 'Você praticou e auto-avaliou sua fala com excelência.',
      color: 'accent',
      icon: 'auto_awesome',
      timeout: 3000
    })
  }
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

watch(() => props.lesson?.day, () => {
  resetCurrentPractice()
})

onBeforeUnmount(() => {
  if (recordingTimer) clearInterval(recordingTimer)
  audioRecorderService.stopAndDiscard()
  stopAllAudio()
  cleanupUserAudio()
})
</script>

<style lang="scss" scoped>
.shadowing-studio {
  background: rgba(18, 14, 33, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.border-all {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.sentence-stage {
  background: linear-gradient(135deg, rgba(149, 117, 205, 0.08) 0%, rgba(26, 19, 48, 0.8) 100%);
  border-radius: 14px;
}

.player-panel {
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  min-height: 180px;

  &.panel-active {
    border-color: rgba(149, 117, 205, 0.6);
    background: rgba(149, 117, 205, 0.08);
    box-shadow: 0 0 15px rgba(149, 117, 205, 0.2);
  }

  &.panel-recording {
    border-color: rgba(244, 67, 54, 0.6);
    background: rgba(244, 67, 54, 0.08);
    box-shadow: 0 0 15px rgba(244, 67, 54, 0.2);
  }
}

.bg-gradient-sequential {
  background: linear-gradient(135deg, rgba(149, 117, 205, 0.12) 0%, rgba(33, 23, 61, 0.7) 100%);
}

.sound-wave-bar {
  display: inline-block;
  width: 4px;
  background-color: #ef5350;
  border-radius: 2px;
  animation: wave-bar 1s infinite ease-in-out;

  &.bar-1 { height: 8px; animation-delay: 0.1s; }
  &.bar-2 { height: 16px; animation-delay: 0.2s; }
  &.bar-3 { height: 12px; animation-delay: 0.3s; }
  &.bar-4 { height: 18px; animation-delay: 0.4s; }
}

@keyframes wave-bar {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1); }
}

.animate-pulse {
  animation: pulse-text 1.5s infinite;
}

@keyframes pulse-text {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.full-width-mobile {
  @media (max-width: 600px) {
    width: 100%;
  }
}

.text-xs {
  font-size: 11px;
}
</style>
