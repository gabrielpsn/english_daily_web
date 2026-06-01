
# English Study Pro
## Documento Completo de Arquitetura e Implementação

Versão: 1.0
Tecnologias: Vue 3 + Quasar + Pinia + LocalStorage

---

# 1. Visão Geral

English Study Pro é uma plataforma de aprendizado de inglês baseada em microaulas diárias de 10 a 15 minutos.

Objetivos:

- Desenvolver compreensão auditiva
- Desenvolver pronúncia
- Desenvolver conversação
- Acompanhar evolução do estudante
- Funcionar 100% offline

---

# 2. Requisitos Funcionais

## RF001
Dashboard principal

## RF002
Cadastro de 90 aulas

## RF003
Controle de progresso

## RF004
Streak de estudos

## RF005
Anotações por aula

## RF006
Treino de pronúncia

## RF007
Reconhecimento de voz

## RF008
Conquistas

## RF009
Calendário

## RF010
Estatísticas

## RF011
Exportação PDF

## RF012
Exportação JSON

---

# 3. Requisitos Não Funcionais

- Responsivo
- Offline First
- Sem Backend
- Tempo de carregamento inferior a 2 segundos
- Compatível com Chrome, Edge e Firefox

---

# 4. Arquitetura

```text
UI
 │
 ▼
Pages
 │
 ▼
Components
 │
 ▼
Pinia Stores
 │
 ▼
Services
 │
 ▼
LocalStorage
```

---

# 5. Estrutura de Pastas

```text
src/
├── assets
├── boot
├── css
├── layouts
├── router
├── data
├── services
├── stores
├── pages
├── components
└── utils
```

---

# 6. Rotas

| Rota | Tela |
|--------|--------|
| / | Dashboard |
| /lessons | Aulas |
| /lesson/:id | Aula |
| /statistics | Estatísticas |
| /achievements | Conquistas |
| /settings | Configurações |

---

# 7. Dashboard

Componentes:

- ProgressCard
- StreakCard
- NextLessonCard
- QuickActions

Indicadores:

- % concluído
- aulas concluídas
- dias seguidos
- próxima aula

---

# 8. Modelo das Aulas

```javascript
{
 id: 1,
 day: 1,
 title: "Apresentação pessoal",
 words: [],
 phrases: [],
 exercises: [],
 completed: false
}
```

---

# 9. Cronograma de 90 Dias

Dias 1-30:
Fundamentos

Dias 31-60:
Conversação

Dias 61-90:
Fluência prática

---

# 10. LocalStorage

Chave principal:

```javascript
english-study-app
```

Estrutura:

```javascript
{
 completedLessons: [],
 notes: {},
 studyDates: [],
 streak: 0,
 achievements: [],
 settings: {}
}
```

---

# 11. Store Study

State:

```javascript
completedLessons
notes
studyDates
streak
totalTime
```

Getters:

```javascript
progress
nextLesson
completedCount
studyDays
```

Actions:

```javascript
completeLesson
saveNote
calculateStreak
save
load
reset
```

---

# 12. Store Conquistas

Conquistas:

- Primeira aula
- 7 dias seguidos
- 15 dias seguidos
- 30 dias seguidos
- 50 aulas
- 90 aulas

---

# 13. Serviço de Voz

SpeechSynthesis

Métodos:

```javascript
speak(text)
stop()
pause()
resume()
```

---

# 14. Reconhecimento de Voz

SpeechRecognition

Fluxo:

Usuário fala
→ sistema captura
→ compara texto
→ calcula similaridade
→ exibe nota

---

# 15. Algoritmo de Similaridade

Utilizar:

- Levenshtein Distance

Resultado:

```text
90% Excelente
80% Muito Bom
70% Bom
60% Precisa Melhorar
```

---

# 16. Calendário

QDate

Indicadores:

✅ estudado

❌ não estudado

🔥 streak

---

# 17. Estatísticas

Biblioteca:

Chart.js

Gráficos:

1. Progresso
2. Aulas semanais
3. Frequência mensal
4. Tempo estudado

---

# 18. Exportação PDF

Biblioteca:

jsPDF

Conteúdo:

- nome do aluno
- progresso
- streak
- histórico
- notas

---

# 19. Exportação JSON

Formato:

```javascript
{
 lessons: [],
 notes: {},
 achievements: []
}
```

---

# 20. Configurações

Preferências:

- modo escuro
- idioma
- voz
- notificações
- reconhecimento de voz

---

# 21. Wireframe Dashboard

```text
+-----------------------------------+
| ENGLISH STUDY PRO                 |
+-----------------------------------+
| Progresso 35%                     |
| ███████░░░░░░░░░░                 |
+-----------------------------------+
| 🔥 12 dias seguidos              |
+-----------------------------------+
| Próxima Aula                      |
| Dia 13                            |
| [ Iniciar Aula ]                  |
+-----------------------------------+
```

---

# 22. Wireframe Aula

```text
Tema

Vocabulário

Palavras

Frases

[ Ouvir ]
[ Treinar ]

Observações

[ Concluir Aula ]
```

---

# 23. Componentização

Dashboard:

- ProgressCard
- StreakCard
- NextLessonCard

Lessons:

- LessonCard
- VocabularyCard
- PhraseCard

Achievements:

- AchievementCard

---

# 24. Design System

Primary:
#5E35B1

Secondary:
#7E57C2

Accent:
#9575CD

Success:
#43A047

Warning:
#FB8C00

---

# 25. Responsividade

Mobile:

320px até 767px

Tablet:

768px até 1023px

Desktop:

1024px+

---

# 26. Testes

Testar:

- conclusão de aula
- persistência
- reload da página
- streak
- exportação
- voz
- reconhecimento

---

# 27. Roadmap V1

- Dashboard
- Aulas
- Notas
- LocalStorage

# Roadmap V2

- Voz
- Estatísticas
- PDF

# Roadmap V3

- IA para correção
- Gamificação avançada
- Sincronização em nuvem

---

# 28. Prompt Final para Antigravity

Implemente integralmente o sistema English Study Pro utilizando Vue 3, Quasar Framework, Pinia e LocalStorage.

Siga rigorosamente este documento.

Utilize Composition API.

Crie todas as páginas, componentes, stores, serviços e dados necessários.

Implemente dashboard, aulas, estatísticas, calendário, conquistas, reconhecimento de voz, síntese de voz, exportação PDF e JSON.

Utilize arquitetura limpa, componentização avançada, JSDoc, responsividade mobile-first e padrões modernos de Vue.

Gerar código pronto para produção.
