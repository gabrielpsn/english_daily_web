<template>
  <div class="q-gutter-y-lg">
    <!-- Hero Header Card -->
    <div class="glass-card bg-gradient-primary q-pa-lg text-white relative-position overflow-hidden shadow-6 animate-slide-up">
      <div class="absolute-right q-pr-lg gt-xs" style="opacity: 0.15; top: 15%">
        <q-icon name="code" size="180px" />
      </div>
      
      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-md-8">
          <div class="text-subtitle1 text-purple-2 text-weight-medium font-outfit uppercase tracking-wider">English Study Pro</div>
          <h1 class="text-h4 text-weight-bold font-outfit q-my-sm text-gradient">Olá, Gabriel!</h1>
          <p class="text-body1 text-grey-2 q-mb-md">
            {{ heroSubtitle }}
          </p>
          <q-btn
            unelevated
            color="accent"
            text-color="white"
            class="text-weight-bold pulse-glow q-py-sm q-px-lg rounded-borders font-outfit"
            icon="play_arrow"
            :label="`Iniciar Dia ${studyStore.nextLesson.day}: ${studyStore.nextLesson.title}`"
            :to="{ name: 'lesson-detail', params: { id: studyStore.nextLesson.day } }"
          />
        </div>
        
        <!-- Bloco radial rápido -->
        <div class="col-12 col-md-4 flex justify-center gt-sm">
          <q-circular-progress
            show-value
            font-size="20px"
            :value="studyStore.progress"
            size="130px"
            :thickness="0.12"
            color="accent"
            track-color="purple-10"
            class="text-white text-weight-bold"
          >
            {{ studyStore.progress }}%
          </q-circular-progress>
        </div>
      </div>
    </div>

    <!-- Seção de Métricas Principais -->
    <div class="row q-col-gutter-md">
      <!-- Card Progresso -->
      <div class="col-12 col-sm-4">
        <div class="glass-card q-pa-md h-100 flex flex-column justify-between">
          <div class="flex items-center justify-between">
            <span class="text-caption text-grey-4 text-weight-bold uppercase">Progresso do Curso</span>
            <q-icon name="insights" color="accent" size="24px" />
          </div>
          <div class="q-py-md">
            <div class="text-h3 text-weight-bold text-gradient font-outfit">{{ studyStore.completedCount }} / 90</div>
            <div class="text-caption text-grey-5">Lições diárias concluídas</div>
          </div>
          <q-linear-progress
            :value="studyStore.progress / 100"
            color="accent"
            track-color="grey-9"
            class="rounded-borders q-mt-sm"
            style="height: 8px;"
          />
        </div>
      </div>

      <!-- Card Streak -->
      <div class="col-12 col-sm-4">
        <div class="glass-card q-pa-md h-100 flex flex-column justify-between">
          <div class="flex items-center justify-between">
            <span class="text-caption text-grey-4 text-weight-bold uppercase">Streak de Estudos</span>
            <q-icon name="local_fire_department" color="warning" size="24px" />
          </div>
          <div class="q-py-md">
            <div class="text-h3 text-weight-bold text-warning font-outfit">{{ studyStore.streak }} 🔥</div>
            <div class="text-caption text-grey-5">{{ streakText }}</div>
          </div>
          <div class="text-caption text-grey-4 flex items-center">
            <q-icon name="history" size="14px" class="q-mr-xs" />
            <span>Última prática registrada: {{ lastStudyText }}</span>
          </div>
        </div>
      </div>

      <!-- Card Tempo Estudado -->
      <div class="col-12 col-sm-4">
        <div class="glass-card q-pa-md h-100 flex flex-column justify-between">
          <div class="flex items-center justify-between">
            <span class="text-caption text-grey-4 text-weight-bold uppercase">Tempo Estudado</span>
            <q-icon name="timer" color="info" size="24px" />
          </div>
          <div class="q-py-md">
            <div class="text-h3 text-weight-bold text-info font-outfit">{{ studyStore.totalMinutes }} Min</div>
            <div class="text-caption text-grey-5">Minutos dedicados à fala e escuta</div>
          </div>
          <div class="text-caption text-grey-4 flex items-center">
            <q-icon name="bolt" size="14px" class="q-mr-xs text-info" />
            <span>Equivale a ~{{ Math.round(studyStore.totalMinutes / 60) }} horas acumuladas</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Habit Grid Estilo GitHub para Devs -->
    <div class="glass-card q-pa-lg">
      <div class="flex items-center justify-between q-mb-md">
        <div>
          <h2 class="text-h6 text-weight-bold font-outfit q-my-none text-gradient-purple flex items-center">
            <q-icon name="code" size="24px" class="q-mr-sm" />
            Frequência de Estudos (Git-Style Commits)
          </h2>
          <p class="text-caption text-grey-5 q-my-none">Mapeamento de consistência de estudos nos últimos 120 dias</p>
        </div>
        <div class="flex items-center q-gutter-x-xs text-caption text-grey-5 gt-xs">
          <span>Menos</span>
          <div class="grid-box bg-box-0"></div>
          <div class="grid-box bg-box-1"></div>
          <div class="grid-box bg-box-2"></div>
          <span>Mais</span>
        </div>
      </div>

      <!-- Grid real -->
      <div class="row no-wrap justify-between overflow-auto q-py-sm">
        <div class="flex q-gutter-xs" style="min-width: 620px;">
          <!-- 17 colunas (semanas) de 7 linhas (dias) -->
          <div v-for="weekIndex in 17" :key="weekIndex" class="flex flex-column q-gutter-y-xs">
            <div
              v-for="dayIndex in 7"
              :key="dayIndex"
              :class="['grid-box', getGridBoxClass(weekIndex, dayIndex)]"
            >
              <q-tooltip class="bg-grey-9 text-white text-caption">
                {{ getGridBoxTooltip(weekIndex, dayIndex) }}
              </q-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção Inferior: Próxima Aula & Flashcards -->
    <div class="row q-col-gutter-lg">
      <!-- Próxima Aula Card -->
      <div class="col-12 col-md-6">
        <div class="glass-card q-pa-lg h-100 flex flex-column justify-between">
          <div>
            <div class="text-subtitle2 text-accent text-weight-bold uppercase font-outfit q-mb-xs">Próxima Lição Recomendada</div>
            <h3 class="text-h5 text-weight-bold font-outfit q-my-xs text-white">Dia {{ studyStore.nextLesson.day }}: {{ studyStore.nextLesson.title }}</h3>
            <q-chip dense outline color="accent" text-color="white" class="q-mb-md">
              Fase: {{ studyStore.nextLesson.phase }}
            </q-chip>
            
            <div class="row q-col-gutter-sm q-mb-md">
              <div class="col-6">
                <div class="glass-card-flat q-pa-sm flex items-center">
                  <q-icon name="translate" color="accent" size="18px" class="q-mr-sm" />
                  <span class="text-caption text-grey-3">{{ studyStore.nextLesson.vocabulary.length }} Vocabulários</span>
                </div>
              </div>
              <div class="col-6">
                <div class="glass-card-flat q-pa-sm flex items-center">
                  <q-icon name="hearing" color="accent" size="18px" class="q-mr-sm" />
                  <span class="text-caption text-grey-3">{{ studyStore.nextLesson.phrases.length }} Frases Práticas</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between q-mt-lg">
            <span class="text-caption text-grey-5">Estimativa: ~15 minutos</span>
            <q-btn
              unelevated
              color="accent"
              icon="chevron_right"
              label="Iniciar Agora"
              class="font-outfit text-weight-bold"
              :to="{ name: 'lesson-detail', params: { id: studyStore.nextLesson.day } }"
            />
          </div>
        </div>
      </div>

      <!-- Flashcards de Revisão -->
      <div class="col-12 col-md-6">
        <div class="glass-card q-pa-lg h-100 flex flex-column justify-between">
          <div>
            <div class="text-subtitle2 text-purple-2 text-weight-bold uppercase font-outfit q-mb-xs">Revisão Rápida (Active Recall)</div>
            <h3 class="text-h6 text-weight-bold font-outfit q-my-none text-white">Card do Conhecimento</h3>
            <p class="text-caption text-grey-5 q-mb-md">Pratique vocabulários de lições que você já concluiu para consolidar a memória.</p>
            
            <div v-if="flashcardWord" class="review-box relative-position overflow-hidden flex flex-center text-center q-pa-lg cursor-pointer glass-card-flat" @click="isFlipped = !isFlipped">
              <!-- Verso ou Frente -->
              <div v-if="!isFlipped" class="animate-fade-in">
                <div class="text-caption text-accent text-weight-bold">PALAVRA / EXPRESSÃO</div>
                <div class="text-h4 text-weight-bold q-my-sm font-outfit text-gradient text-capitalize">{{ flashcardWord.word }}</div>
                <div class="text-caption text-grey-4 flex items-center justify-center">
                  <q-icon name="touch_app" size="14px" class="q-mr-xs text-grey-5" />
                  <span>Clique para ver a tradução</span>
                </div>
              </div>
              <div v-else class="animate-fade-in">
                <div class="text-caption text-warning text-weight-bold">SIGNIFICADO</div>
                <div class="text-h5 text-weight-bold q-my-xs text-white">{{ flashcardWord.translation }}</div>
                <div class="text-caption text-grey-4 italic q-mt-sm">"{{ flashcardWord.example }}"</div>
              </div>
            </div>
            
            <div v-else class="text-center q-py-lg glass-card-flat text-grey-5">
              <q-icon name="lock" size="32px" class="q-mb-xs text-grey-6" />
              <div>Conclua pelo menos uma aula para habilitar os Flashcards!</div>
            </div>
          </div>

          <div class="flex justify-end q-mt-md">
            <q-btn
              v-if="flashcardWord"
              flat
              color="accent"
              icon="refresh"
              label="Outra Palavra"
              class="font-outfit text-weight-bold"
              @click="loadRandomFlashcard"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStudyStore } from '../stores/study'
