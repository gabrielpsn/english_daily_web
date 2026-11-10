<template>
  <div class="q-gutter-y-lg max-width-container">
    <!-- Cabeçalho -->
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
            Glossário Técnico para Desenvolvedores
          </div>
          <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-white">
            Dicionário Dev Pro 📚
          </h1>
        </div>
      </div>

      <!-- Métricas do Dicionário -->
      <div class="col-12 col-sm-4 flex justify-end q-gutter-x-sm">
        <q-badge
          color="deep-purple-9"
          text-color="white"
          class="font-outfit text-weight-bold q-py-xs q-px-md rounded-borders shadow-2"
        >
          <q-icon name="menu_book" size="14px" class="q-mr-xs text-purple-2" />
          <span>{{ allVocabulary.length }} Termos Catalogados</span>
        </q-badge>
        <q-badge
          v-if="favoriteCount > 0"
          color="amber-9"
          text-color="dark"
          class="font-outfit text-weight-bold q-py-xs q-px-sm rounded-borders shadow-2"
        >
          <q-icon name="star" size="14px" class="q-mr-xs" />
          <span>{{ favoriteCount }} Favoritos</span>
        </q-badge>
      </div>
    </div>

    <!-- Barra de Busca Instantânea & Filtros Rápidos -->
    <div class="glass-card q-pa-md border-all animate-slide-up" style="animation-delay: 0.1s;">
      <div class="row q-col-gutter-md items-center">
        <!-- Campo de Busca -->
        <div class="col-12 col-md-6">
          <q-input
            v-model="searchQuery"
            filled
            dark
            dense
            clearable
            placeholder="Buscar por termo em inglês, tradução ou exemplo (ex: deploy, merge, mock, cache)..."
            class="custom-input full-width font-outfit"
          >
            <template #prepend>
              <q-icon name="search" color="accent" />
            </template>
          </q-input>
        </div>

        <!-- Filtro por Fase -->
        <div class="col-12 col-md-6 flex items-center justify-end q-gutter-xs">
          <q-btn-toggle
            v-model="selectedPhase"
            no-caps
            rounded
            dense
            unelevated
            toggle-color="accent"
            color="dark"
            text-color="grey-4"
            :options="[
              { label: 'Todos', value: 'all' },
              { label: 'Fase 1 (1-30)', value: 'Fundamentos' },
              { label: 'Fase 2 (31-60)', value: 'Conversação' },
              { label: 'Fase 3 (61-90)', value: 'Fluência Prática' }
            ]"
            class="font-outfit text-caption border-all"
          />

          <!-- Botão Toggle Apenas Favoritos -->
          <q-btn
            round
            dense
            unelevated
            :color="onlyFavorites ? 'amber-9' : 'dark'"
            :text-color="onlyFavorites ? 'dark' : 'grey-4'"
            icon="star"
            class="border-all q-ml-xs"
            @click="onlyFavorites = !onlyFavorites"
          >
            <q-tooltip class="bg-grey-9 text-caption">
              {{ onlyFavorites ? 'Mostrando apenas favoritos' : 'Filtrar por favoritos' }}
            </q-tooltip>
          </q-btn>
        </div>
      </div>

      <!-- Categorias em Chips Deslizáveis -->
      <div class="q-mt-md flex items-center q-gutter-xs overflow-auto no-wrap q-py-xs">
        <span class="text-caption text-grey-5 font-outfit q-mr-xs">Categorias:</span>
        <q-chip
          clickable
          dense
          :outline="selectedCategory !== 'all'"
          color="accent"
          text-color="white"
          class="font-outfit text-xs"
          @click="selectedCategory = 'all'"
        >
          Todas
        </q-chip>
        <q-chip
          v-for="cat in availableCategories"
          :key="cat"
          clickable
          dense
          :outline="selectedCategory !== cat"
          color="accent"
          text-color="white"
          class="font-outfit text-xs"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </q-chip>
      </div>
    </div>

    <!-- Indicador de Resultados -->
    <div class="flex items-center justify-between text-caption text-grey-4 q-px-sm">
      <span>Mostrando {{ displayedItems.length }} de {{ filteredVocabulary.length }} termos encontrados</span>
      <span v-if="searchQuery">Filtro ativo: "<strong>{{ searchQuery }}</strong>"</span>
    </div>

    <!-- Grid de Termos do Dicionário -->
    <div v-if="filteredVocabulary.length > 0" class="row q-col-gutter-md">
      <div
        v-for="item in displayedItems"
        :key="item.uniqueId"
        class="col-12 col-sm-6 col-md-4"
      >
        <div class="glass-card q-pa-md h-100 flex flex-column justify-between border-all vocab-term-card">
          <div>
            <!-- Cabeçalho do Card: Fase, Aula e Favorito -->
            <div class="row items-center justify-between q-mb-sm">
              <router-link
                :to="{ name: 'lesson-detail', params: { id: item.day } }"
                class="text-decoration-none"
              >
                <q-badge
                  color="dark"
                  text-color="purple-2"
                  class="font-outfit text-xs border-all cursor-pointer hover-glow"
                >
                  Dia {{ item.day }} • {{ item.category }}
                </q-badge>
              </router-link>

              <q-btn
                round
                flat
                dense
                size="sm"
                :color="isFavorite(item.word) ? 'amber-9' : 'grey-6'"
                :icon="isFavorite(item.word) ? 'star' : 'star_border'"
                @click="toggleFavorite(item.word)"
              >
                <q-tooltip class="bg-grey-9 text-caption">
                  {{ isFavorite(item.word) ? 'Remover dos favoritos' : 'Adicionar aos favoritos' }}
                </q-tooltip>
              </q-btn>
            </div>

            <!-- Termo em Inglês com Botão de Ouvir TTS -->
            <div class="flex items-center justify-between q-my-xs">
              <div class="text-h6 text-weight-bold font-outfit text-white text-capitalize">
                {{ item.word }}
              </div>
              <q-btn
                round
                flat
                dense
                size="sm"
                color="accent"
                icon="volume_up"
                @click="speakText(item.word)"
              >
                <q-tooltip class="bg-grey-9 text-caption">Ouvir Pronúncia</q-tooltip>
              </q-btn>
            </div>

            <!-- Tradução / Significado -->
            <div class="text-caption text-weight-bold text-warning font-outfit q-mb-sm">
              {{ item.translation }}
            </div>

            <!-- Exemplo no Contexto Dev -->
            <div class="glass-card-flat q-pa-sm rounded-borders text-caption text-grey-3 italic border-all q-mt-xs">
              <div class="flex items-start justify-between">
                <span>"{{ item.example }}"</span>
                <q-btn
                  round
                  flat
                  dense
                  size="xs"
                  color="grey-4"
                  icon="play_arrow"
                  class="q-ml-xs"
                  @click="speakText(item.example)"
                >
                  <q-tooltip class="bg-grey-9 text-caption">Ouvir frase inteira</q-tooltip>
                </q-btn>
              </div>
            </div>
          </div>

          <!-- Rodapé do Card: Ir para a Lição Completa -->
          <div class="q-mt-md pt-sm border-top flex items-center justify-between">
            <span class="text-caption text-grey-5 font-outfit text-truncate" style="max-width: 180px;">
              {{ item.lessonTitle }}
            </span>
            <router-link
              :to="{ name: 'lesson-detail', params: { id: item.day } }"
              class="text-caption text-accent text-weight-bold flex items-center text-decoration-none hover-underline font-outfit"
            >
              <span>Ver Aula</span>
              <q-icon name="arrow_forward" size="14px" class="q-ml-xs" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão Carregar Mais Termos (Paginação Inteligente) -->
    <div
      v-if="displayedItems.length < filteredVocabulary.length"
      class="text-center q-my-xl"
    >
      <q-btn
        outline
        color="accent"
        icon="expand_more"
        :label="`Carregar mais termos (${filteredVocabulary.length - displayedItems.length} restantes)`"
        class="font-outfit text-weight-bold rounded-borders q-py-sm q-px-xl"
        @click="loadMore"
      />
    </div>

    <!-- Estado Vazio (Sem resultados) -->
    <div
      v-else-if="filteredVocabulary.length === 0"
      class="glass-card q-pa-xl text-center rounded-borders border-all"
    >
      <q-icon name="search_off" size="64px" color="grey-6" class="q-mb-md" />
      <h3 class="text-h5 text-weight-bold font-outfit text-white q-my-none">
        Nenhum termo técnico encontrado
      </h3>
      <p class="text-body2 text-grey-4 max-w-500 q-mx-auto q-mt-sm q-mb-lg">
        Não encontramos termos correspondentes a "<strong>{{ searchQuery }}</strong>" com os filtros atuais. Tente buscar por palavras como <em>deploy</em>, <em>pull request</em>, <em>async</em> ou <em>database</em>.
      </p>
      <q-btn
        unelevated
        color="accent"
        label="Limpar Filtros e Busca"
        icon="refresh"
        class="font-outfit text-weight-bold"
        @click="clearFilters"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStudyStore } from '../stores/study'
