<template>
  <div class="q-gutter-y-md">
    <!-- Cabeçalho -->
    <div class="row items-center justify-between q-col-gutter-sm animate-slide-up">
      <div class="col-12 col-sm-6">
        <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-gradient-purple flex items-center">
          <q-icon name="menu_book" class="q-mr-sm text-accent" />
          Plano de 90 Dias
        </h1>
        <p class="text-caption text-grey-5 q-my-none">Acompanhe e treine diariamente para atingir a fluência.</p>
      </div>

      <!-- Filtro Rápido -->
      <div class="col-12 col-sm-6 flex justify-end">
        <q-btn-toggle
          v-model="statusFilter"
          toggle-color="accent"
          text-color="grey-4"
          toggle-text-color="white"
          flat
          dense
          class="glass-card-flat q-pa-xs rounded-borders"
          :options="[
            { label: 'Todas', value: 'all' },
            { label: 'Concluídas', value: 'completed' },
            { label: 'Pendentes', value: 'pending' }
          ]"
        />
      </div>
    </div>

    <!-- Barra de Filtros de Fases -->
    <div class="row q-col-gutter-sm animate-slide-up" style="animation-delay: 0.1s;">
      <div class="col-12 flex q-gutter-sm">
        <q-btn
          v-for="phase in phaseOptions"
          :key="phase.value"
          unelevated
          dense
          class="q-px-md text-weight-medium rounded-borders"
          :color="phaseFilter === phase.value ? 'accent' : 'dark'"
          :text-color="phaseFilter === phase.value ? 'white' : 'grey-4'"
          :label="phase.label"
          @click="phaseFilter = phase.value"
        />
      </div>
    </div>

    <!-- Progresso da Fase Ativa -->
    <div class="glass-card q-pa-md animate-slide-up" style="animation-delay: 0.15s;">
      <div class="flex items-center justify-between text-caption text-grey-4 q-mb-xs">
        <span class="text-weight-bold uppercase font-outfit">Seu Progresso de Lições</span>
        <span>{{ completedFiltered }} de {{ totalFiltered }} Concluídas ({{ filteredProgress }}%)</span>
      </div>
      <q-linear-progress
        :value="filteredProgress / 100"
        color="accent"
        track-color="grey-9"
        class="rounded-borders"
        style="height: 10px;"
      />
    </div>

    <!-- Grid de Lições -->
    <div class="row q-col-gutter-md animate-slide-up" style="animation-delay: 0.2s;">
      <div
        v-for="lesson in filteredLessons"
        :key="lesson.day"
        class="col-12 col-sm-6 col-md-4"
      >
        <!-- Card da Lição com status dinâmico -->
        <div
          :class="[
            'glass-card lesson-card relative-position overflow-hidden h-100 flex flex-column justify-between q-pa-md',
            `status-${lesson.status}`
          ]"
        >
          <!-- Indicador de Status lateral -->
          <div class="status-indicator"></div>

          <div>
            <div class="row items-center justify-between q-mb-sm">
              <span class="day-badge font-outfit text-weight-bold">DIA {{ lesson.day }}</span>
              <!-- Ícone de status -->
              <q-icon
                v-if="lesson.status === 'completed'"
                name="check_circle"
                color="positive"
                size="20px"
              />
              <q-icon
                v-else-if="lesson.status === 'current'"
                name="star"
                color="info"
                size="20px"
                class="animate-pulse"
              />
              <q-icon
                v-else
                name="lock"
                color="grey-7"
                size="18px"
              />
            </div>

            <h3 class="text-subtitle1 text-weight-bold font-outfit text-white q-my-xs ellipsis-2-lines">
              {{ lesson.title }}
            </h3>
            
            <span class="text-caption text-grey-5 uppercase font-outfit text-weight-medium">
              Fase: {{ lesson.phase }}
            </span>
          </div>

          <div class="row items-center justify-between q-mt-lg">
            <span class="text-caption text-grey-5">
              {{ lesson.vocabulary.length + lesson.phrases.length }} Atividades
            </span>
            
            <q-btn
              unelevated
              size="sm"
              class="q-px-md font-outfit text-weight-bold rounded-borders"
              :color="getBtnColor(lesson.status)"
              :label="getBtnLabel(lesson.status)"
              :to="{ name: 'lesson-detail', params: { id: lesson.day } }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStudyStore } from '../stores/study'