import lessonsData from '../data/lessonsData'

const studyStore = useStudyStore()

const isFlipped = ref(false)
const flashcardWord = ref(null)

// Título do cabeçalho dinâmico
const heroSubtitle = computed(() => {
  if (studyStore.completedCount === 0) {
    return 'Bem-vindo ao seu plano de estudos de 90 dias! Comece hoje e aprenda inglês com consistência.'
  }
  if (studyStore.streak > 0) {
    return `Incrível! Você está em uma sequência de estudos de ${studyStore.streak} dias seguidos. Vamos manter o ritmo hoje!`
  }
  return 'Pronto para voltar aos estudos? Lembre-se, consistência diária de 10 a 15 minutos é o segredo da fluência.'
})

// Texto descritivo do streak
const streakText = computed(() => {
  if (studyStore.streak === 0) {
    return 'Nenhum streak ativo. Comece hoje!'
  }
  if (studyStore.streak < 7) {
    return 'Excelente começo! Continue estudando amanhã!'
  }
  if (studyStore.streak < 15) {
    return 'Hábito ativado! Você está no caminho certo.'
  }
  return 'Foco inabalável! Sua consistência é exemplar.'
})

// Data do último estudo
const lastStudyText = computed(() => {
  if (studyStore.studyDates.length === 0) return 'Nenhuma'
  // Formata a última data do array ordenado
  const sorted = [...studyStore.studyDates].sort()
  const last = sorted[sorted.length - 1]
  // Inverte YYYY-MM-DD para DD/MM/YYYY
  const [y, m, d] = last.split('-')
  return `${d}/${m}/${y}`
})