import { useSettingsStore } from '../stores/settings'
import { lessonsData } from '../data/lessonsData'
import { speechService } from '../services/speech'
import { Notify } from 'quasar'

const studyStore = useStudyStore()
const settingsStore = useSettingsStore()

// Filtros
const searchQuery = ref('')
const selectedPhase = ref('all')
const selectedCategory = ref('all')
const onlyFavorites = ref(false)

// Paginação / Limite de itens visíveis
const displayLimit = ref(24)

// Agrupa e indexa todos os vocabulários das 90 lições
const allVocabulary = computed(() => {
  const list = []
  lessonsData.forEach(lesson => {
    if (lesson.vocabulary && Array.isArray(lesson.vocabulary)) {
      lesson.vocabulary.forEach((v, vIdx) => {
        list.push({
          uniqueId: `${lesson.day}_${vIdx}_${v.word}`,
          word: v.word,
          translation: v.translation,
          example: v.example,
          day: lesson.day,
          phase: lesson.phase,
          category: lesson.category || 'Tech',
          lessonTitle: lesson.title
        })
      })
    }
  })
  return list
})

// Lista de categorias distintas disponíveis
const availableCategories = computed(() => {
  const cats = new Set()
  lessonsData.forEach(l => {
    if (l.category) cats.add(l.category)
  })
  return Array.from(cats).sort()
})