const studyStore = ref(useStudyStore())

const statusFilter = ref('all') // 'all', 'completed', 'pending'
const phaseFilter = ref('all')   // 'all', 'fundamentos', 'conversacao', 'fluencia'

const phaseOptions = [
  { label: 'Todos os Dias', value: 'all' },
  { label: 'Fase 1: Fundamentos (1-30)', value: 'fundamentos' },
  { label: 'Fase 2: Conversação & TI (31-60)', value: 'conversacao' },
  { label: 'Fase 3: Fluência (61-90)', value: 'fluencia' }
]

// Lista filtrada e enriquecida das lições
const filteredLessons = computed(() => {
  return studyStore.value.lessonsStatusList.filter(lesson => {
    // Filtro por status
    const matchesStatus =
      statusFilter.value === 'all' ||
      (statusFilter.value === 'completed' && lesson.status === 'completed') ||
      (statusFilter.value === 'pending' && lesson.status !== 'completed')

    // Filtro por fase
    let matchesPhase = false
    if (phaseFilter.value === 'all') {
      matchesPhase = true
    } else if (phaseFilter.value === 'fundamentos') {
      matchesPhase = lesson.day <= 30
    } else if (phaseFilter.value === 'conversacao') {
      matchesPhase = lesson.day > 30 && lesson.day <= 60
    } else if (phaseFilter.value === 'fluencia') {
      matchesPhase = lesson.day > 60
    }

    return matchesStatus && matchesPhase
  })
})

const totalFiltered = computed(() => filteredLessons.value.length)

const completedFiltered = computed(() => {
  return filteredLessons.value.filter(l => l.status === 'completed').length
})

const filteredProgress = computed(() => {
  if (totalFiltered.value === 0) return 0
  return Math.round((completedFiltered.value / totalFiltered.value) * 100)
})

// Utilitários de botão dinâmicos
function getBtnColor(status) {
  if (status === 'completed') return 'positive'
  if (status === 'current') return 'accent'
  return 'dark'
}

function getBtnLabel(status) {
  if (status === 'completed') return 'Praticar Novamente'
  if (status === 'current') return 'Iniciar Aula'
  return 'Visualizar'
}
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.uppercase {
  text-transform: uppercase;
}
.h-100 {
  height: 100%;
}

.lesson-card {
  padding-left: 20px !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  .status-indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    transition: all 0.3s ease;
  }
}

// Estilizações de status
.status-completed {
  border-color: rgba(67, 160, 71, 0.2);
  background: rgba(67, 160, 71, 0.03);
  
  .status-indicator {
    background-color: #43A047;
  }
  .day-badge {
    color: #43A047;
    background: rgba(67, 160, 71, 0.1);
  }
}

.status-current {
  border-color: rgba(149, 117, 205, 0.4);
  background: rgba(149, 117, 205, 0.08);
  box-shadow: 0 4px 20px rgba(94, 53, 177, 0.2);
  
  .status-indicator {
    background-color: #7E57C2;
  }
  .day-badge {
    color: #9575CD;
    background: rgba(149, 117, 205, 0.15);
  }
}

.status-future {
  opacity: 0.75;
  
  .status-indicator {
    background-color: #2e264d;
  }
  .day-badge {
    color: #a09eb4;
    background: rgba(255, 255, 255, 0.05);
  }
}

.day-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 48px;
}

.animate-pulse {
  animation: pulse-icon 1.5s infinite;
}

@keyframes pulse-icon {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