// --- HABIT GRID (ESTILO GITHUB) ---

// Gera a data correspondente a uma coordenada do grid
function getDateFromGridCoords(weekIndex, dayIndex) {
  // O grid mostra 17 semanas. A última caixa é hoje.
  const today = new Date()
  today.setHours(0,0,0,0)
  
  // Total de dias no grid: 17 * 7 = 119 dias atrás
  const totalDaysInGrid = 17 * 7
  const dayOffsetFromEnd = (17 - weekIndex) * 7 + (7 - dayIndex)
  
  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() - dayOffsetFromEnd)
  return targetDate
}

// Retorna a classe CSS correspondente para colorir a caixa do grid
function getGridBoxClass(weekIndex, dayIndex) {
  const targetDate = getDateFromGridCoords(weekIndex, dayIndex)
  const dateStr = targetDate.toLocaleDateString('sv') // 'YYYY-MM-DD'
  
  // Valida se a data do grid é futura
  const today = new Date()
  today.setHours(0,0,0,0)
  if (targetDate > today) return 'grid-future'

  // Verifica se o usuário estudou
  const studied = studyStore.studyDates.includes(dateStr)
  return studied ? 'bg-box-2' : 'bg-box-0'
}

// Retorna a mensagem de tooltip para a caixa do grid
function getGridBoxTooltip(weekIndex, dayIndex) {
  const targetDate = getDateFromGridCoords(weekIndex, dayIndex)
  const dateStr = targetDate.toLocaleDateString('sv')
  
  // Formata data brasileira
  const dateBr = targetDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })
  
  const today = new Date()
  today.setHours(0,0,0,0)
  if (targetDate > today) return `${dateBr} (Futuro)`

  const studied = studyStore.studyDates.includes(dateStr)
  return studied 
    ? `${dateBr}: Dia Estudado! 🔥` 
    : `${dateBr}: Sem estudos registrados.`
}

