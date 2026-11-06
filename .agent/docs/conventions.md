# Convenções de Código e Boas Práticas - English Study Pro

Este documento define os padrões formais de nomenclatura, formatação, tipagem via JSDoc, boas práticas de desenvolvimento e a lista de **anti-padrões estritamente proibidos** no repositório **English Study Pro**.

---

## 1. Padrões de Código Vue 3

### 1.1 Composition API com `<script setup>`
- Todos os novos componentes ou refatorações **devem** utilizar exclusivamente o formato `<script setup>`.
- O uso da Options API (`export default { data(), methods: {} }`) é **terminantemente proibido**.

### 1.2 Estrutura e Ordem do Single File Component (SFC)
Todos os arquivos `.vue` devem respeitar a seguinte ordem estrutural:

```vue
<template>
  <!-- Estrutura semântica e declarativa -->
</template>

<script setup>
// 1. Imports de bibliotecas externas (vue, pinia, quasar)
// 2. Imports de serviços, stores e utils internos
// 3. Imports de componentes filhos
// 4. Props (defineProps) e Emits (defineEmits)
// 5. Instâncias de Stores e Composables
// 6. Estados reativos locais (ref, reactive, computed)
// 7. Funções e manipuladores de eventos
// 8. Lifecycle hooks (onMounted, onBeforeUnmount)
</script>

<style lang="scss" scoped>
/* Estilos específicos e encapsulados do componente */
</style>
```

---

## 2. Nomenclatura e Organização de Arquivos

| Tipo de Arquivo | Padrão de Nomenclatura | Exemplo Real | Localização |
| :--- | :--- | :--- | :--- |
| **Páginas (Views)** | `PascalCase` com sufixo `Page.vue` | `LessonDetailPage.vue` | `src/pages/` |
| **Componentes UI** | `PascalCase` sem sufixo | `ConsistencyCalendar.vue` | `src/components/` |
| **Layouts** | `PascalCase` com sufixo `Layout.vue` | `MainLayout.vue` | `src/layouts/` |
| **Pinia Stores** | `camelCase` (definidor de store) | `useStudyStore.js` / `study.js` | `src/stores/` |
| **Serviços** | `camelCase` com sufixo `Service` | `speechService.js` / `speech.js` | `src/services/` |
| **Utilitários** | `camelCase` em funções puras | `similarity.js` | `src/utils/` |
| **Estilos Globais** | Arquivos `.scss` ou `.sass` | `quasar-variables.sass` | `src/css/` |

---

## 3. Tipagem e Documentação via JSDoc

Como o projeto é mantido em JavaScript moderno sem TypeScript no bundler principal, **toda função de serviço, action de store e utilitário deve conter anotações JSDoc estritas**.

### Exemplo de Padrão JSDoc:

```javascript
/**
 * Calcula a pontuação percentual de precisão na pronúncia.
 *
 * @param {string} expectedPhrase - Frase de referência original em inglês.
 * @param {string} spokenPhrase - Frase capturada pelo Web Speech API.
 * @returns {{ score: number, accuracyCategory: 'excellent' | 'good' | 'retry' }}
 */
export function evaluatePronunciation(expectedPhrase, spokenPhrase) {
  // implementação
}
```

---

## 4. Design System e Estilização ("Eclipse Night")

1. **Uso de Variáveis Oficiais:** Nunca declare cores hexadecimais arbitrárias nos componentes se houver uma variável correspondente em `quasar-variables.sass` ou `app.scss`:
   - `$primary`: `#6c5ce7` (Roxo Neon / Brand)
   - `$secondary`: `#00cec9` (Ciano / Turquesa)
   - `$accent`: `#a29bfe` (Lilás Suave)
   - `$dark`: `#0d0b18` (Fundo Ultra Dark)
   - `$dark-page`: `#090710` (Background da Aplicação)
2. **Glassmorphism:** Use a classe utilitária `.glass-card` para caixas elevadas com desfoque e bordas translúcidas.
3. **Escopo de Estilos:** Todo `<style>` em SFCs deve possuir o atributo `scoped`. O uso de estilos globais não autorizados no `app.scss` é proibido.

---

## 5. Anti-padrões Estritamente PROIBIDOS (Regras Rígidas)

Qualquer código submetido por desenvolvedores ou agentes autônomos que contenha um dos padrões abaixo será **sumariamente rejeitado**:

1. ❌ **Acesso Direto ao LocalStorage em Componentes:**
   - *Errado:* `localStorage.setItem('progress', JSON.stringify(data))` dentro de um `.vue`.
   - *Correto:* Invocar uma action do `useStudyStore` ou o método correspondente em `storageService`.
2. ❌ **Acesso Direto às APIs de Fala do Navegador em Componentes:**
   - *Errado:* `const rec = new webkitSpeechRecognition()` no `.vue`.
   - *Correto:* `speechService.listenOnce()`.
3. ❌ **Dependência Exclusiva de Rede (Quebra do Offline-First):**
   - *Errado:* Impedir a conclusão da aula se o Supabase retornar erro de rede ou não estiver configurado.
   - *Correto:* Atualizar o estado local imediatamente, salvar no `LocalStorage` e tentar sync assíncrono em background.
4. ❌ **Mutação Direta de Estado do Pinia:**
   - *Errado:* `studyStore.completedLessons.push(10)` diretamente no template ou script.
   - *Correto:* Criar e invocar `studyStore.markLessonComplete(10)`.
5. ❌ **Injeção de Código HTML Inseguro (XSS):**
   - *Errado:* Usar `v-html` com dados inseridos pelo usuário ou frases não sanitizadas.
   - *Correto:* Interpolação padrão `{{ text }}` ou uso de sanitizador defensivo.
6. ❌ **Imports Circulares:**
   - *Errado:* Store A importa estaticamente Store B, enquanto Store B importa Store A.
   - *Correto:* Elevar a orquestração para um serviço ou inicializador desacoplado.
