<template>
  <div v-if="lesson" class="q-gutter-y-md">
    <!-- Cabeçalho de Navegação e Ações -->
    <div class="row items-center justify-between q-col-gutter-sm animate-slide-up">
      <div class="col-12 col-sm-8 flex items-center q-gutter-x-sm">
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          color="grey-4"
          :to="{ name: 'lessons' }"
        />
        <div>
          <div class="text-caption text-accent text-weight-bold uppercase font-outfit">Dia {{ lesson.day }} • {{ lesson.phase }}</div>
          <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-white">{{ lesson.title }}</h1>
        </div>
      </div>
      
      <!-- Botão Concluir Aula no Topo -->
      <div class="col-12 col-sm-4 flex justify-end">
        <q-btn
          unelevated
          :color="isCompleted ? 'positive' : 'accent'"
          :icon="isCompleted ? 'check_circle' : 'check'"
          :label="isCompleted ? 'Aula Concluída!' : 'Concluir Aula'"
          class="font-outfit text-weight-bold pulse-glow q-py-sm q-px-lg rounded-borders"
          @click="toggleCompletion"
        />
      </div>
    </div>

    <!-- Navegação em Abas (Estudos / Prática / Notas) -->
    <div class="glass-card animate-slide-up" style="animation-delay: 0.1s;">
      <q-tabs
        v-model="activeTab"
        active-color="accent"
        indicator-color="accent"
        class="text-grey-4 border-bottom"
        align="justify"
      >
        <q-tab name="vocabulary" icon="translate" label="Vocabulário" />
        <q-tab name="practice" icon="hearing" label="Prática de Pronúncia" />
        <q-tab name="notes" icon="edit_note" label="Minhas Anotações" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated class="bg-transparent text-white">
        <!-- Aba 1: Vocabulário -->
        <q-tab-panel name="vocabulary" class="q-pa-lg">
          <div class="flex items-center justify-between q-mb-md">
            <div>
              <h2 class="text-h6 text-weight-bold font-outfit q-my-none text-gradient">Vocabulário do Dia</h2>
              <p class="text-caption text-grey-5 q-my-none">Clique nos cards para revelar a tradução e treine a escuta.</p>
            </div>
            <!-- Seletor sotaque rápido -->
            <q-btn-dropdown dense flat color="accent" icon="language" :label="`Sotaque: ${settingsStore.accent}`">
              <q-list dark style="background-color: #150f24;">
                <q-item clickable v-close-popup @click="settingsStore.setAccent('US')">
                  <q-item-section><q-item-label>Inglês Americano (US)</q-item-label></q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="settingsStore.setAccent('UK')">
                  <q-item-section><q-item-label>Inglês Britânico (UK)</q-item-label></q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="settingsStore.setAccent('AU')">
                  <q-item-section><q-item-label>Inglês Australiano (AU)</q-item-label></q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <div class="row q-col-gutter-md">
            <div
              v-for="(item, idx) in lesson.vocabulary"
              :key="idx"
              class="col-12 col-sm-6"
            >
              <!-- Card Vocabulário Rotativo -->
              <div
                class="glass-card-flat vocab-card flex flex-column justify-between q-pa-md cursor-pointer"
                @click="flippedVocab[idx] = !flippedVocab[idx]"
              >
                <div>
                  <div class="flex items-center justify-between q-mb-sm">
                    <span class="vocab-badge font-outfit uppercase">Palavra {{ idx + 1 }}</span>
                    <!-- Botão de Ouvir TTS -->
                    <q-btn
                      round
                      flat
                      dense
                      color="accent"
                      icon="volume_up"
                      @click.stop="playSpeech(item.word)"
                    >
                      <q-tooltip class="bg-grey-9 text-caption">Ouvir Pronúncia</q-tooltip>
                    </q-btn>
                  </div>

                  <!-- Frente (Inglês) -->
                  <div v-if="!flippedVocab[idx]" class="animate-fade-in q-py-sm">
                    <div class="text-h5 text-weight-bold text-white font-outfit text-capitalize">{{ item.word }}</div>
                    <div class="text-caption text-grey-5 q-mt-sm">Clique para ver tradução</div>
                  </div>

                  <!-- Verso (Tradução e exemplo) -->
                  <div v-else class="animate-fade-in q-py-sm">
                    <div class="text-h6 text-weight-bold text-warning font-outfit">{{ item.translation }}</div>
                    <div class="text-body2 text-grey-3 italic q-mt-sm">"{{ item.example }}"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- Aba 2: Prática de Pronúncia Interativa (Componente Modular) -->
        <q-tab-panel name="practice" class="q-pa-lg">
          <div class="q-mb-lg">
            <h2 class="text-h6 text-weight-bold font-outfit q-my-none text-gradient">Treino de Fala Interativo</h2>
            <p class="text-caption text-grey-5 q-my-none">Ouça a frase modelo, clique no microfone e fale. O sistema analisará sua pronúncia palavra por palavra usando IA local.</p>
          </div>

          <div class="q-gutter-y-md">
            <PronunciationPracticeCard
              v-for="(item, idx) in lesson.phrases"
              :key="idx"
              :phrase="item"
              :accent="settingsStore.accent"
              :speed="settingsStore.speed"
              :speech-enabled="settingsStore.speechEnabled"
            />
          </div>
        </q-tab-panel>

        <!-- Aba 3: Anotações -->
        <q-tab-panel name="notes" class="q-pa-lg">
          <div class="flex items-center justify-between q-mb-md">
            <div>
              <h2 class="text-h6 text-weight-bold font-outfit q-my-none text-gradient">Notas Diárias de Estudo</h2>
              <p class="text-caption text-grey-5 q-my-none">Escreva regras gramaticais, novas palavras ou suas dúvidas.</p>
            </div>
            
            <!-- Indicador de Auto-salvo -->
            <transition name="fade">
              <q-badge v-if="savePillVisible" color="positive" class="q-py-xs q-px-sm rounded-borders text-weight-bold flex items-center shadow-1">
                <q-icon name="cloud_done" size="14px" class="q-mr-xs" />
                <span>Salvo automaticamente</span>
              </q-badge>
            </transition>
          </div>

          <!-- Editor -->
          <q-input
            v-model="notesContent"
            type="textarea"
            filled
            dark
            rows="10"
            placeholder="Digite aqui as suas anotações para a aula de hoje..."
            class="custom-input q-my-md full-width"
            @update:model-value="onNoteInput"
          />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStudyStore } from '../stores/study'
