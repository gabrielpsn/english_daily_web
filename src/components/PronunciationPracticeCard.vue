<template>
  <div class="glass-card-flat q-pa-lg relative-position practice-card">
    <div class="row items-center justify-between q-col-gutter-sm">
      <!-- Frase Modelo e Tradução -->
      <div class="col-12 col-md-8">
        <div class="flex items-center q-gutter-x-sm">
          <q-btn
            round
            flat
            color="accent"
            :icon="isPlaying ? 'volume_up' : 'volume_down'"
            :loading="isPlaying"
            size="sm"
            class="q-mr-xs"
            @click="playModelSpeech"
          >
            <q-tooltip class="bg-grey-9 text-caption">Ouvir Pronúncia Nativa</q-tooltip>
          </q-btn>
          <div class="text-h6 text-weight-bold font-outfit text-white">{{ phrase.english }}</div>
        </div>
        <div class="text-subtitle2 text-grey-5 q-mt-xs q-pl-lg">{{ phrase.portuguese }}</div>
      </div>

      <!-- Controles de Gravação de Voz -->
      <div class="col-12 col-md-4 flex justify-end items-center q-gutter-x-md">
        <!-- Indicador Animado de Gravando -->
        <div v-if="isRecording" class="flex items-center q-gutter-x-xs">
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
          <span class="text-caption text-red text-weight-bold uppercase animate-pulse">Gravando...</span>
        </div>

        <!-- Botão do Microfone -->
        <q-btn
          round
          unelevated
          :color="isRecording ? 'negative' : 'accent'"
          :icon="isRecording ? 'mic_off' : 'mic'"
          class="pulse-glow"
          @click="toggleListening"
        >
          <q-tooltip class="bg-grey-9 text-caption">
            {{ isRecording ? 'Parar Gravação' : 'Falar esta frase' }}
          </q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- Resultados e Análise Visual de Pronúncia Palavra por Palavra -->
    <div v-if="similarityScore !== null" class="q-mt-md q-pa-md rounded-borders bg-gradient-dark border-all animate-fade-in">
      <div class="row items-center justify-between q-col-gutter-sm">
        <div class="col-12 col-sm-8">
          <div class="text-caption text-grey-4 q-mb-xs">Transcrição capturada:</div>
          <div class="text-body1 text-grey-2 italic">
            "{{ spokenText || '(Nenhum áudio detectado)' }}"
          </div>

          <!-- Destaque Visual de Palavras (Word-by-Word Diff) -->
          <div v-if="wordBreakdown.length > 0" class="q-mt-sm flex items-center q-gutter-xs">
            <span class="text-caption text-grey-5 q-mr-xs">Precisão por palavra:</span>
            <span
              v-for="(w, wIdx) in wordBreakdown"
              :key="wIdx"
              :class="['word-pill', w.matched ? 'word-matched' : 'word-missed']"
            >
              <q-icon :name="w.matched ? 'check' : 'close'" size="12px" class="q-mr-xs" />
              {{ w.word }}
            </span>
          </div>
        </div>

        <!-- Badge de Pontuação e Classificação -->
        <div class="col-12 col-sm-4 flex justify-end items-center q-gutter-x-sm">
          <q-badge
            :color="getScoreColor(similarityScore)"
            text-color="white"
            class="text-weight-bold font-outfit q-py-sm q-px-md text-subtitle2 rounded-borders"
          >
            Score: {{ similarityScore }}%
          </q-badge>
          <span class="text-weight-bold text-caption uppercase" :class="`text-${getScoreColor(similarityScore)}`">
            {{ getScoreRatingText(similarityScore) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { speechService } from '../services/speech'
import { calculateSimilarity, compareWords } from '../utils/similarity'
import { Notify } from 'quasar'

const props = defineProps({
  phrase: {
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

const emit = defineEmits(['evaluated'])

const isRecording = ref(false)
const isPlaying = ref(false)
const spokenText = ref('')
const similarityScore = ref(null)
const wordBreakdown = ref([])

// Reproduz a pronúncia nativa de referência
async function playModelSpeech() {
  if (isPlaying.value) {
    speechService.stopSpeaking()
    isPlaying.value = false
    return
  }

  isPlaying.value = true
  try {
    await speechService.speak(props.phrase.english, props.accent, props.speed)
  } catch (err) {
    Notify.create({
      message: 'Não foi possível reproduzir o áudio',
      caption: err.message,
      color: 'negative',
      icon: 'volume_off'
    })
  } finally {
    isPlaying.value = false
  }
}

// Inicia ou interrompe a gravação e reconhecimento de voz
function toggleListening() {
  if (isRecording.value) {
    speechService.stopListening()
    isRecording.value = false
  } else {
    isRecording.value = true
    speechService.startListening(
      props.accent,
      (textResult) => {
        spokenText.value = textResult
        const score = calculateSimilarity(props.phrase.english, textResult)
        similarityScore.value = score
        wordBreakdown.value = compareWords(props.phrase.english, textResult)

        emit('evaluated', { score, textResult, wordBreakdown: wordBreakdown.value })

        if (score >= 80) {
          playSuccessChime()
        }
      },
      (err) => {
        isRecording.value = false
        Notify.create({
          message: 'Falha no reconhecimento de voz',
          caption: err.message || 'Microfone não detectado ou permissão negada.',
          color: 'negative',
          icon: 'mic_off'
        })
      },
      () => {
        isRecording.value = false
      }
    )
  }
}

// Emite áudio suave de confirmação para scores elevados
function playSuccessChime() {
  if (!props.speechEnabled) return
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()
    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.frequency.setValueAtTime(523.25, audioContext.currentTime)
    osc.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1)
    osc.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2)

    gain.gain.setValueAtTime(0.05, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4)

    osc.start()
    osc.stop(audioContext.currentTime + 0.4)
  } catch (e) {
    console.warn('Erro ao tocar chime:', e)
  }
}

function getScoreColor(score) {
  if (score >= 90) return 'positive'
  if (score >= 80) return 'accent'
  if (score >= 70) return 'warning'
  return 'negative'
}

function getScoreRatingText(score) {
  if (score >= 90) return 'Excelente!'
  if (score >= 80) return 'Muito Bom!'
  if (score >= 70) return 'Bom'
  return 'Pratique mais'
}
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.practice-card {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.bg-gradient-dark {
  background: rgba(18, 14, 30, 0.7);
}

.border-all {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

// Pílulas de Palavras
.word-pill {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  text-transform: lowercase;
  padding: 2px 8px;
  border-radius: 12px;
  margin: 2px 0;
  font-family: 'Inter', sans-serif;
}

.word-matched {
  background: rgba(67, 160, 71, 0.2);
  color: #81c784;
  border: 1px solid rgba(67, 160, 71, 0.5);
}

.word-missed {
  background: rgba(229, 57, 53, 0.2);
  color: #ef5350;
  border: 1px solid rgba(229, 57, 53, 0.5);
}

// Barras de Áudio Animadas
.sound-bar {
  width: 3px;
  height: 14px;
  background-color: #f44336;
  border-radius: 2px;
  animation: soundWave 0.8s ease-in-out infinite alternate;

  &:nth-child(2) {
    height: 20px;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    height: 10px;
    animation-delay: 0.4s;
  }
}

@keyframes soundWave {
  0% { transform: scaleY(0.4); }
  100% { transform: scaleY(1.4); }
}

.animate-pulse {
  animation: pulse-badge 1.5s infinite;
}

@keyframes pulse-badge {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
