<template>
  <div class="q-gutter-y-lg max-width-container">
    <!-- Cabeçalho da Simulação -->
    <div class="row items-center justify-between q-col-gutter-sm animate-slide-up">
      <div class="col-12 col-sm-8 flex items-center q-gutter-x-sm">
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          color="grey-4"
          :to="{ name: 'dashboard' }"
        />
        <div>
          <div class="text-caption text-accent text-weight-bold uppercase font-outfit">
            Simulador de Prática Real • Ágil & Remoto
          </div>
          <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-white">
            Daily Scrum Simulator 🚀
          </h1>
        </div>
      </div>

      <!-- Badge de Histórico de Simulações -->
      <div class="col-12 col-sm-4 flex justify-end">
        <q-badge
          color="deep-purple-9"
          text-color="white"
          class="font-outfit text-weight-bold q-py-xs q-px-md rounded-borders shadow-2"
        >
          <q-icon name="groups" size="16px" class="q-mr-xs text-purple-2" />
          <span>{{ studyStore.scrumSessionsCount }} reuniões praticadas</span>
        </q-badge>
      </div>
    </div>

    <!-- ESTADO 0: Tela de Boas-Vindas & Briefing da Daily -->
    <div v-if="currentStep === 0" class="glass-card q-pa-xl text-center animate-slide-up">
      <div class="q-mb-md flex justify-center">
        <div class="avatar-halo">
          <q-avatar size="90px" color="accent" text-color="white" class="font-outfit text-weight-bold shadow-6">
            <q-icon name="support_agent" size="50px" />
          </q-avatar>
        </div>
      </div>

      <div class="text-caption text-accent text-weight-bold uppercase font-outfit q-mb-xs">
        Seu Tech Lead / Scrum Master
      </div>
      <h2 class="text-h4 text-weight-bold font-outfit q-my-xs text-white">
        Conheça o Alex!
      </h2>
      <p class="text-body1 text-grey-3 max-w-600 q-mx-auto q-mb-lg">
        Alex vai conduzir o standup de hoje do seu time internacional. Ele fará as 3 perguntas clássicas da metodologia ágil. Responda em inglês usando sua voz ou os templates práticos.
      </p>

      <!-- Regras de Ouro de uma Daily de Alta Performance -->
      <div class="row q-col-gutter-md text-left q-mb-xl max-w-800 q-mx-auto">
        <div class="col-12 col-md-4">
          <div class="glass-card-flat q-pa-md h-100 border-all">
            <div class="flex items-center text-accent text-weight-bold font-outfit q-mb-xs">
              <q-icon name="history" size="18px" class="q-mr-xs" />
              1. Yesterday
            </div>
            <div class="text-caption text-grey-4">
              O que você concluiu ou avançou ontem (use verbos no passado: <em>worked, fixed, merged</em>).
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="glass-card-flat q-pa-md h-100 border-all">
            <div class="flex items-center text-warning text-weight-bold font-outfit q-mb-xs">
              <q-icon name="today" size="18px" class="q-mr-xs" />
              2. Today
            </div>
            <div class="text-caption text-grey-4">
              Seu foco de hoje (use intenção ou futuro: <em>planning to, going to wrap up, will deploy</em>).
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="glass-card-flat q-pa-md h-100 border-all">
            <div class="flex items-center text-positive text-weight-bold font-outfit q-mb-xs">
              <q-icon name="block" size="18px" class="q-mr-xs" />
              3. Blockers
            </div>
            <div class="text-caption text-grey-4">
              Impedimentos reais ou diga que está tudo tranquilo: <em>"No blockers on my end!"</em>.
            </div>
          </div>
        </div>
      </div>

      <!-- Botão de Iniciar Chamada -->
      <q-btn
        unelevated
        size="lg"
        color="accent"
        icon="call"
        label="Entrar na Daily Standup (2 Min)"
        class="font-outfit text-weight-bold pulse-glow q-py-sm q-px-xl rounded-borders full-width-mobile"
        @click="startScrumSession"
      />
    </div>

    <!-- ESTADO 1, 2, 3: Chamada Interativa em Andamento -->
    <div v-else-if="currentStep >= 1 && currentStep <= 3" class="q-gutter-y-md animate-fade-in">
      <!-- Barra Superior da Reunião (Status da Chamada Virtual) -->
      <div class="glass-card-flat q-pa-md rounded-borders border-all flex items-center justify-between">
        <div class="flex items-center q-gutter-x-sm">
          <div class="online-indicator"></div>
          <span class="text-caption text-weight-bold text-white font-outfit">
            Daily Standup • Em Andamento
          </span>
          <q-badge color="dark" text-color="grey-4" class="font-outfit text-xs border-all">
            Pergunta {{ currentStep }} de 3: {{ stepTitles[currentStep] }}
          </q-badge>
        </div>

        <!-- Cronômetro da Reunião -->
        <div class="flex items-center text-caption font-mono text-weight-bold text-grey-3">
          <q-icon name="timer" size="16px" class="q-mr-xs text-accent" />
          <span>{{ formatSeconds(sessionSeconds) }}</span>
        </div>
      </div>

      <!-- Card do Scrum Master (Alex Falando) -->
      <div class="glass-card q-pa-lg border-all relative-position overflow-hidden" :class="{ 'scrum-speaking': isBotSpeaking }">
        <div class="row items-center q-col-gutter-md">
          <div class="col-auto">
            <q-avatar size="64px" color="accent" text-color="white" class="shadow-4">
              <q-icon name="support_agent" size="36px" />
            </q-avatar>
          </div>

          <div class="col">
            <div class="flex items-center justify-between">
              <div class="text-subtitle2 font-outfit text-accent text-weight-bold uppercase">
                Alex (Tech Lead)
              </div>
              <!-- Botão Ouvir Novamente Pergunta -->
              <q-btn
                flat
                round
                dense
                size="sm"
                color="grey-4"
                icon="volume_up"
                :loading="isBotSpeaking"
                @click="speakCurrentBotPrompt"
              >
                <q-tooltip class="bg-grey-9 text-caption">Ouvir pergunta novamente</q-tooltip>
              </q-btn>
            </div>

            <!-- Fala do Bot em Destaque -->
            <div class="text-h6 text-weight-bold text-white font-outfit q-my-xs">
              "{{ currentBotQuestion.text }}"
            </div>
            <div class="text-caption text-grey-4 italic">
              {{ currentBotQuestion.translation }}
            </div>
          </div>
        </div>

        <!-- Ondas sonoras do Bot enquanto fala -->
        <div v-if="isBotSpeaking" class="speaking-wave-bar flex items-center justify-center q-gutter-x-xs q-mt-md">
          <div class="wave wave-1"></div>
          <div class="wave wave-2"></div>
          <div class="wave wave-3"></div>
          <div class="wave wave-4"></div>
          <div class="wave wave-5"></div>
        </div>
      </div>

      <!-- Card de Resposta do Desenvolvedor (Sua Vez de Falar) -->
      <div class="glass-card q-pa-lg border-all">
        <div class="row items-center justify-between q-mb-sm">
          <div class="text-subtitle2 text-weight-bold font-outfit text-warning uppercase flex items-center">
            <q-icon name="mic" size="18px" class="q-mr-xs" />
            <span>Sua Resposta: {{ stepTitles[currentStep] }}</span>
          </div>

          <div class="flex items-center q-gutter-x-xs">
            <span class="text-caption text-grey-5 font-outfit">Fale ao microfone ou edite o texto</span>
          </div>
        </div>

        <!-- Editor / Transcrição da Fala -->
        <q-input
          v-model="userAnswers[currentStep]"
          type="textarea"
          filled
          dark
          rows="3"
          :placeholder="currentStepPlaceholder"
          class="custom-input full-width q-mb-md font-outfit text-body1"
        />

        <!-- Chips com Templates Reais de Desenvolvedores -->
        <div class="q-mb-lg">
          <div class="text-caption text-grey-5 font-outfit text-weight-bold uppercase q-mb-xs">
            Templates de Engenheiro (clique para preencher ou se inspirar):
          </div>
          <div class="flex q-gutter-xs">
            <q-chip
              v-for="(tpl, tplIdx) in currentTemplates"
              :key="tplIdx"
              clickable
              outline
              color="accent"
              text-color="white"
              class="font-outfit text-caption cursor-pointer template-chip"
              @click="applyTemplate(tpl.en)"
            >
              <q-icon name="add_comment" size="14px" class="q-mr-xs" />
              <span>{{ tpl.label }}</span>
              <q-tooltip class="bg-grey-9 text-caption max-w-400">
                <div class="text-weight-bold">{{ tpl.en }}</div>
                <div class="text-grey-4 italic q-mt-xs">{{ tpl.pt }}</div>
              </q-tooltip>
            </q-chip>
          </div>
        </div>

        <!-- Botões de Ação: Microfone e Avançar -->
        <div class="row items-center justify-between q-col-gutter-sm">
          <div class="col-12 col-sm-auto">
            <!-- Botão Falar (STT) -->
            <q-btn
              unelevated
              :color="isListening ? 'negative' : 'deep-purple-8'"
              :icon="isListening ? 'mic_off' : 'mic'"
              :label="isListening ? 'Parar Escuta' : 'Gravar Minha Resposta'"
              class="font-outfit text-weight-bold rounded-borders pulse-glow full-width"
              @click="toggleListening"
            />
            <div v-if="isListening" class="text-caption text-red-4 font-outfit text-weight-bold animate-pulse q-mt-xs text-center">
              Ouvindo sua fala...
            </div>
          </div>

          <div class="col-12 col-sm-auto">
            <q-btn
              unelevated
              color="accent"
              icon-right="arrow_forward"
              :label="currentStep === 3 ? 'Finalizar Meu Standup' : 'Confirmar & Próxima'"
              :disable="!userAnswers[currentStep] || !userAnswers[currentStep].trim()"
              class="font-outfit text-weight-bold rounded-borders q-py-sm full-width"
              @click="submitCurrentAnswer"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ESTADO 4: Standup Concluído com Sucesso! Relatório & Slack Card -->
    <div v-else-if="currentStep === 4" class="glass-card q-pa-xl text-center animate-slide-up">
      <div class="q-mb-md flex justify-center">
        <q-icon name="verified" size="80px" color="positive" class="pulse-glow" />
      </div>

      <div class="text-caption text-positive text-weight-bold uppercase font-outfit">
        Reunião Finalizada com Sucesso!
      </div>
      <h2 class="text-h4 text-weight-bold font-outfit q-my-xs text-white">
        Excelente Standup, {{ authStore.displayName }}! 🎉
      </h2>
      <p class="text-body1 text-grey-3 max-w-600 q-mx-auto q-mb-lg">
        Você compartilhou seu progresso de forma clara, técnica e objetiva em <strong>{{ formatSeconds(sessionSeconds) }}</strong> (abaixo do teto ágil de 2 minutos).
      </p>

      <!-- Card Formatado para Copiar para o Slack / Teams do Trabalho -->
      <div class="glass-card-flat q-pa-lg text-left rounded-borders border-all max-w-800 q-mx-auto q-mb-xl">
        <div class="row items-center justify-between q-mb-md border-bottom q-pb-sm">
          <div class="flex items-center text-subtitle1 text-weight-bold font-outfit text-white">
            <q-icon name="content_paste" size="20px" class="q-mr-xs text-accent" />
            <span>Seu Status Formatado (Slack / Teams / Discord)</span>
          </div>

          <q-btn
            outline
            dense
            color="accent"
            icon="copy_all"
            label="Copiar Texto"
            class="font-outfit text-caption text-weight-bold"
            @click="copySlackFormat"
          />
        </div>

        <div class="slack-preview q-pa-md rounded-borders font-mono text-caption text-grey-2 bg-dark">
          <div class="text-weight-bold text-accent q-mb-xs">Daily Standup Update • {{ authStore.displayName }}</div>
          <div class="q-mb-xs"><strong class="text-purple-3">• Yesterday:</strong> {{ userAnswers[1] }}</div>
          <div class="q-mb-xs"><strong class="text-warning">• Today:</strong> {{ userAnswers[2] }}</div>
          <div><strong class="text-positive">• Blockers:</strong> {{ userAnswers[3] }}</div>
        </div>
      </div>

      <!-- Checklist de Conquistas Ágeis Alcançadas -->
      <div class="row q-col-gutter-md text-left max-w-800 q-mx-auto q-mb-xl">
        <div class="col-12 col-md-4">
          <div class="glass-card-flat q-pa-md rounded-borders border-all">
            <div class="flex items-center text-positive text-weight-bold font-outfit q-mb-xs">
              <q-icon name="check_circle" size="18px" class="q-mr-xs" />
              Tempo Otimizado
            </div>
            <div class="text-caption text-grey-4">
              {{ sessionSeconds <= 90 ? 'Menos de 90s! Direto ao ponto como os gringos valorizam.' : 'Concluído em tempo razoável para a equipe.' }}
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="glass-card-flat q-pa-md rounded-borders border-all">
            <div class="flex items-center text-positive text-weight-bold font-outfit q-mb-xs">
              <q-icon name="check_circle" size="18px" class="q-mr-xs" />
              Verbos no Passado
            </div>
            <div class="text-caption text-grey-4">
              Uso correto de pretérito perfeito ao detalhar as entregas anteriores.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="glass-card-flat q-pa-md rounded-borders border-all">
            <div class="flex items-center text-positive text-weight-bold font-outfit q-mb-xs">
              <q-icon name="check_circle" size="18px" class="q-mr-xs" />
              Transparência de Bloqueios
            </div>
            <div class="text-caption text-grey-4">
              Comunicação proativa de impedimentos para evitar atrasos no sprint.
            </div>
          </div>
        </div>
      </div>

      <!-- Ações de Saída -->
      <div class="flex justify-center items-center q-gutter-x-md">
        <q-btn
          outline
          color="grey-4"
          icon="refresh"
          label="Praticar Outra Daily"
          class="font-outfit text-weight-bold rounded-borders q-py-sm q-px-lg"
          @click="startScrumSession"
        />
        <q-btn
          unelevated
          color="accent"
          icon="dashboard"
          label="Voltar ao Dashboard"
          class="font-outfit text-weight-bold rounded-borders q-py-sm q-px-lg pulse-glow"
          :to="{ name: 'dashboard' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useStudyStore } from '../stores/study'
