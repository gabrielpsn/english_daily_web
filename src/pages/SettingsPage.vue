<template>
  <div class="q-gutter-y-lg max-width-settings">
    <!-- Cabeçalho -->
    <div class="animate-slide-up">
      <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-gradient-purple flex items-center">
        <q-icon name="settings" class="q-mr-sm text-accent" />
        Configurações e Preferências
      </h1>
      <p class="text-caption text-grey-5 q-my-none">Personalize o som de fala, sotaque de inglês e gerencie seus backups locais.</p>
    </div>

    <!-- Seção 0: Conta e Sincronização na Nuvem (Supabase) -->
    <div class="glass-card q-pa-lg animate-slide-up relative-position overflow-hidden" style="animation-delay: 0.05s;">
      <!-- Glowing glass border decoration -->
      <div class="absolute-top-right q-ma-sm text-caption text-grey-5 gt-xs">
        <q-icon name="cloud" size="16px" class="q-mr-xs" />
        Sincronização Cloud
      </div>

      <h2 class="text-h6 text-weight-bold font-outfit q-my-none q-mb-md text-white flex items-center">
        <q-icon :name="authStore.isAuthenticated ? 'cloud_done' : 'cloud_sync'" color="accent" size="22px" class="q-mr-sm" :class="{ 'animate-pulse': authStore.syncing }" />
        Sincronização & Conta
      </h2>

      <!-- Cenário A: Usuário Logado -->
      <div v-if="authStore.isAuthenticated" class="row q-col-gutter-md items-center">
        <div class="col-12 col-sm-7">
          <div class="row items-center q-gutter-x-md">
            <q-avatar size="56px" class="pulse-glow" style="background: rgba(149, 117, 205, 0.15);">
              <q-icon name="account_circle" size="48px" color="accent" />
            </q-avatar>
            <div>
              <div class="text-h6 text-weight-bold text-white font-outfit">{{ authStore.displayName }}</div>
              <div class="text-caption text-grey-4 flex items-center text-truncate" style="max-width: 240px;">
                <q-icon name="email" size="14px" class="q-mr-xs text-grey-5" />
                {{ authStore.userEmail }}
              </div>
            </div>
          </div>
          <div class="q-mt-md text-body2 text-grey-4">
            <span class="text-green-4 text-weight-bold flex items-center">
              <q-icon name="sync" size="16px" class="q-mr-xs animate-spin-slow" />
              Sincronização em Nuvem ativa e operacional!
            </span>
            <div class="text-caption text-grey-5 q-mt-xs">Seu progresso de estudos, anotações diárias e medalhas estão seguros no Supabase.</div>
          </div>
        </div>

        <div class="col-12 col-sm-5 flex flex-column q-gutter-y-sm justify-center">
          <div class="row q-col-gutter-xs">
            <div class="col-6">
              <q-btn
                outline
                color="info"
                icon="cloud_download"
                label="Baixar Cloud"
                class="font-outfit text-weight-bold full-width rounded-borders text-xs"
                :loading="authStore.syncing"
                @click="forceSyncDown"
              >
                <q-tooltip>Sobrescrever dados locais com os dados salvos na Nuvem</q-tooltip>
              </q-btn>
            </div>
            <div class="col-6">
              <q-btn
                outline
                color="accent"
                icon="cloud_upload"
                label="Subir Local"
                class="font-outfit text-weight-bold full-width rounded-borders text-xs"
                :loading="authStore.syncing"
                @click="forceSyncUp"
              >
                <q-tooltip>Subir o progresso deste navegador para consolidar na Nuvem</q-tooltip>
              </q-btn>
            </div>
          </div>

          <q-btn
            unelevated
            color="negative"
            icon="logout"
            label="Desconectar Conta"
            class="font-outfit text-weight-bold full-width rounded-borders q-mt-xs"
            :loading="authStore.loading"
            @click="handleLogout"
          />
        </div>
      </div>

      <!-- Cenário B: Usuário Deslogado -->
      <div v-else>
        <p class="text-body2 text-grey-4 q-mb-md">
          Conecte sua conta para habilitar o backup automático na nuvem. Estude offline de forma fluida e sincronize seu progresso, anotações e medalhas entre todos os seus dispositivos.
        </p>

        <!-- Abas Login / Cadastro -->
        <q-tabs
          v-model="authTab"
          dense
          class="text-grey-4 q-mb-md rounded-borders glass-card-flat"
          active-color="accent"
          indicator-color="accent"
          align="left"
        >
          <q-tab name="login" label="Entrar na Conta" icon="login" class="font-outfit" />
          <q-tab name="register" label="Criar Nova Conta" icon="person_add" class="font-outfit" />
        </q-tabs>

        <!-- Formulários de Auth -->
        <q-form @submit.prevent="authTab === 'login' ? handleLogin() : handleRegister()" class="q-gutter-y-sm">
          <!-- Campo Nome (Somente Cadastro) -->
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <q-input
              v-if="authTab === 'register'"
              v-model="fullName"
              filled
              dark
              label="Nome Completo"
              class="custom-input"
              required
            >
              <template v-slot:prepend>
                <q-icon name="person" color="accent" />
              </template>
            </q-input>
          </transition>

          <!-- E-mail -->
          <q-input
            v-model="email"
            filled
            dark
            type="email"
            label="Endereço de E-mail"
            class="custom-input"
            required
          >
            <template v-slot:prepend>
              <q-icon name="mail" color="accent" />
            </template>
          </q-input>

          <!-- Senha -->
          <q-input
            v-model="password"
            filled
            dark
            type="password"
            label="Senha de Acesso"
            class="custom-input"
            required
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="accent" />
            </template>
          </q-input>

          <!-- Botões de Ação -->
          <div class="row justify-end q-mt-md">
            <q-btn
              type="submit"
              unelevated
              color="accent"
              :label="authTab === 'login' ? 'Entrar Agora' : 'Cadastrar Conta'"
              :icon="authTab === 'login' ? 'login' : 'assignment_ind'"
              class="font-outfit text-weight-bold rounded-borders q-px-lg pulse-glow"
              :loading="authStore.loading"
            />
          </div>
        </q-form>
      </div>
    </div>

    <!-- Seção 1: Aparência e Preferências -->
    <div class="glass-card q-pa-lg animate-slide-up" style="animation-delay: 0.1s;">
      <h2 class="text-h6 text-weight-bold font-outfit q-my-none q-mb-md text-white flex items-center">
        <q-icon name="display_settings" color="accent" size="22px" class="q-mr-sm" />
        Preferências Globais
      </h2>

      <div class="q-gutter-y-md">
        <!-- Modo Escuro -->
        <div class="row items-center justify-between">
          <div>
            <div class="text-body1 text-weight-medium">Modo Escuro (Dark Mode)</div>
            <div class="text-caption text-grey-5">Ajusta o contraste para leitura noturna confortável.</div>
          </div>
          <q-toggle
            :model-value="settingsStore.theme === 'dark'"
            color="accent"
            @update:model-value="settingsStore.toggleTheme"
          />
        </div>
        
        <q-separator dark />

        <!-- Efeitos de som -->
        <div class="row items-center justify-between">
          <div>
            <div class="text-body1 text-weight-medium">Efeitos de Som e Fala (TTS)</div>
            <div class="text-caption text-grey-5">Ativa ou desativa a pronúncia falada das palavras.</div>
          </div>
          <q-toggle
            v-model="settingsStore.speechEnabled"
            color="accent"
            @update:model-value="settingsStore.saveSettings"
          />
        </div>

        <q-separator dark />

        <!-- Sotaque Padrão -->
        <div class="row items-center justify-between">
          <div>
            <div class="text-body1 text-weight-medium">Sotaque Padrão do Inglês</div>
            <div class="text-caption text-grey-5">Escolha a nacionalidade da voz sintética de escuta.</div>
          </div>
          <q-btn-toggle
            :model-value="settingsStore.accent"
            toggle-color="accent"
            text-color="grey-4"
            toggle-text-color="white"
            flat
            dense
            class="glass-card-flat q-pa-xs rounded-borders"
            :options="[
              { label: 'US (Americano)', value: 'US' },
              { label: 'UK (Britânico)', value: 'UK' },
              { label: 'AU (Australiano)', value: 'AU' }
            ]"
            @update:model-value="settingsStore.setAccent"
          />
        </div>

        <q-separator dark />

        <!-- Velocidade de Fala (TTS) -->
        <div>
          <div class="row items-center justify-between q-mb-sm">
            <div>
              <div class="text-body1 text-weight-medium">Velocidade da Voz (Pitch/Speed)</div>
              <div class="text-caption text-grey-5">Ajuste o quão rápido a pronúncia do inglês será dita.</div>
            </div>
            <q-badge color="accent" class="text-weight-bold">{{ settingsStore.speed }}x</q-badge>
          </div>
          <q-slider
            v-model="settingsStore.speed"
            :min="0.5"
            :max="1.5"
            :step="0.05"
            label
            color="accent"
            @update:model-value="settingsStore.saveSettings"
          />
        </div>
      </div>
    </div>

    <!-- Seção 2: Backups e Exportações -->
    <div class="glass-card q-pa-lg animate-slide-up" style="animation-delay: 0.15s;">
      <h2 class="text-h6 text-weight-bold font-outfit q-my-none q-mb-md text-white flex items-center">
        <q-icon name="backup" color="info" size="22px" class="q-mr-sm" />
        Gestão de Dados & Backup Local
      </h2>

      <div class="q-gutter-y-md">
        <!-- Relatórios em PDF/CSV -->
        <div>
          <div class="text-body1 text-weight-medium q-mb-sm">Relatórios e Planilhas</div>
          <div class="text-caption text-grey-5 q-mb-md">Exporte relatórios em PDF com suas anotações ou planilhas de estudo em CSV.</div>
          <div class="flex q-gutter-md">
            <!-- PDF -->
            <q-btn
              outline
              color="accent"
              icon="picture_as_pdf"
              label="Baixar Relatório PDF"
              class="font-outfit text-weight-bold rounded-borders"
              @click="downloadPDF"
            />
            <!-- CSV -->
            <q-btn
              outline
              color="info"
              icon="grid_on"
              label="Baixar Planilha CSV"
              class="font-outfit text-weight-bold rounded-borders"
              @click="downloadCSV"
            />
          </div>
        </div>

        <q-separator dark />

        <!-- Salvar / Restaurar Backups JSON -->
        <div>
          <div class="text-body1 text-weight-medium q-mb-sm">Backup do Progresso (JSON)</div>
          <div class="text-caption text-grey-5 q-mb-md">Salve um backup em seu disco rígido para restaurar seu progresso em outro navegador.</div>
          
          <div class="row q-col-gutter-md items-center">
            <div class="col-12 col-sm-6">
              <q-btn
                unelevated
                color="accent"
                icon="download"
                label="Exportar Backup JSON"
                class="font-outfit text-weight-bold full-width rounded-borders"
                @click="downloadJSONBackup"
              />
            </div>
            
            <div class="col-12 col-sm-6">
              <!-- Upload do JSON -->
              <q-file
                v-model="backupFile"
                filled
                dark
                label="Restaurar Backup (.json)"
                accept=".json"
                class="custom-input full-width"
                @update:model-value="onRestoreBackup"
              >
                <template v-slot:prepend>
                  <q-icon name="upload" color="accent" />
                </template>
              </q-file>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção 3: Zona de Perigo -->
    <div class="glass-card border-danger q-pa-lg animate-slide-up" style="animation-delay: 0.2s;">
      <h2 class="text-h6 text-weight-bold font-outfit q-my-none q-mb-md text-red flex items-center">
        <q-icon name="warning" color="negative" size="22px" class="q-mr-sm" />
        Zona de Perigo
      </h2>

      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-sm-8">
          <div class="text-body1 text-weight-bold text-red">Redefinir Todos os Dados</div>
          <div class="text-caption text-grey-5">
            Limpará permanentemente seu histórico de aulas concluídas, anotações diárias, streak 🔥 acumulado e todas as suas configurações do navegador. Esta operação é irreversível.
          </div>
        </div>
        <div class="col-12 col-sm-4 flex justify-end">
          <q-btn
            unelevated
            color="negative"
            icon="delete_forever"
            label="Redefinir Progresso"
            class="font-outfit text-weight-bold pulse-glow rounded-borders"
            @click="confirmResetData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStudyStore } from '../stores/study'
