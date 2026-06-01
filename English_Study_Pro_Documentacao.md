# Documento de Implementação
## Projeto: English Study Pro - Plano de Inglês 90 Dias

### Objetivo

Desenvolver uma aplicação web responsiva utilizando Vue 3, Quasar Framework, Pinia e LocalStorage para acompanhamento de estudos de inglês durante 90 dias.

A aplicação deve funcionar totalmente offline, sem backend, armazenando todos os dados localmente.

---

# Stack Tecnológica

- Vue 3
- Quasar Framework 2+
- Pinia
- Vue Router
- LocalStorage
- Web Speech API
- Web Speech Recognition API

---

# Estrutura de Pastas

```text
src/
├── assets/
├── boot/
├── components/
│   ├── dashboard/
│   ├── lessons/
│   ├── calendar/
│   └── achievements/
├── pages/
│   ├── DashboardPage.vue
│   ├── LessonsPage.vue
│   ├── LessonDetailPage.vue
│   ├── StatisticsPage.vue
│   ├── AchievementsPage.vue
│   └── SettingsPage.vue
├── stores/
├── services/
├── data/
├── router/
├── layouts/
└── css/
```

---

# Funcionalidades

## Dashboard
- Total de aulas concluídas
- Percentual concluído
- Barra de progresso
- Streak de estudos
- Próxima aula

## Cadastro das Aulas
- 90 aulas cadastradas
- Vocabulário
- Frases
- Status de conclusão

## Tela de Aulas
- Aula concluída (verde)
- Aula atual (azul)
- Aula futura (cinza)

## Detalhes da Aula
- Tema
- Vocabulário
- Frases
- Observações
- Concluir aula

## Persistência
- LocalStorage
- Chave: `english-study-app`

## Store Pinia
State:
- completedLessons
- notes
- studyDates
- streak

Getters:
- progress
- nextLesson
- completedCount

Actions:
- completeLesson
- saveNote
- calculateStreak
- load
- save
- reset

## Calendário
- Utilizar QDate
- Exibir dias estudados

## Estatísticas
- Chart.js
- Aulas por semana
- Evolução do progresso
- Frequência mensal

## Pronúncia
- speechSynthesis
- speak()
- stop()
- pause()
- resume()

## Reconhecimento de Voz
- webkitSpeechRecognition
- SpeechRecognition
- Comparação da frase falada

## Conquistas
- Primeira Aula
- 7 Dias Seguidos
- 30 Dias Seguidos
- 50 Aulas Concluídas
- Curso Completo

## Exportação
- JSON
- PDF via jsPDF

## Configurações
- Som
- Reconhecimento de voz
- Notificações
- Modo escuro

---

# Tema Visual

Primary: #5E35B1
Secondary: #7E57C2
Accent: #9575CD
Success: #43A047
Warning: #FB8C00

---

# Critérios de Aceitação

- Dashboard funcional
- 90 aulas cadastradas
- Persistência em LocalStorage
- Sistema de streak
- Notas
- Pronúncia
- Reconhecimento de voz
- Estatísticas
- Exportação PDF
- Responsivo desktop e mobile
- Sem backend

---

# Comando Final para Antigravity

Implemente integralmente o sistema English Study Pro utilizando Vue 3 + Quasar + Pinia.

Siga rigorosamente esta documentação.

Crie todos os componentes, páginas, stores, serviços e dados necessários.

Utilize Composition API.

Utilize LocalStorage para persistência.

Implemente todas as funcionalidades descritas.

Garanta responsividade mobile e desktop.

Gerar código limpo, componentizado, tipado com JSDoc, organizado por domínio e pronto para produção.