import { useSettingsStore } from '../stores/settings'
import { useAuthStore } from '../stores/auth'
import { speechService } from '../services/speech'
import { Notify } from 'quasar'
import confetti from 'canvas-confetti'

const studyStore = useStudyStore()
const settingsStore = useSettingsStore()
const authStore = useAuthStore()

// Etapas: 0 = Briefing, 1 = Yesterday, 2 = Today, 3 = Blockers, 4 = Concluído
const currentStep = ref(0)
const isBotSpeaking = ref(false)
const isListening = ref(false)

// Cronômetro da reunião
const sessionSeconds = ref(0)
let sessionTimer = null

// Respostas do usuário por etapa
const userAnswers = ref({
  1: '', // Yesterday
  2: '', // Today
  3: ''  // Blockers
})

const stepTitles = {
  1: 'Yesterday (O que você fez ontem)',
  2: 'Today (Seu plano para hoje)',
  3: 'Blockers (Algum impedimento?)'
}

// Perguntas faladas pelo Alex (Scrum Master)
const botQuestions = {
  1: {
    text: `Good morning everyone! Let's get started. ${authStore.displayName}, what did you work on yesterday?`,
    translation: 'Bom dia a todos! Vamos começar. O que você trabalhou ontem?'
  },
  2: {
    text: 'Great update on yesterday! And what are you planning to tackle today?',
    translation: 'Ótima atualização! E o que você está planejando encarar hoje?'
  },
  3: {
    text: 'Sounds like a solid plan. Are you facing any blockers or need help from anyone?',
    translation: 'Parece um plano sólido. Você está enfrentando algum bloqueio ou precisa de ajuda?'
  }
}

