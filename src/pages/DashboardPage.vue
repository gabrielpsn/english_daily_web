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
          <h1 class="text-h4 text-weight-bold font-outfit q-my-sm text-gradient">Olá, {{ authStore.displayName }}!</h1>
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

    <!-- Habit Grid Estilo GitHub para Devs (Componente Modular) -->
    <ConsistencyHeatmap :study-dates="studyStore.studyDates" />

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

      <!-- Flashcards de Revisão Ativa (Componente Modular) -->
      <div class="col-12 col-md-6">
        <FlashcardDeck
          :completed-lessons="studyStore.completedLessons"
          :lessons-data="lessonsData"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStudyStore } from '../stores/study'
import { useAuthStore } from '../stores/auth'
import lessonsData from '../data/lessonsData'
import ConsistencyHeatmap from '../components/ConsistencyHeatmap.vue'
import FlashcardDeck from '../components/FlashcardDeck.vue'

const studyStore = useStudyStore()
const authStore = useAuthStore()

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
  const sorted = [...studyStore.studyDates].sort()
  const last = sorted[sorted.length - 1]
  const [y, m, d] = last.split('-')
  return `${d}/${m}/${y}`
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
</style>
