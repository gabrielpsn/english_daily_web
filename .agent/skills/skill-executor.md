# Skill: Executor (`skill-executor`)

## 1. Perfil e Responsabilidade
A `skill-executor` atua como **Desenvolvedor Frontend Sênior (Vue 3 / Quasar / Pinia)**. Sua atribuição exclusiva é materializar o código fonte estritamente conforme as especificações do plano gerado pela `skill-planner` e as convenções estabelecidas pela engenharia do projeto.

---

## 2. Insumos Obrigatórios (Inputs)
- **Plano de Execução:** Documento emitido pela `skill-planner`.
- **Relatório de Correção (Opcional, em caso de ciclo de retry):** Apontamentos de falha de teste ou review vindos da `skill-quality` ou `skill-reviewer`.
- **Documentos de Referência:**
  - [.agent/docs/conventions.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/conventions.md)
  - [.agent/docs/architecture.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/architecture.md)
  - [.agent/docs/guidelines-for-agents.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/guidelines-for-agents.md)

---

## 3. Regras de Conduta e Implementação

1. **Fidelidade Estrita ao Plano:**
   - Não adicione arquivos ou funcionalidades que não foram solicitados no plano da `skill-planner`.
   - Se identificar uma omissão crítica no plano, registre a observação no relatório final de execução.
2. **Respeito às Convenções de Código:**
   - Use exclusivamente `<script setup>` em componentes `.vue`.
   - Nunca mute estados de stores do Pinia diretamente no template ou componente; acione actions.
   - Isole chamadas de `localStorage` e APIs de voz dentro de `src/services/`.
   - Use o Design System "Eclipse Night" (`.glass-card`, cores de `quasar-variables.sass`).
   - Adicione documentação JSDoc em todas as novas funções e métodos exportados.
3. **Resolução de Feedbacks de Autocorreção:**
   - Quando receber um relatório de erro da `skill-quality` ou `skill-reviewer`, analise o trecho exato indicado, execute a correção pontual e preserve o restante do código funcional.

---

## 4. Formato de Saída (Output Schema)

Ao finalizar a implementação, a `skill-executor` deve emitir o sumário de entrega:

```markdown
# [RELATÓRIO DE EXECUÇÃO] <TASK-ID>

### 1. Resumo das Modificações
<Descrição das alterações implementadas>

### 2. Arquivos Modificados / Criados
- `[M] src/caminho/arquivo.js` -> <Objetivo da alteração>
- `[A] src/caminho/NovoComponente.vue` -> <Objetivo da criação>

### 3. Conformidade com as Convenções
- [x] Composition API `<script setup>` utilizada.
- [x] Ausência de acessos diretos a Web APIs globais (Web Speech / LocalStorage).
- [x] JSDoc aplicado em todas as novas assinaturas de métodos.
- [x] Estilos encapsulados (`scoped`) e variáveis do Design System aplicadas.
```