// Templates práticos de engenharia para cada etapa
const templatesByStep = {
  1: [
    {
      label: 'Pull Request & Auth',
      en: 'Yesterday, I worked on the authentication flow and opened a pull request for review.',
      pt: 'Ontem trabalhei no fluxo de autenticação e abri um pull request para revisão.'
    },
    {
      label: 'Bugfix & Testes',
      en: 'I investigated the performance bug in the database query and fixed the slow response time.',
      pt: 'Investiguei o bug de performance na query do banco e corrigi a lentidão.'
    },
    {
      label: 'Pair Programming & CI/CD',
      en: 'I wrapped up the unit test suite for the payment service and paired with the DevOps engineer on our pipeline.',
      pt: 'Finalizei a suíte de testes unitários do serviço de pagamentos e fiz pareamento com o engenheiro de DevOps no pipeline.'
    }
  ],
  2: [
    {
      label: 'Endereçar Code Review',
      en: 'Today, I plan to address the code review feedback on my PR and start working on the new endpoint.',
      pt: 'Hoje pretendo resolver os feedbacks do code review no meu PR e começar a trabalhar no novo endpoint.'
    },
    {
      label: 'Refatoração & Testes',
      en: "I'm going to refactor the legacy user module and add integration tests to increase code coverage.",
      pt: 'Vou refatorar o módulo legado de usuários e adicionar testes de integração para aumentar a cobertura.'
    },
    {
      label: 'Deploy Staging',
      en: 'My main focus today will be deploying the feature branch to the staging environment for QA testing.',
      pt: 'Meu foco principal hoje será fazer o deploy da branch no ambiente de staging para testes de QA.'
    }
  ],
  3: [
    {
      label: 'Sem Bloqueios (Padrão)',
      en: 'No blockers on my end! Everything is moving forward smoothly.',
      pt: 'Sem impedimentos da minha parte! Tudo está avançando tranquilamente.'
    },
    {
      label: 'Aguardando Credencial / Terceiro',
      en: "I'm currently blocked by third-party API credentials. I need a quick hand from DevOps to get access.",
      pt: 'No momento estou bloqueado pelas credenciais da API de terceiros. Preciso de uma mão rápida do DevOps.'
    },
    {
      label: 'Sync Rápido pós-Daily',
      en: 'No hard blockers, but I might need a quick 5-minute sync with the front-end team right after standup.',
      pt: 'Sem bloqueios impeditivos, mas talvez precise de uma rápida reunião de 5 minutos com o time de front logo após o standup.'
    }
  ]
}