import { useSettingsStore } from '../stores/settings'
import { useAchievementsStore } from '../stores/achievements'
import { useAuthStore } from '../stores/auth'
import exportService from '../services/export'
import { Notify, Dialog } from 'quasar'

const studyStore = useStudyStore()
const settingsStore = useSettingsStore()
const achievementsStore = useAchievementsStore()
const authStore = useAuthStore()

const backupFile = ref(null)

// Estados de Autenticação local
const authTab = ref('login')
const email = ref('')
const password = ref('')
const fullName = ref('')

async function handleLogin() {
  if (!email.value || !password.value) {
    Notify.create({ message: 'Preencha todos os campos obrigatórios!', color: 'warning', position: 'top' })
    return
  }
  try {
    await authStore.login(email.value, password.value)
    email.value = ''
    password.value = ''
  } catch (err) {
    // Erros já notificados no store
  }
}

async function handleRegister() {
  if (!email.value || !password.value || !fullName.value) {
    Notify.create({ message: 'Por favor, preencha todos os campos para se cadastrar.', color: 'warning', position: 'top' })
    return
  }
  try {
    await authStore.register(email.value, password.value, fullName.value)
    email.value = ''
    password.value = ''
    fullName.value = ''
    authTab.value = 'login'
  } catch (err) {
    // Erros já notificados no store
  }
}