import { useSettingsStore } from '../stores/settings'
import { useAchievementsStore } from '../stores/achievements'
import lessonsData from '../data/lessonsData'
import speechService from '../services/speech'
import PronunciationPracticeCard from '../components/PronunciationPracticeCard.vue'
import { Notify } from 'quasar'
import confetti from 'canvas-confetti'

const route = useRoute()
const studyStore = useStudyStore()
const settingsStore = useSettingsStore()
const achievementsStore = useAchievementsStore()

const lesson = ref(null)
const activeTab = ref('vocabulary')
const flippedVocab = ref({})

// Anotações
const notesContent = ref('')
const savePillVisible = ref(false)
let autoSaveTimeout = null

// Conclusão
const isCompleted = computed(() => {
  if (!lesson.value) return false
  return studyStore.completedLessons.includes(lesson.value.day)
})

function loadLesson() {
  const dayId = parseInt(route.params.id)
  const found = lessonsData.find(l => l.day === dayId)
  if (found) {
    lesson.value = found
    notesContent.value = studyStore.notes[dayId.toString()] || ''
    flippedVocab.value = {}
  }
}

// Síntese de Voz (TTS para vocabulário)
function playSpeech(text) {
  if (!settingsStore.speechEnabled) return
  
  speechService.speak(text, settingsStore.accent, settingsStore.speed)
    .catch(err => {
      Notify.create({
        message: 'Erro na reprodução de voz',
        caption: err.message,
        color: 'negative',
        icon: 'warning'
      })
    })
}

// Auto-salvamento de anotações
function onNoteInput() {
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout)
  
  autoSaveTimeout = setTimeout(() => {
    if (lesson.value) {
      studyStore.saveNote(lesson.value.day, notesContent.value)
      
      savePillVisible.value = true
      setTimeout(() => {
        savePillVisible.value = false
      }, 2500)
    }
  }, 800)
}

// Alternar conclusão da lição
function toggleCompletion() {
  if (!lesson.value) return
  
  const newState = !isCompleted.value
  studyStore.completeLesson(lesson.value.day, newState)
  
  if (newState) {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#5E35B1', '#7E57C2', '#9575CD', '#43A047', '#FFD54F']
    })
    
    setTimeout(() => {
      achievementsStore.checkAchievements(studyStore.completedCount, studyStore.streak)
    }, 1000)

    Notify.create({
      message: `💪 Aula do Dia ${lesson.value.day} concluída com sucesso!`,
      color: 'positive',
      icon: 'check_circle',
      position: 'top'
    })
  }
}

watch(() => route.params.id, () => {
  loadLesson()
})

onMounted(() => {
  loadLesson()
})

onBeforeUnmount(() => {
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout)
  speechService.stopSpeaking()
})
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.uppercase {
  text-transform: uppercase;
}
.border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.vocab-card {
  min-height: 120px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(149, 117, 205, 0.25);
    background: rgba(149, 117, 205, 0.04);
  }
}

.vocab-badge {
  font-size: 10px;
  background: rgba(149, 117, 205, 0.1);
  color: #9575CD;
  padding: 2px 8px;
  border-radius: 4px;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

// Fade transition para pílula
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