// Quantidade de termos favoritados
const favoriteCount = computed(() => {
  return studyStore.favoriteTerms?.length || 0
})

// Lista filtrada
const filteredVocabulary = computed(() => {
  let result = allVocabulary.value

  // Filtro por favoritos
  if (onlyFavorites.value) {
    result = result.filter(item => studyStore.isFavoriteTerm(item.word))
  }

  // Filtro por fase
  if (selectedPhase.value !== 'all') {
    result = result.filter(item => item.phase === selectedPhase.value)
  }

  // Filtro por categoria
  if (selectedCategory.value !== 'all') {
    result = result.filter(item => item.category === selectedCategory.value)
  }

  // Filtro de busca textual
  if (searchQuery.value && searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(item => {
      return (
        item.word.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      )
    })
  }

  return result
})

// Itens atualmente renderizados conforme limite
const displayedItems = computed(() => {
  return filteredVocabulary.value.slice(0, displayLimit.value)
})

function loadMore() {
  displayLimit.value += 24
}

function clearFilters() {
  searchQuery.value = ''
  selectedPhase.value = 'all'
  selectedCategory.value = 'all'
  onlyFavorites.value = false
  displayLimit.value = 24
}

function isFavorite(word) {
  return studyStore.isFavoriteTerm(word)
}

function toggleFavorite(word) {
  studyStore.toggleFavoriteTerm(word)
  const isFavNow = studyStore.isFavoriteTerm(word)

  Notify.create({
    message: isFavNow ? `"${word}" salvo nos favoritos!` : `"${word}" removido dos favoritos.`,
    color: isFavNow ? 'accent' : 'grey-8',
    icon: isFavNow ? 'star' : 'star_border',
    timeout: 1500
  })
}

// Síntese de voz TTS
function speakText(text) {
  if (!settingsStore.speechEnabled) return
  speechService.speak(text, settingsStore.accent, settingsStore.speed).catch(err => {
    Notify.create({
      message: 'Erro na reprodução de voz',
      caption: err.message,
      color: 'negative',
      icon: 'warning'
    })
  })
}
</script>

<style lang="scss" scoped>
.max-w-500 {
  max-width: 500px;
}

.border-all {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.vocab-term-card {
  transition: all 0.25s ease;
  &:hover {
    border-color: rgba(149, 117, 205, 0.4);
    box-shadow: 0 4px 20px rgba(149, 117, 205, 0.15);
    transform: translateY(-2px);
  }
}

.text-decoration-none {
  text-decoration: none;
}

.hover-underline:hover {
  text-decoration: underline;
}

.hover-glow:hover {
  border-color: #b388ff;
  color: #fff !important;
}

.text-xs {
  font-size: 11px;
}
</style>