async function handleLogout() {
  Dialog.create({
    title: 'Desconectar Conta',
    message: 'Tem certeza de que deseja desconectar? Seu progresso continuará salvo no banco local deste navegador.',
    ok: { label: 'Sim, Sair', color: 'negative', flat: false, unelevated: true },
    cancel: { label: 'Cancelar', color: 'grey-4', flat: true },
    dark: true
  }).onOk(() => {
    authStore.logout()
  })
}

async function forceSyncUp() {
  await authStore.syncToCloud()
}

async function forceSyncDown() {
  Dialog.create({
    title: 'Baixar dados da Nuvem',
    message: 'ATENÇÃO: Isso irá substituir todas as suas lições concluídas e anotações deste navegador com os dados salvos na sua conta da nuvem. Deseja prosseguir?',
    ok: { label: 'Sim, Baixar', color: 'info', unelevated: true },
    cancel: { label: 'Cancelar', color: 'grey-4', flat: true },
    dark: true
  }).onOk(async () => {
    await authStore.syncFromCloud()
  })
}

// Exporta o relatório completo em PDF
function downloadPDF() {
  const stats = {
    progress: studyStore.progress,
    completedCount: studyStore.completedCount,
    streak: studyStore.streak,
    totalMinutes: studyStore.totalMinutes,
    notes: studyStore.notes,
    completedLessons: studyStore.completedLessons,
    userName: authStore.displayName
  }

  const success = exportService.exportToPDF(stats)
  if (success) {
    Notify.create({
      message: 'Relatório PDF gerado com sucesso!',
      color: 'positive',
      icon: 'file_download'
    })
  }
}

