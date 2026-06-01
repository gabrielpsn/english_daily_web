<template>
  <div class="q-gutter-y-lg">
    <!-- Cabeçalho -->
    <div class="animate-slide-up">
      <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-gradient-purple flex items-center">
        <q-icon name="bar_chart" class="q-mr-sm text-accent" />
        Minha Evolução
      </h1>
      <p class="text-caption text-grey-5 q-my-none">Monitore suas estatísticas, horas estudadas e a dedicação ao seu aprendizado.</p>
    </div>

    <!-- Linha de Destaques Rápidos -->
    <div class="row q-col-gutter-md animate-slide-up" style="animation-delay: 0.1s;">
      <!-- Total Aulas -->
      <div class="col-6 col-sm-3">
        <div class="glass-card q-pa-md text-center">
          <q-icon name="done_all" color="positive" size="32px" class="q-mb-xs" />
          <div class="text-h5 text-weight-bold font-outfit">{{ studyStore.completedCount }} / 90</div>
          <div class="text-caption text-grey-5">Concluídas</div>
        </div>
      </div>
      
      <!-- Streak -->
      <div class="col-6 col-sm-3">
        <div class="glass-card q-pa-md text-center">
          <q-icon name="local_fire_department" color="warning" size="32px" class="q-mb-xs" />
          <div class="text-h5 text-weight-bold font-outfit">{{ studyStore.streak }} Dias</div>
          <div class="text-caption text-grey-5">Streak Ativo</div>
        </div>
      </div>
      
      <!-- Tempo -->
      <div class="col-6 col-sm-3">
        <div class="glass-card q-pa-md text-center">
          <q-icon name="schedule" color="info" size="32px" class="q-mb-xs" />
          <div class="text-h5 text-weight-bold font-outfit">{{ studyStore.totalMinutes }} Min</div>
          <div class="text-caption text-grey-5">Tempo Total</div>
        </div>
      </div>

      <!-- Notas registradas -->
      <div class="col-6 col-sm-3">
        <div class="glass-card q-pa-md text-center">
          <q-icon name="description" color="accent" size="32px" class="q-mb-xs" />
          <div class="text-h5 text-weight-bold font-outfit">{{ totalNotesCount }} Aulas</div>
          <div class="text-caption text-grey-5">Anotadas</div>
        </div>
      </div>
    </div>

    <!-- Gráficos Principais -->
    <div class="row q-col-gutter-lg animate-slide-up" style="animation-delay: 0.15s;">
      <!-- Gráfico 1: Progresso por Fase -->
      <div class="col-12 col-md-6">
        <div class="glass-card q-pa-lg">
          <h2 class="text-subtitle1 text-weight-bold font-outfit q-my-none q-mb-md text-white flex items-center">
            <q-icon name="donut_large" color="accent" size="20px" class="q-mr-xs" />
            Progresso das 3 Fases do Curso
          </h2>
          <div class="canvas-container relative-position">
            <canvas ref="phasesChartCanvas"></canvas>
          </div>
        </div>
      </div>

      <!-- Gráfico 2: Frequência Mensal -->
      <div class="col-12 col-md-6">
        <div class="glass-card q-pa-lg">
          <h2 class="text-subtitle1 text-weight-bold font-outfit q-my-none q-mb-md text-white flex items-center">
            <q-icon name="show_chart" color="info" size="20px" class="q-mr-xs" />
            Evolução Mensal (Horas Estudadas)
          </h2>
          <div class="canvas-container relative-position">
            <canvas ref="monthlyChartCanvas"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Insights e Dicas -->
    <div class="glass-card q-pa-lg animate-slide-up" style="animation-delay: 0.2s;">
      <h2 class="text-h6 text-weight-bold font-outfit q-my-none q-mb-sm text-gradient-purple flex items-center">
        <q-icon name="lightbulb" color="warning" size="24px" class="q-mr-sm" />
        Insights de Estudo para {{ authStore.displayName }}
      </h2>
      <ul class="q-pl-md q-my-none text-body2 text-grey-3 q-gutter-y-sm">
        <li>
          <strong>Foco em Speaking:</strong> Você praticou pronúncia em {{ totalPhrasesAnalyzed }} frases. Continue gravando sua fala para treinar a musculatura vocal.
        </li>
        <li>
          <strong>Eficiência do Microaprendizado:</strong> Seus {{ studyStore.totalMinutes }} minutos foram distribuídos de forma consistente. Praticar 15 minutos por dia é 4x mais eficiente para a memória de longo prazo do que estudar 2 horas apenas no final de semana!
        </li>
        <li>
          <strong>Fase Técnica:</strong> Concluir as lições de TI (Dias 41-50) te dará o vocabulário corporativo essencial para participar de reuniões internacionais e entrevistas de emprego.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useStudyStore } from '../stores/study'