const currentBotQuestion = computed(() => {
  return botQuestions[currentStep.value] || botQuestions[1]
})

const currentTemplates = computed(() => {
  return templatesByStep[currentStep.value] || []
})

const currentStepPlaceholder = computed(() => {
  if (currentStep.value === 1) return 'Ex: Yesterday I worked on the checkout API...'
  if (currentStep.value === 2) return 'Ex: Today I am planning to finish the unit tests...'
  return 'Ex: No blockers on my end!'
})

// Inicia sessão de Daily
function startScrumSession() {
  currentStep.value = 1
  userAnswers.value = { 1: '', 2: '', 3: '' }
  sessionSeconds.value = 0

  if (sessionTimer) clearInterval(sessionTimer)
  sessionTimer = setInterval(() => {
    sessionSeconds.value++
  }, 1000)

  // O Scrum Master fala a primeira pergunta
  speakCurrentBotPrompt()
}

// Scrum Master fala via TTS
async function speakCurrentBotPrompt() {
  if (!settingsStore.speechEnabled) return

  stopAllAudio()
  isBotSpeaking.value = true

  try {
    await speechService.speak(
      currentBotQuestion.value.text,
      settingsStore.accent,
      settingsStore.speed
    )
  } catch (err) {
    console.error('Erro na fala do bot:', err)
  } finally {
    isBotSpeaking.value = false
  }
}