// Exporta a planilha em CSV
function downloadCSV() {
  const success = exportService.exportToCSV(studyStore.completedLessons, studyStore.notes)
  if (success) {
    Notify.create({
      message: 'Planilha CSV exportada com sucesso!',
      color: 'positive',
      icon: 'file_download'
    })
  }
}

// Faz o download do backup JSON
function downloadJSONBackup() {
  const backupData = {
    completedLessons: studyStore.completedLessons,
    notes: studyStore.notes,
    studyDates: studyStore.studyDates,
    streak: studyStore.streak,
    totalMinutes: studyStore.totalMinutes,
    achievements: achievementsStore.achievementsList
      .filter(a => a.unlocked)
      .map(a => ({ id: a.id, unlockedAt: a.unlockedAt })),
    settings: {
      theme: settingsStore.theme,
      notifications: settingsStore.notifications,
      speechEnabled: settingsStore.speechEnabled,
      voiceRecognitionEnabled: settingsStore.voiceRecognitionEnabled,
      accent: settingsStore.accent,
      voiceName: settingsStore.voiceName,
      speed: settingsStore.speed
    }
  }

  const success = exportService.exportToJSON(backupData)
  if (success) {
    Notify.create({
      message: 'Backup do progresso baixado com sucesso!',
      color: 'positive',
      icon: 'backup'
    })
  }
}

