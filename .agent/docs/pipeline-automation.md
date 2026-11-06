# Pipeline de Automação End-to-End (Jira & Git) - English Study Pro

Este documento apresenta o blueprint técnico da infraestrutura de automação contínua que conecta o ciclo de vida de tarefas no **Jira Software**, os agentes autônomos no repositório local e a entrega contínua via **Git / GitHub**.

---

## 1. Visão Geral da Arquitetura do Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor PM as Gestor / Tech Lead
    participant Jira as Jira Software
    participant Hook as Webhook Gateway / GitHub Actions
    participant Agent as Autonomous Agent Engine
    participant Git as Git Repo (GitHub)
    actor Dev as Revisor Humano

    PM->>Jira: Move task para "In Progress" (atribuída ao Bot)
    Jira->>Hook: Dispara Webhook: jira:issue_updated (status: IN_PROGRESS)
    Hook->>Git: Clona repositório / faz checkout da main
    Hook->>Agent: Dispara orquestrador com contexto da task
    Agent->>Agent: Executa Loop (Planner -> Executor -> Quality -> Reviewer)
    Agent->>Git: Cria branch feature/ENG-XXX, commita e abre Pull Request
    Agent->>Jira: Transiciona status para "In Review" e anexa link do PR
    
    alt Cenário A: Humano Aprova o PR
        Dev->>Git: Aprova PR e faz Merge na main
        Git->>Jira: Webhook transiciona task para "Done"
    else Cenário B: Humano Solicita Mudanças
        Dev->>Git: Comenta no PR com apontamentos
        Git->>Hook: Webhook: pull_request_review_comment
        Hook->>Agent: Reativa skill-executor com os comentários
        Agent->>Git: Envia novos commits para a mesma branch e responde no PR
    end
```

---

## 2. Componentes da Solução Técnica

### 2.1 Trigger (Jira Webhook $\rightarrow$ CI/CD)
- **Evento Monitorado:** Transição de status da Issue para `"In Progress"` com `assignee.accountId == "AI_AGENT_BOT"`.
- **Payload Extraído:**
  - `issue.key`: Chave da tarefa (ex: `ENG-105`).
  - `issue.fields.summary`: Título da tarefa.
  - `issue.fields.description`: Descrição completa e critérios de aceite.

### 2.2 Motor de Processamento do Agente (`.agent/scripts/run-task.sh`)
- Executado em container efêmero ou runner dedicado:
  1. Cria branch isolada: `git checkout -b feature/${ISSUE_KEY}`.
  2. Executa a `skill-planner` para montar o checklist em memória.
  3. Aciona a `skill-executor` para aplicar o código.
  4. Executa `npm run build` via `skill-quality`.
  5. Aciona a `skill-reviewer` para checagem estática de arquitetura e segurança.
  6. Se aprovado, faz commit assinado: `feat(${ISSUE_KEY}): <Título da Tarefa>`.

### 2.3 Entrega (Pull Request Padronizado)
- Utiliza a CLI oficial do GitHub (`gh pr create`) com template automatizado contendo:
  - Identificador da tarefa no Jira.
  - Resumo executivo da implementação.
  - Checklist de validações técnicas executadas pela `skill-quality`.
  - Parecer de auditoria da `skill-reviewer`.

### 2.4 Ciclo de Interação Humana
- **Aprovação:** O merge na branch `main` dispara webhook que atualiza a issue no Jira para `"Done"`.
- **Ajustes:** Comentários no PR disparam nova execução do agente na mesma branch, aplicando correções incrementais sem recriar o PR.
