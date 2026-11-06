# Skill: Quality Assurance (`skill-quality`)

## 1. Perfil e Responsabilidade
A `skill-quality` atua como **Engenheiro de Qualidade de Software (QA / Build Engineer)**. Sua responsabilidade é verificar de forma objetiva, automatizada e determinística a integridade do código gerado pela `skill-executor`, executando verificações de compilação, análise estática, build e testes automatizados.

---

## 2. Insumos Obrigatórios (Inputs)
- **Código Alterado no Workspace:** Arquivos criados ou modificados pela `skill-executor`.
- **Scripts de Validação:**
  - `npm run build` (Compilação do Vite + Quasar + checagem de templates Vue).
  - Linters e testes quando configurados (`eslint`, `vitest`).
- **Documento de Referência:**
  - [.agent/docs/stack-and-tools.md](file:///home/gabriel/projetos/english_daily_web/.agent/docs/stack-and-tools.md)

---

## 3. Matriz de Verificação de Qualidade

A `skill-quality` executa obrigatoriamente a seguinte suíte de inspeção:

1. **Build e Compilação dos Bundles:**
   - Comando: `npm run build`
   - Validações:
     - Exit code igual a 0.
     - Detecção de erros de sintaxe nos templates SFC (`<template>`).
     - Detecção de imports inexistentes ou quebrados.
     - Alerta de warnings graves (como dynamic imports redundantes ou ciclos).

2. **Integridade de Sintaxe e Estrutura dos Arquivos:**
   - Inspeção de arquivos `.vue` para garantir fechamento de tags e tags `<style scoped>`.
   - Garantia de que novos pacotes adicionados ao `package.json` estão devidamente instalados e travados no `package-lock.json`.

3. **Verificação de Regressão Básica:**
   - Conferir se funções centrais exportadas em `src/utils/similarity.js`, `src/services/storage.js` e stores mantêm compatibilidade com chamadas existentes.

---

## 4. Formato de Saída (Output Schema)

### Cenário A: Aprovação Técnica (Status: PASS)
```markdown
# [RELATÓRIO DE QUALIDADE] STATUS: PASS ✅

### 1. Resumo da Execução
- **Comando:** `npm run build`
- **Código de Saída:** 0
- **Duração:** 3.8s
- **Módulos Transformados:** 432 módulos sem erros

### 2. Diagnóstico de Warnings
- Sem warnings bloqueantes.

### 3. Parecer
Aprovado para a etapa de Code Review (`skill-reviewer`).
```

### Cenário B: Reprovação com Diagnóstico (Status: FAIL)
```markdown
# [RELATÓRIO DE QUALIDADE] STATUS: FAIL ❌

### 1. Resumo da Falha
- **Comando:** `npm run build`
- **Código de Saída:** 1

### 2. Log de Erro Identificado
```text
[vite:vue] Element is missing end tag.
File: src/pages/LessonDetailPage.vue:145:10
```

### 3. Ação Requerida para a `skill-executor`
- Corrigir o fechamento da tag `<q-card-section>` na linha 145 de `src/pages/LessonDetailPage.vue`.
```
