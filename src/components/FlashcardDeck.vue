<template>
  <div class="glass-card q-pa-lg h-100 flex flex-column justify-between">
    <div>
      <!-- Cabeçalho com indicador de SRS -->
      <div class="row items-center justify-between q-mb-xs">
        <div class="text-subtitle2 text-purple-2 text-weight-bold uppercase font-outfit">
          Repetição Espaçada (SRS Leitner)
        </div>
        <q-badge
          v-if="dueCardsCount > 0"
          color="accent"
          class="font-outfit text-weight-bold q-py-xs q-px-sm rounded-borders"
        >
          {{ dueCardsCount }} para revisar hoje
        </q-badge>
        <q-badge
          v-else-if="completedLessons.length > 0"
          color="positive"
          class="font-outfit text-weight-bold q-py-xs q-px-sm rounded-borders"
        >
          Revisões em dia! ✨
        </q-badge>
      </div>

      <h3 class="text-h6 text-weight-bold font-outfit q-my-none text-white">Card do Conhecimento</h3>
      <p class="text-caption text-grey-5 q-mb-md">
        Fixe vocabulários de lições concluídas. O algoritmo agenda a próxima revisão conforme sua facilidade.
      </p>

      <!-- Cenário A: Card Ativo Disponível para Prática -->
      <div v-if="currentWord">
        <div
          class="review-box relative-position overflow-hidden flex flex-column justify-between q-pa-lg cursor-pointer glass-card-flat"
          @click="toggleFlip"
        >
          <!-- Indicador de Caixa Leitner no Topo do Card -->
          <div class="row items-center justify-between full-width">
            <span class="text-caption text-grey-4 text-weight-bold uppercase font-outfit">
              {{ currentBoxLabel }}
            </span>
            <q-btn
              round
              flat
              dense
              size="sm"
              color="accent"
              icon="volume_up"
              @click.stop="playSpeech(currentWord.word)"
            >
              <q-tooltip class="bg-grey-9 text-caption">Ouvir Pronúncia</q-tooltip>
            </q-btn>
          </div>

          <!-- Frente do Card (Palavra em Inglês) -->
          <div v-if="!isFlipped" class="animate-fade-in text-center q-my-md">
            <div class="text-caption text-accent text-weight-bold uppercase">Palavra / Expressão</div>
            <div class="text-h4 text-weight-bold q-my-sm font-outfit text-gradient text-capitalize">
              {{ currentWord.word }}
            </div>
            <div class="text-caption text-grey-4 flex items-center justify-center">
              <q-icon name="touch_app" size="14px" class="q-mr-xs text-grey-5" />
              <span>Clique no card para revelar a tradução</span>
            </div>
          </div>

          <!-- Verso do Card (Significado & Exemplo) -->
          <div v-else class="animate-fade-in text-center q-my-md">
            <div class="text-caption text-warning text-weight-bold uppercase">Significado</div>
            <div class="text-h5 text-weight-bold q-my-xs text-white">
              {{ currentWord.translation }}
            </div>
            <div class="text-caption text-grey-4 italic q-mt-sm">
              "{{ currentWord.example }}"
            </div>
          </div>

          <!-- Dica inferior -->
          <div class="text-center text-caption text-grey-6">
            {{ isFlipped ? 'Como foi lembrar desta palavra?' : 'Toque para virar' }}
          </div>
        </div>

        <!-- Botões de Reação SRS (Surgem quando o card é virado) -->
        <div v-if="isFlipped" class="row q-col-gutter-xs q-mt-md animate-fade-in">
          <div class="col-4">
            <q-btn
              unelevated
              color="negative"
              class="full-width font-outfit text-weight-bold text-caption rounded-borders q-py-sm"
              @click="rateCard('hard')"
            >
              <div class="flex flex-column items-center">
                <span>🔴 Difícil</span>
                <span class="text-xs text-grey-3">(Amanhã)</span>
              </div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              unelevated
              color="warning"
              text-color="dark"
              class="full-width font-outfit text-weight-bold text-caption rounded-borders q-py-sm"
              @click="rateCard('good')"
            >
              <div class="flex flex-column items-center">
                <span>🟡 Bom</span>
                <span class="text-xs text-dark">(3 dias)</span>
              </div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              unelevated
              color="positive"
              class="full-width font-outfit text-weight-bold text-caption rounded-borders q-py-sm"
              @click="rateCard('easy')"
            >
              <div class="flex flex-column items-center">
                <span>🟢 Fácil</span>
                <span class="text-xs text-grey-3">(7 dias+)</span>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Cenário B: Todas as revisões de hoje concluídas -->
      <div
        v-else-if="completedLessons.length > 0"
        class="text-center q-py-xl glass-card-flat rounded-borders text-grey-4"
      >
        <q-icon name="celebration" size="48px" color="accent" class="q-mb-sm animate-pulse" />
        <div class="text-h6 font-outfit text-weight-bold text-white">Tudo em dia por hoje!</div>
        <p class="text-caption text-grey-5 q-mb-md">
          Você revisou todas as palavras agendadas para hoje. Ótimo trabalho de consistência!
        </p>
        <q-btn
          outline
          color="accent"
          icon="loop"
          label="Praticar no Modo Livre"
          class="font-outfit text-weight-bold rounded-borders"
          @click="startFreePractice"
        />
      </div>

      <!-- Cenário C: Nenhuma aula concluída ainda -->
      <div v-else class="text-center q-py-xl glass-card-flat rounded-borders text-grey-5">
        <q-icon name="lock" size="40px" class="q-mb-xs text-grey-6" />
        <div class="text-body2">Conclua pelo menos uma aula para habilitar os Flashcards!</div>
      </div>
    </div>

    <!-- Barra Inferior de Métricas e Ações -->
    <div v-if="currentWord" class="flex justify-between items-center q-mt-md">
      <span class="text-caption text-grey-5">
        {{ queueIndex + 1 }} de {{ currentQueue.length }} na fila de hoje
      </span>
      <q-btn
        flat
        color="accent"
        icon="skip_next"
        label="Pular"
        class="font-outfit text-weight-bold"
        @click="nextCardInQueue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useStudyStore } from '../stores/study'
