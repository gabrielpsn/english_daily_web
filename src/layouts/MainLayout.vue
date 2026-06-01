<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header principal -->
    <q-header elevated class="q-py-xs">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="gt-xs text-brand"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="flex items-center text-brand">
          <q-avatar size="36px" class="q-mr-sm">
            <q-icon name="school" color="accent" size="28px" />
          </q-avatar>
          <span class="text-weight-bold text-gradient-purple font-outfit">English Study Pro</span>
        </q-toolbar-title>

        <!-- Stats rápidos no Header -->
        <div class="flex items-center q-gutter-x-md">
          <!-- Streak 🔥 -->
          <q-badge
            color="orange-10"
            text-color="white"
            class="q-py-xs q-px-sm text-weight-bold flex items-center shadow-2 cursor-pointer rounded-borders"
            @click="goToSettings"
          >
            <q-icon name="local_fire_department" size="18px" class="q-mr-xs text-amber animate-pulse" />
            <span>{{ studyStore.streak }} Dias</span>
          </q-badge>

          <!-- Progresso Geral % -->
          <div class="gt-xs flex items-center q-gutter-x-sm">
            <span class="text-caption text-grey-4">Progresso:</span>
            <span class="text-weight-bold text-accent">{{ studyStore.progress }}%</span>
            <q-linear-progress
              :value="studyStore.progress / 100"
              color="accent"
              track-color="grey-9"
              class="rounded-borders"
              style="width: 80px; height: 6px;"
            />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar Lateral (Desktop) -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="260"
      class="gt-xs bg-gradient-dark"
    >
      <div class="q-pa-md flex flex-column items-center q-gutter-y-md text-center">
        <!-- Logo Grande no topo da Drawer -->
        <div class="q-py-md">
          <q-icon name="workspace_premium" size="48px" color="accent" class="pulse-glow rounded-circle q-pa-sm" style="background: rgba(149, 117, 205, 0.1);" />
          <div class="text-h6 text-weight-bold font-outfit q-mt-sm">Gabriel</div>
          <div class="text-caption text-grey-5">Estudante de Inglês</div>
        </div>
        <q-separator dark class="full-width q-my-sm" />
      </div>

      <q-list class="q-px-sm">
        <q-item
          v-for="item in menuItems"
          :key="item.route"
          clickable
          :to="{ name: item.route }"
          active-class="active-nav-item"
          exact
          class="rounded-borders q-my-xs text-grey-4 text-weight-medium"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" size="22px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="absolute-bottom q-pa-md text-center text-caption text-grey-6 border-top">
        v1.0.0 • Offline First
      </div>
    </q-drawer>

    <!-- Bottom Navigation (Mobile) -->
    <q-footer class="lt-sm bg-gradient-dark" elevated>
      <q-tabs
        v-model="activeTab"
        indicator-color="transparent"
        active-color="accent"
        class="text-grey-4"
        align="justify"
        dense
      >
        <q-route-tab
          v-for="item in menuItems"
          :key="item.route"
          :to="{ name: item.route }"
          exact
          :icon="item.icon"
          :label="item.labelMobile"
        />
      </q-tabs>
    </q-footer>

    <!-- Conteúdo principal -->
    <q-page-container>
      <q-page class="q-pa-md q-pb-xl max-width-container animate-slide-up">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStudyStore } from '../stores/study'
import { useSettingsStore } from '../stores/settings'
import { useAchievementsStore } from '../stores/achievements'

const router = useRouter()
const studyStore = useStudyStore()
const settingsStore = useSettingsStore()
const achievementsStore = useAchievementsStore()

const leftDrawerOpen = ref(false)
const activeTab = ref('dashboard')

// Menu e abas
const menuItems = [
  { label: 'Painel Geral', labelMobile: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
  { label: 'Aulas diárias', labelMobile: 'Aulas', icon: 'menu_book', route: 'lessons' },
  { label: 'Minha Evolução', labelMobile: 'Estatísticas', icon: 'bar_chart', route: 'statistics' },
  { label: 'Minhas Conquistas', labelMobile: 'Badges', icon: 'military_tech', route: 'achievements' },
  { label: 'Preferências', labelMobile: 'Ajustes', icon: 'settings', route: 'settings' }
]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function goToSettings() {
  router.push({ name: 'settings' })
}

onMounted(() => {
  // Inicializa os stores
  settingsStore.initSettings()
  studyStore.loadStudyData()
  achievementsStore.loadAchievements()
})
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.max-width-container {
  max-width: 1200px;
  margin: 0 auto;
}
.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.rounded-circle {
  border-radius: 50%;
}
</style>