// Aplica template no campo de texto
function applyTemplate(text) {
  userAnswers.value[currentStep.value] = text
}

// Alterna escuta via microfone (STT)
function toggleListening() {
  if (isListening.value) {
    speechService.stopListening()
    isListening.value = false
    return
  }

  stopAllAudio()
  isListening.value = true

  speechService.startListening(
    settingsStore.accent,
    (recognizedText) => {
      // Anexa ou substitui o texto falado
      const existing = userAnswers.value[currentStep.value]?.trim() || ''
      userAnswers.value[currentStep.value] = existing ? `${existing} ${recognizedText}` : recognizedText
    },
    (err) => {
      Notify.create({
        message: 'Não foi possível reconhecer o áudio',
        caption: err.message || 'Verifique o microfone ou digite diretamente.',
        color: 'warning',
        icon: 'mic_off'
      })
      isListening.value = false
    },
    () => {
      isListening.value = false
    }
  )
}

// Submete a resposta da etapa e avança
function submitCurrentAnswer() {
  stopAllAudio()

  if (currentStep.value < 3) {
    currentStep.value++
    // Pequeno intervalo antes do bot falar a próxima pergunta
    setTimeout(() => {
      speakCurrentBotPrompt()
    }, 500)
  } else {
    // Fim da reunião!
    finishScrumSession()
  }
}