// Restaura o progresso a partir de upload JSON
function onRestoreBackup(file) {
  if (!file) return

  exportService.importFromJSON(file)
    .then(parsedData => {
      // Aplica as patches de dados nos stores
      if (parsedData.completedLessons) studyStore.completedLessons = parsedData.completedLessons
      if (parsedData.notes) studyStore.notes = parsedData.notes
      if (parsedData.studyDates) studyStore.studyDates = parsedData.studyDates
      if (parsedData.streak) studyStore.streak = parsedData.streak
      if (parsedData.totalMinutes) studyStore.totalMinutes = parsedData.totalMinutes
      
      // Salva de imediato
      studyStore.saveStudyData()

      // Aplica conquistas
      if (parsedData.achievements) {
        achievementsStore.resetAchievements()
        parsedData.achievements.forEach(savedAch => {
          const ach = achievementsStore.achievementsList.find(a => a.id === savedAch.id)
          if (ach) {
            ach.unlocked = true
            ach.unlockedAt = savedAch.unlockedAt
          }
        })
        achievementsStore.saveAchievements()
      }

      // Aplica configurações
      if (parsedData.settings) {
        settingsStore.$patch(parsedData.settings)
        settingsStore.saveSettings()
        settingsStore.initSettings()
      }

      Notify.create({
        message: 'Progresso restaurado com sucesso!',
        caption: 'Seus dados foram recarregados com base no backup.',
        color: 'positive',
        icon: 'cloud_done',
        timeout: 5000
      })

      // Limpa input
      backupFile.value = null
    })
    .catch(err => {
      Notify.create({
        message: 'Falha ao restaurar backup',
        caption: err.message,
        color: 'negative',
        icon: 'error_outline',
        timeout: 5000
      })
      backupFile.value = null
    })
}

// Confirma redefinição completa de dados (Double confirmation)
function confirmResetData() {
  // Caixa de diálogo nativa rápida do Quasar
  Dialog.create({
    title: '⚠️ Redefinição Crítica',
    message: 'Você tem certeza ABSOLUTA de que deseja redefinir o seu progresso? Todas as lições concluídas, anotações diárias e o seu streak ativo serão APAGADOS para sempre.',
    ok: {
      label: 'Sim, Apagar Tudo',
      color: 'negative',
      flat: false,
      unelevated: true
    },
    cancel: {
      label: 'Cancelar',
      color: 'grey-4',
      flat: true
    },
    dark: true,
    persistent: true
  }).onOk(() => {
    // Apaga stores e reconfigura
    studyStore.resetAllData()
    achievementsStore.resetAchievements()
    settingsStore.$patch({
      theme: 'dark',
      notifications: true,
      speechEnabled: true,
      voiceRecognitionEnabled: true,
      accent: 'US',
      voiceName: '',
      speed: 0.95
    })
    settingsStore.saveSettings()
    settingsStore.initSettings()

    Notify.create({
      message: 'Todos os seus dados foram redefinidos para o padrão.',
      color: 'info',
      icon: 'delete_sweep',
      position: 'top',
      timeout: 5000
    })
  })
}
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.max-width-settings {
  max-width: 800px;
  margin: 0 auto;
}
.border-danger {
  border: 1px solid rgba(229, 57, 53, 0.25);
  background: rgba(229, 57, 53, 0.02) !important;
}
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.glass-card-flat {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}
.text-xs {
  font-size: 11px;
}
</style>
