<template>
  <div class="glass-card q-pa-lg h-100 flex flex-column justify-between">
    <div>
      <div class="text-subtitle2 text-purple-2 text-weight-bold uppercase font-outfit q-mb-xs">Revisão Rápida (Active Recall)</div>
      <h3 class="text-h6 text-weight-bold font-outfit q-my-none text-white">Card do Conhecimento</h3>
      <p class="text-caption text-grey-5 q-mb-md">Pratique vocabulários de lições que você já concluiu para consolidar a memória.</p>
      
      <div
        v-if="currentWord"
        class="review-box relative-position overflow-hidden flex flex-center text-center q-pa-lg cursor-pointer glass-card-flat"
        @click="isFlipped = !isFlipped"
      >
        <!-- Frente -->
        <div v-if="!isFlipped" class="animate-fade-in">
          <div class="text-caption text-accent text-weight-bold uppercase">Palavra / Expressão</div>
          <div class="text-h4 text-weight-bold q-my-sm font-outfit text-gradient text-capitalize">{{ currentWord.word }}</div>
          <div class="text-caption text-grey-4 flex items-center justify-center">
            <q-icon name="touch_app" size="14px" class="q-mr-xs text-grey-5" />
            <span>Clique para ver a tradução</span>
          </div>
        </div>

        <!-- Verso -->
        <div v-else class="animate-fade-in">
          <div class="text-caption text-warning text-weight-bold uppercase">Significado</div>
          <div class="text-h5 text-weight-bold q-my-xs text-white">{{ currentWord.translation }}</div>
          <div class="text-caption text-grey-4 italic q-mt-sm">"{{ currentWord.example }}"</div>
        </div>
      </div>
      
      <div v-else class="text-center q-py-lg glass-card-flat text-grey-5">
        <q-icon name="lock" size="32px" class="q-mb-xs text-grey-6" />
        <div>Conclua pelo menos uma aula para habilitar os Flashcards!</div>
      </div>
    </div>

    <div class="flex justify-end q-mt-md">
      <q-btn
        v-if="currentWord"
        flat
        color="accent"
        icon="refresh"
        label="Outra Palavra"
        class="font-outfit text-weight-bold"
        @click="nextRandomCard"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  completedLessons: {
    type: Array,
    default: () => []
  },
  lessonsData: {
    type: Array,
    default: () => []
  }
})

const isFlipped = ref(false)
const currentWord = ref(null)

function nextRandomCard() {
  isFlipped.value = false

  if (props.completedLessons.length === 0) {
    currentWord.value = null
    return
  }

  const pool = []
  props.completedLessons.forEach(dayId => {
    const lesson = props.lessonsData.find(l => l.day === dayId)
    if (lesson && lesson.vocabulary) {
      pool.push(...lesson.vocabulary)
    }
  })

  if (pool.length > 0) {
    const randIndex = Math.floor(Math.random() * pool.length)
    currentWord.value = pool[randIndex]
  } else {
    currentWord.value = null
  }
}

watch(() => props.completedLessons.length, () => {
  nextRandomCard()
})

onMounted(() => {
  nextRandomCard()
})
</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.h-100 {
  height: 100%;
}

.uppercase {
  text-transform: uppercase;
}

.review-box {
  min-height: 130px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(149, 117, 205, 0.4);
    background: rgba(149, 117, 205, 0.05);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