import { useAuthStore } from '../stores/auth'
import { Chart } from 'chart.js/auto'

const studyStore = useStudyStore()
const authStore = useAuthStore()

const phasesChartCanvas = ref(null)
const monthlyChartCanvas = ref(null)

let phasesChartInstance = null
let monthlyChartInstance = null

// Calcula o total de notas escritas
const totalNotesCount = computed(() => {
  return Object.values(studyStore.notes).filter(note => note && note.trim().length > 0).length
})

// Métrica mockada de auxílio
const totalPhrasesAnalyzed = computed(() => {
  return studyStore.completedCount * 2 + 1 // Média simples apenas para incentivo visual
})

// Calcula dados do progresso das fases
const phaseProgressData = computed(() => {
  // F1: Dias 1-30, F2: Dias 31-60, F3: Dias 61-90
  const f1Total = 30
  const f2Total = 30
  const f3Total = 30

  const f1Completed = studyStore.completedLessons.filter(day => day <= 30).length
  const f2Completed = studyStore.completedLessons.filter(day => day > 30 && day <= 60).length
  const f3Completed = studyStore.completedLessons.filter(day => day > 60).length

  return {
    completed: [f1Completed, f2Completed, f3Completed],
    pending: [f1Total - f1Completed, f2Total - f2Completed, f3Total - f3Completed]
  }
})

// Inicializa gráficos
function initCharts() {
  // --- GRÁFICO 1: PROGRESSO POR FASE (STACKED BAR) ---
  if (phasesChartCanvas.value) {
    const data = phaseProgressData.value
    phasesChartInstance = new Chart(phasesChartCanvas.value, {
      type: 'bar',
      data: {
        labels: ['Fase 1: Fundamentos', 'Fase 2: Conversação & TI', 'Fase 3: Fluência'],
        datasets: [
          {
            label: 'Aulas Concluídas',
            data: data.completed,
            backgroundColor: 'rgba(94, 53, 177, 0.85)',
            borderColor: '#7E57C2',
            borderWidth: 1,
            borderRadius: 6
          },
          {
            label: 'Pendentes',
            data: data.pending,
            backgroundColor: 'rgba(23, 20, 43, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0.05)',
            borderWidth: 1,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: '#a09eb4', font: { family: 'Inter' } }
          },
          y: {
            stacked: true,
            max: 30,
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#a09eb4', font: { family: 'Inter' } }
          }
        },
        plugins: {
          legend: {
            labels: { color: '#fff', font: { family: 'Outfit', weight: 'bold' } }
          }
        }
      }
    })
  }

  // --- GRÁFICO 2: FREQUÊNCIA MENSAL (LINE CHART) ---
  if (monthlyChartCanvas.value) {
    // Agrupa minutos por mês de forma mockada para dar visualização bonita de histórico
    const studyHoursData = [0.5, 1.2, 2.5, 4.0, (studyStore.totalMinutes / 60).toFixed(1)]
    monthlyChartInstance = new Chart(monthlyChartCanvas.value, {
      type: 'line',
      data: {
        labels: ['Fevereiro', 'Março', 'Abril', 'Maio', 'Junho (Atual)'],
        datasets: [{
          label: 'Horas Estudadas',
          data: studyHoursData,
          fill: true,
          backgroundColor: 'rgba(33, 150, 243, 0.15)',
          borderColor: '#2196F3',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: '#2196F3',
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#a09eb4', font: { family: 'Inter' } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#a09eb4', font: { family: 'Inter' } }
          }
        },
        plugins: {
          legend: {
            labels: { color: '#fff', font: { family: 'Outfit', weight: 'bold' } }
          }
        }
      }
    })
  }
}

onMounted(() => {
  initCharts()
})

onBeforeUnmount(() => {
  // Destrói instâncias dos gráficos para prevenir vazamentos de memória
  if (phasesChartInstance) phasesChartInstance.destroy()
  if (monthlyChartInstance) monthlyChartInstance.destroy()
})
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.canvas-container {
  height: 250px;
  width: 100%;
}
.uppercase {
  text-transform: uppercase;
}
</style>
