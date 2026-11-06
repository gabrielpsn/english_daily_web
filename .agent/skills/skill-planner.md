# Skill: Planner (`skill-planner`)

## 1. Perfil e Responsabilidade
A `skill-planner` atua como **Engenheiro de Soluções e Planejador Técnico**. Sua função é receber o escopo bruto de uma tarefa (User Story, Bug Report, Task do Jira ou comando do usuário), analisar o estado atual do repositório e gerar um **Plano Técnico de Execução** detalhado, determinístico e sequencial.

---

## 2. Insumos Obrigatórios (Inputs)
- **Descrição da Task:** Identificador (ex: `ENG-104`), título, descrição e critérios de aceite de negócio.
- **Documentos de Referência:**
  - [.agent/docs/architecture.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/architecture.md)
  - [.agent/docs/guidelines-for-agents.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/guidelines-for-agents.md)
- **Estado do Repositório:** Árvore de arquivos e estado do git (`git status`).

---

## 3. Procedimento Operacional (Passo a Passo)

1. **Análise de Requisitos e Critérios de Aceite:**
   - Decompor a solicitação em requisitos funcionais e não-funcionais.
   - Identificar possíveis armadilhas contra a premissa *Offline-First* ou impacto nas 90 lições.

2. **Mapeamento de Arquivos Impactados:**
   - Identificar quais camadas serão tocadas:
     - Componentes/Páginas (`src/pages/`, `src/components/`, `src/layouts/`)
     - Estados Pinia (`src/stores/`)
     - Serviços (`src/services/`)
     - Utilitários (`src/utils/`)
     - Estilos (`src/css/`)

3. **Validação de Dependências e Contratos:**
   - Verificar se há alterações de schema no `localStorage` e se requer rotina de migração.
   - Verificar se há novos endpoints/queries no Supabase e garantir o fallback local.

4. **Elaboração do Checklist de Execução Sequencial:**
   - Ordenar as ações do nível mais baixo (utils/services) até a camada visual (components/pages).

---

## 4. Formato de Saída (Output Schema)

O plano gerado pela `skill-planner` deve obrigatoriamente seguir a estrutura abaixo:

```markdown
# [PLANO DE EXECUÇÃO] <TASK-ID>: <Título da Tarefa>

### 1. Resumo do Escopo
<Descrição sintética da entrega>

### 2. Mapeamento de Impacto
- **Arquivos a Criar:**
  - `caminho/do/arquivo.ext`
- **Arquivos a Modificar:**
  - `caminho/do/arquivo.ext`
- **Contratos e Dependências Afetadas:**
  - <ex: Store useStudyStore, Schema do LocalStorage, etc.>

### 3. Checklist Técnico Sequencial
- [ ] **Etapa 1 (Camada de Dados/Serviço):** <Ação técnica específica>
- [ ] **Etapa 2 (Camada de Estado Pinia):** <Ação técnica específica>
- [ ] **Etapa 3 (Camada de Apresentação UI):** <Ação técnica específica>
- [ ] **Etapa 4 (Estilização Eclipse Night):** <Ação técnica específica>

### 4. Critérios de Validação Técnica
- [ ] `npm run build` executa sem erros ou warnings bloqueantes.
- [ ] Aplicação mantém integridade no modo 100% offline.
- [ ] Nenhum dado salvo previamente no LocalStorage é corrompido.
```