import { useSettingsStore } from '../stores/settings'
import { speechService } from '../services/speech'
import confetti from 'canvas-confetti'

const props = defineProps({
  completedLessons: {
    type: Array,
    default: () => []
  },
  lessonsData: {
    type: Array,
    default: () => []
  }
})

const studyStore = useStudyStore()
const settingsStore = useSettingsStore()

const isFlipped = ref(false)
const currentQueue = ref([])
const queueIndex = ref(0)
const isFreePractice = ref(false)

// Palavra atualmente exibida no topo do deck
const currentWord = computed(() => {
  if (currentQueue.value.length === 0) return null
  return currentQueue.value[queueIndex.value] || null
})

// Informação sobre a caixa de repetição da palavra atual
const currentBoxLabel = computed(() => {
  if (!currentWord.value) return ''
  const key = currentWord.value.word.toLowerCase().trim()
  const data = studyStore.flashcards?.[key]
  if (!data || !data.box) return 'Caixa 1 (Nova Palavra)'
  return `Caixa ${data.box} de 5 • Intervalo: ${data.interval}d`
})

// Quantidade de palavras que precisam ser revisadas hoje
const dueCardsCount = computed(() => {
  const pool = getAllVocabularyPool()
  const todayStr = new Date().toLocaleDateString('sv')
  return pool.filter(item => {
    const key = item.word.toLowerCase().trim()
    const data = studyStore.flashcards?.[key]
    return !data || !data.nextReview || data.nextReview <= todayStr
  }).length
})

// Agrupa todos os vocabulários das aulas concluídas
function getAllVocabularyPool() {
  const pool = []
  props.completedLessons.forEach(dayId => {
    const lesson = props.lessonsData.find(l => l.day === dayId)
    if (lesson && lesson.vocabulary) {
      pool.push(...lesson.vocabulary)
    }
  })
  return pool
}

// Constrói a fila de revisão do dia baseada no algoritmo Leitner
function buildDailyQueue() {
  isFlipped.value = false
  queueIndex.value = 0
  isFreePractice.value = false

  const pool = getAllVocabularyPool()
  if (pool.length === 0) {
    currentQueue.value = []
    return
  }

  const todayStr = new Date().toLocaleDateString('sv')
  // Prioriza palavras pendentes para hoje ou nunca estudadas
  const due = pool.filter(item => {
    const key = item.word.toLowerCase().trim()
    const data = studyStore.flashcards?.[key]
    return !data || !data.nextReview || data.nextReview <= todayStr
  })

  // Embaralha levemente para não ficar monótono
  currentQueue.value = due.sort(() => Math.random() - 0.5)
}

// Inicia modo livre quando não houver cards pendentes para hoje
function startFreePractice() {
  isFreePractice.value = true
  const pool = getAllVocabularyPool()
  currentQueue.value = pool.sort(() => Math.random() - 0.5)
  queueIndex.value = 0
  isFlipped.value = false
}

function toggleFlip() {
  isFlipped.value = !isFlipped.value
  if (isFlipped.value && currentWord.value) {
    playSpeech(currentWord.value.word)
  }
}

// Avalia a palavra e avança para a próxima no algoritmo Leitner
function rateCard(rating) {
  if (!currentWord.value) return

  studyStore.recordFlashcardReview(currentWord.value.word, rating)
  
  nextCardInQueue()
}

function nextCardInQueue() {
  isFlipped.value = false

  if (queueIndex.value + 1 < currentQueue.value.length) {
    queueIndex.value++
  } else {
    // Fim da fila!
    currentQueue.value = []
    if (!isFreePractice.value) {
      // Celebração de fim da fila diária
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.7 }
      })
    }
  }
}

// Síntese de voz para a palavra do card
function playSpeech(text) {
  if (!settingsStore.speechEnabled) return
  speechService.speak(text, settingsStore.accent, settingsStore.speed)
}

watch(() => props.completedLessons.length, () => {
  buildDailyQueue()
})

onMounted(() => {
  buildDailyQueue()
})
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.h-100 {
  height: 100%;
}

.uppercase {
  text-transform: uppercase;
}

.text-xs {
  font-size: 10px;
}

.review-box {
  min-height: 190px;
  border-radius: 14px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    border-color: rgba(149, 117, 205, 0.4);
    background: rgba(149, 117, 205, 0.05);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.animate-pulse {
  animation: pulse-icon 1.5s infinite;
}

@keyframes pulse-icon {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>
