<template>
  <div class="q-gutter-y-lg">
    <!-- Cabeçalho -->
    <div class="row items-center justify-between q-col-gutter-sm animate-slide-up">
      <div class="col-12 col-sm-8">
        <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-gradient-purple flex items-center">
          <q-icon name="military_tech" class="q-mr-sm text-accent" />
          Minhas Conquistas
        </h1>
        <p class="text-caption text-grey-5 q-my-none">Conclua lições e acumule dias seguidos para liberar troféus exclusivos.</p>
      </div>

      <!-- Placar de Conquistas -->
      <div class="col-12 col-sm-4 flex justify-end items-center text-subtitle1 font-outfit text-weight-bold gt-xs">
        <span class="text-grey-4 q-mr-sm">Progresso:</span>
        <span class="text-gradient">{{ unlockedCount }} de {{ totalCount }} Desbloqueadas</span>
      </div>
    </div>

    <!-- Barra de Progresso visual -->
    <div class="glass-card q-pa-md animate-slide-up" style="animation-delay: 0.1s;">
      <div class="flex items-center justify-between text-caption text-grey-4 q-mb-xs">
        <span class="text-weight-bold uppercase font-outfit">Badges Conquistados</span>
        <span>{{ Math.round((unlockedCount / totalCount) * 100) }}% Concluído</span>
      </div>
      <q-linear-progress
        :value="unlockedCount / totalCount"
        color="accent"
        track-color="grey-9"
        class="rounded-borders"
        style="height: 10px;"
      />
    </div>

    <!-- Grid de Badges -->
    <div class="row q-col-gutter-md animate-slide-up" style="animation-delay: 0.15s;">
      <div
        v-for="ach in achievementsStore.achievementsList"
        :key="ach.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <!-- Badge Card -->
        <div
          :class="[
            'glass-card badge-card flex flex-column justify-between h-100 q-pa-lg text-center relative-position overflow-hidden',
            { 'badge-locked': !ach.unlocked }
          ]"
        >
          <!-- Brilho de fundo opcional para unlocked -->
          <div
            v-if="ach.unlocked"
            class="glow-effect"
            :style="`background: radial-gradient(circle, ${ach.color}15 0%, transparent 70%);`"
          ></div>

          <div>
            <!-- Ícone flutuante do Badge -->
            <div class="flex flex-center q-my-sm">
              <div
                class="badge-icon-wrap flex flex-center"
                :style="ach.unlocked ? `border-color: ${ach.color}; color: ${ach.color}; box-shadow: 0 0 16px ${ach.color}25;` : ''"
              >
                <q-icon :name="ach.unlocked ? ach.icon : 'lock'" size="32px" />
              </div>
            </div>

            <!-- Título do Badge -->
            <h3 class="text-subtitle1 text-weight-bold font-outfit q-my-xs" :class="ach.unlocked ? 'text-white' : 'text-grey-6'">
              {{ ach.title }}
            </h3>

            <!-- Descrição -->
            <p class="text-caption text-grey-5 q-mb-none q-px-sm">
              {{ ach.description }}
            </p>
          </div>

          <!-- Rodapé do Card: Data de desbloqueio ou Cadeado -->
          <div class="q-mt-lg">
            <q-badge
              v-if="ach.unlocked"
              color="grey-9"
              text-color="grey-3"
              class="q-py-xs q-px-md rounded-borders text-weight-bold text-caption uppercase"
            >
              Liberado em: {{ formatBrDate(ach.unlockedAt) }}
            </q-badge>
            <span v-else class="text-caption text-grey-7 uppercase text-weight-bold">
              Bloqueado
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAchievementsStore } from '../stores/achievements'

const achievementsStore = useAchievementsStore()

const totalCount = computed(() => achievementsStore.achievementsList.length)
const unlockedCount = computed(() => achievementsStore.achievementsList.filter(a => a.unlocked).length)

// Formata data sueca YYYY-MM-DD para DD/MM/YYYY
function formatBrDate(dateStr) {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
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

.badge-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  .glow-effect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
  }

  &:hover:not(.badge-locked) {
    transform: translateY(-4px);
    border-color: var(--accent);
  }
}

.badge-locked {
  opacity: 0.65;
  background: rgba(30, 25, 50, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.02) !important;
  
  .badge-icon-wrap {
    border-color: #2e264d;
    color: #4a3e7a;
    background: rgba(255, 255, 255, 0.01);
  }
}

.badge-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #5d518d;
  background: rgba(149, 117, 205, 0.03);
  color: #7c749b;
  transition: all 0.3s ease;
  z-index: 1;
}
</style>