// --- FLASHCARDS ---

// Carrega uma palavra aleatória das aulas já concluídas
function loadRandomFlashcard() {
  isFlipped.value = false
  
  // Se não concluiu aulas, não faz nada
  if (studyStore.completedLessons.length === 0) {
    flashcardWord.value = null
    return
  }

  // Agrupa todos os vocabulários das aulas concluídas
  const pool = []
  studyStore.completedLessons.forEach(dayId => {
    const lesson = lessonsData.find(l => l.day === dayId)
    if (lesson && lesson.vocabulary) {
      pool.push(...lesson.vocabulary)
    }
  })

  if (pool.length > 0) {
    const randIndex = Math.floor(Math.random() * pool.length)
    flashcardWord.value = pool[randIndex]
  } else {
    // Fallback: se as aulas concluídas não tiverem vocabulário
    flashcardWord.value = null
  }
}

onMounted(() => {
  loadRandomFlashcard()
})
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.tracking-wider {
  letter-spacing: 0.1em;
}
.h-100 {
  height: 100%;
}
.uppercase {
  text-transform: uppercase;
}

// Flashcard Style
.review-box {
  min-height: 130px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(149, 117, 205, 0.4);
    background: rgba(149, 117, 205, 0.05);
  }
}

// Git Habit Tracker Grid
.grid-box {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 8px rgba(149, 117, 205, 0.8);
    z-index: 10;
  }
}

.bg-box-0 {
  background-color: #17142b;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.bg-box-1 {
  background-color: rgba(94, 53, 177, 0.4);
}

.bg-box-2 {
  background-color: #7E57C2;
  box-shadow: 0 0 4px rgba(126, 87, 194, 0.4);
}

.grid-future {
  background-color: #0b0914;
  opacity: 0.3;
  cursor: not-allowed;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-pulse {
  animation: pulse-badge 1.5s infinite;
}

@keyframes pulse-badge {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}
</style>
