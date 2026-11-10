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

        <q-toolbar-title class="flex items-center text-brand no-wrap overflow-hidden">
          <q-avatar size="32px" class="q-mr-xs">
            <q-icon name="school" color="accent" size="24px" />
          </q-avatar>
          <span class="text-weight-bold text-gradient-purple font-outfit text-truncate" style="max-width: 160px;">English Study</span>
        </q-toolbar-title>

        <!-- Stats rápidos no Header -->
        <div class="flex items-center q-gutter-x-sm">
          <!-- Botão Dicionário Rápido no Header -->
          <q-btn
            flat
            round
            dense
            color="accent"
            icon="auto_stories"
            :to="{ name: 'dictionary' }"
          >
            <q-tooltip class="bg-grey-9 text-caption font-outfit">Dicionário Dev (270 Termos)</q-tooltip>
          </q-btn>

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
        <!-- Perfil / Avatar no topo da Drawer -->
        <div class="q-py-md">
          <q-avatar size="56px" color="deep-purple-9" text-color="white" class="shadow-4 text-h5 q-mb-sm pulse-glow">
            {{ authStore.userAvatar || '💻' }}
          </q-avatar>
          <div class="text-subtitle1 text-weight-bold font-outfit text-white">{{ authStore.fullDisplayName }}</div>
          <div class="text-caption text-accent text-weight-medium font-outfit text-truncate q-px-sm" style="max-width: 240px;">
            {{ authStore.jobTitle }}
          </div>
          <div class="text-caption text-grey-5 text-truncate q-px-sm" style="max-width: 240px;">
            {{ authStore.isAuthenticated ? authStore.userEmail : 'Modo Estudante Local' }}
          </div>
        </div>
        <q-separator dark class="full-width q-my-sm" />
      </div>

      <q-list class="q-px-sm">
        <q-item
          v-for="item in drawerMenuItems"
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
        v1.0.0 • {{ authStore.isAuthenticated ? 'Nuvem Ativa 🟢' : 'Offline First 🟡' }}
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
          v-for="item in mobileMenuItems"
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
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const studyStore = useStudyStore()
const settingsStore = useSettingsStore()
const achievementsStore = useAchievementsStore()
const authStore = useAuthStore()

const leftDrawerOpen = ref(false)
const activeTab = ref('dashboard')

// Itens do menu Desktop Lateral
const drawerMenuItems = [
  { label: 'Painel Geral', icon: 'dashboard', route: 'dashboard' },
  { label: 'Aulas diárias', icon: 'menu_book', route: 'lessons' },
  { label: 'Chamada de Vídeo IA', icon: 'videocam', route: 'video-call' },
  { label: 'Daily Scrum Simulator', icon: 'groups', route: 'daily-simulator' },
  { label: 'Dicionário Dev (270)', icon: 'auto_stories', route: 'dictionary' },
  { label: 'Minha Evolução', icon: 'bar_chart', route: 'statistics' },
  { label: 'Minhas Conquistas', icon: 'military_tech', route: 'achievements' },
  { label: 'Preferências', icon: 'settings', route: 'settings' }
]

// Itens da barra inferior Mobile (5 abas balanceadas)
const mobileMenuItems = [
  { labelMobile: 'Home', icon: 'dashboard', route: 'dashboard' },
  { labelMobile: 'Aulas', icon: 'menu_book', route: 'lessons' },
  { labelMobile: 'Daily', icon: 'groups', route: 'daily-simulator' },
  { labelMobile: 'Stats', icon: 'bar_chart', route: 'statistics' },
  { labelMobile: 'Ajustes', icon: 'settings', route: 'settings' }
]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function goToSettings() {
  router.push({ name: 'settings' })
}

onMounted(() => {
  // Inicializa os stores locais
  settingsStore.initSettings()
  studyStore.loadStudyData()
  achievementsStore.loadAchievements()
  
  // Inicializa conexão e sincronização com Supabase
  authStore.initAuth()
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