function finishScrumSession() {
  if (sessionTimer) {
    clearInterval(sessionTimer)
    sessionTimer = null
  }

  currentStep.value = 4
  studyStore.recordScrumSimulation()

  // Alex fala o encerramento da reunião
  if (settingsStore.speechEnabled) {
    speechService.speak(
      `Awesome update, ${authStore.displayName}! Thanks for keeping it sharp and technical. Have a productive day, team!`,
      settingsStore.accent,
      settingsStore.speed
    )
  }

  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  })
}

// Copia o formato do status para o Slack/Teams
function copySlackFormat() {
  const text = `*Daily Standup Update - ${authStore.displayName}*\n` +
    `• *Yesterday:* ${userAnswers.value[1]}\n` +
    `• *Today:* ${userAnswers.value[2]}\n` +
    `• *Blockers:* ${userAnswers.value[3]}`

  if (navigator?.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      Notify.create({
        message: 'Status copiado com sucesso!',
        caption: 'Pronto para colar no Slack, Teams ou Discord da sua equipe.',
        color: 'positive',
        icon: 'content_paste'
      })
    })
  }
}

function stopAllAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
  isBotSpeaking.value = false

  if (isListening.value) {
    speechService.stopListening()
    isListening.value = false
  }
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

onBeforeUnmount(() => {
  if (sessionTimer) clearInterval(sessionTimer)
  stopAllAudio()
})
</script>

<style lang="scss" scoped>
.max-w-600 {
  max-width: 600px;
}

.max-w-800 {
  max-width: 800px;
}

.max-w-400 {
  max-width: 400px;
}

.border-all {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.online-indicator {
  width: 10px;
  height: 10px;
  background-color: #4caf50;
  border-radius: 50%;
  box-shadow: 0 0 8px #4caf50;
  animation: pulse-dot 1.5s infinite;
}

@keyframes pulse-dot {
  0% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.7; }
}

.avatar-halo {
  padding: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(149, 117, 205, 0.3) 0%, transparent 70%);
}

.scrum-speaking {
  border-color: rgba(149, 117, 205, 0.6);
  background: rgba(149, 117, 205, 0.06);
  box-shadow: 0 0 20px rgba(149, 117, 205, 0.2);
}

.template-chip {
  transition: all 0.2s ease;
  &:hover {
    background: rgba(149, 117, 205, 0.2);
    border-color: #b388ff;
  }
}

.speaking-wave-bar {
  .wave {
    width: 4px;
    background-color: #b388ff;
    border-radius: 2px;
    animation: wave-motion 1.2s infinite ease-in-out;

    &.wave-1 { height: 12px; animation-delay: 0.1s; }
    &.wave-2 { height: 22px; animation-delay: 0.2s; }
    &.wave-3 { height: 16px; animation-delay: 0.3s; }
    &.wave-4 { height: 26px; animation-delay: 0.4s; }
    &.wave-5 { height: 14px; animation-delay: 0.5s; }
  }
}

@keyframes wave-motion {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1); }
}

.animate-pulse {
  animation: pulse-opacity 1.2s infinite;
}

@keyframes pulse-opacity {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.slack-preview {
  border: 1px solid rgba(255, 255, 255, 0.05);
  line-height: 1.6;
}

.full-width-mobile {
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>
