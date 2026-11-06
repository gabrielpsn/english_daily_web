<template>
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
</template>

<script setup>
const props = defineProps({
  studyDates: {
    type: Array,
    default: () => []
  }
})

// Gera a data correspondente a uma coordenada do grid
function getDateFromGridCoords(weekIndex, dayIndex) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const dayOffsetFromEnd = (17 - weekIndex) * 7 + (7 - dayIndex)
  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() - dayOffsetFromEnd)
  return targetDate
}

// Retorna a classe CSS para colorir a caixa do grid
function getGridBoxClass(weekIndex, dayIndex) {
  const targetDate = getDateFromGridCoords(weekIndex, dayIndex)
  const dateStr = targetDate.toLocaleDateString('sv') // 'YYYY-MM-DD'
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (targetDate > today) return 'grid-future'

  const studied = props.studyDates.includes(dateStr)
  return studied ? 'bg-box-2' : 'bg-box-0'
}

// Retorna a mensagem de tooltip para a caixa do grid
function getGridBoxTooltip(weekIndex, dayIndex) {
  const targetDate = getDateFromGridCoords(weekIndex, dayIndex)
  const dateStr = targetDate.toLocaleDateString('sv')
  const dateBr = targetDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (targetDate > today) return `${dateBr} (Futuro)`

  const studied = props.studyDates.includes(dateStr)
  return studied 
    ? `${dateBr}: Dia Estudado! 🔥` 
    : `${dateBr}: Sem estudos registrados.`
}
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}

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
</style>
