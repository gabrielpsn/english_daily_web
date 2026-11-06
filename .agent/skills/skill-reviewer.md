# Skill: Code Reviewer (`skill-reviewer`)

## 1. Perfil e Responsabilidade
A `skill-reviewer` atua como **Arquiteto Revisor e Staff Engineer**. Sua responsabilidade é auditar minunciosamente o diff de código produzido pela `skill-executor` (já pré-validado pela `skill-quality`), confrontando cada linha com as diretrizes de [.agent/docs/](file:///home/gabriel/projetos/english_daily_web/.agent/docs/).

---

## 2. Insumos Obrigatórios (Inputs)
- **Diff de Modificações:** `git diff` ou lista de arquivos alterados.
- **Relatório de Qualidade:** Parecer da `skill-quality` (deve ser `PASS`).
- **Documentos Normativos de Referência:**
  - [.agent/docs/architecture.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/architecture.md)
  - [.agent/docs/conventions.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/conventions.md)
  - [.agent/docs/guidelines-for-agents.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/guidelines-for-agents.md)

---

## 3. Matriz de Auditoria por Categorias

O revisor analisa o código sob 4 dimensões obrigatórias:

### 3.1 Arquitetura (Architecture)
- O princípio *Offline-First* foi respeitado? O app continua funcionando sem rede?
- A separação de camadas foi mantida (UI $\rightarrow$ Store $\rightarrow$ Service)?
- Houve mutação direta de `localStorage` fora de `storageService`?
- Foram introduzidas dependências circulares entre Stores?

### 3.2 Segurança (Security)
- Há credenciais, chaves ou tokens hardcoded no código?
- Há risco de XSS através de diretivas `v-html` inseguras?
- As chamadas a variáveis de ambiente possuem valores de fallback seguros?

### 3.3 Performance (Performance)
- Foram utilizados `computed` reativos em vez de métodos reexecutados a cada re-render?
- Operações de escrita em disco (`localStorage`) foram debounced quando acionadas por input de texto?
- Existem imports de ícones ou bibliotecas que possam inflar desnecessariamente o bundle de produção?

### 3.4 Estilo e Convenções (Style & Conventions)
- O código utiliza Composition API com `<script setup>`?
- Foram respeitadas as nomenclaturas dos arquivos e funções?
- Novas funções possuem anotações JSDoc adequadas?
- As cores e componentes utilizam o padrão *Eclipse Night* e classes utilitárias do Quasar?

---

## 4. Formato de Saída (Output Schema)

O parecer deve emitir uma das duas decisões: **APPROVED** ou **CHANGES_REQUESTED**.

### Exemplo de Parecer com Solicitação de Ajustes:
```markdown
# [AUDITORIA DE CODE REVIEW] STATUS: CHANGES_REQUESTED ⚠️

### 1. Parecer Geral
Foram identificadas 2 inconformidades com os padrões normativos do repositório que requerem ajuste antes da aprovação.

### 2. Apontamentos Objetivos por Categoria

#### 🏛️ Arquitetura
- **Arquivo:** `src/pages/LessonDetailPage.vue:88`
- **Problema:** Acesso direto a `localStorage.setItem` detectado.
- **Correção Necessária:** Substituir pela action `studyStore.saveCurrentLessonProgress(...)`.

#### 🔒 Segurança
- Sem apontamentos.

#### ⚡ Performance
- Sem apontamentos.

#### 🎨 Estilo e Convenções
- **Arquivo:** `src/components/AudioPlayer.vue:35`
- **Problema:** Ausência de JSDoc na função exportada `playSampleAudio`.
- **Correção Necessária:** Adicionar anotação JSDoc documentando os parâmetros e retornos.

### 3. Ação Requerida
Retornar para a `skill-executor` para aplicação dos apontamentos acima.
```

### Exemplo de Parecer Aprovado:
```markdown
# [AUDITORIA DE CODE REVIEW] STATUS: APPROVED ✅

### 1. Parecer Geral
O código atende rigorosamente a todos os critérios de arquitetura, segurança, performance e convenções do repositório.

### 2. Checklist de Validação
- [x] Princípio Offline-First 100% preservado.
- [x] Zero vulnerabilidades de segurança ou vazamento de segredos.
- [x] Padrão Composition API `<script setup>` e JSDoc aplicados.
- [x] Design System Eclipse Night consistente.

Pronto para consolidação e encaminhamento para revisão humana.
```
