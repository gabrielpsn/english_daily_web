# 🎓 English Study Pro - Plano de Estudos de 90 Dias

[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Quasar](https://img.shields.io/badge/Quasar-2.16-1976D2?style=for-the-badge&logo=quasar&logoColor=white)](https://quasar.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-2.1-FFE859?style=for-the-badge&logo=pinia&logoColor=black)](https://pinia.vuejs.org/)
[![Offline First](https://img.shields.io/badge/Offline--First-100%25-43A047?style=for-the-badge&logo=offline&logoColor=white)]()

**English Study Pro** é uma aplicação web interativa, responsiva e *Offline-First* projetada especificamente para auxiliar desenvolvedores de software brasileiros (persona: **Gabriel**) a praticarem inglês diariamente através de microaulas de 10 a 15 minutos por dia ao longo de um programa estruturado de **90 dias**.

O aplicativo roda inteiramente no navegador do usuário, **sem custos de servidores de backend**, armazenando todo o progresso de forma segura no banco de dados local (`LocalStorage`).

---

## 💎 Recursos Premium & Diferenciais

- 🌌 **Design System "Eclipse Night":** Interface escura profunda arrojada com efeitos de *glassmorphism*, bordas com brilho em neon, transições suaves e design responsivo (desktop e mobile).
- 🎙️ **Prática de Pronúncia em Tempo Real:** Escute as frases em inglês e grave sua própria voz usando as APIs nativas do navegador (**Web Speech Synthesis & Speech Recognition**).
- 🧮 **Algoritmo de Similaridade de Fala:** Compara a frase gravada com a frase esperada utilizando a distância de **Levenshtein**, atribuindo notas percentuais e medalhas de desempenho (*Excellent*, *Very Good*, *Good*).
- 📊 **Grid de Consistência estilo GitHub:** Um painel de hábitos no formato de quadradinhos de contribuição do GitHub que colore as datas em que você estudou, facilitando o acompanhamento do seu streak diário 🔥.
- 🃏 **Flashcards com Spaced Repetition:** Mini-game dinâmico no Dashboard para revisão rotativa de vocabulários que você já concluiu nas lições anteriores.
- 💾 **Salvamento Automático de Notas:** Editor de anotações diárias integrado à lição que salva seu texto automaticamente (debounced) com indicador de confirmação visual.
- 📅 **Syllabus para Desenvolvedores:** 90 dias de conteúdo didático com temas variados. A **Fase Profissional (Dias 41 a 50)** traz expressões e vocabulários reais de TI (*Daily Standups*, *Code Reviews*, *Debugging*, *Git Conflicts* e integrações de *API*).
- 📁 **Backup, Relatórios & Zona de Segurança:**
  - Exportação de relatórios profissionais em **PDF** formatados com suas anotações diárias (usando `jsPDF`).
  - Exportação de tabelas de progresso em **CSV** (compatível com Excel).
  - Download e upload de arquivos **JSON** para carregar e transferir seu backup de progresso.
  - Zona crítica com dupla confirmação para redefinir todo o progresso de forma limpa.

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- **NPM** ou gerenciador equivalente

### 1. Clonar e Acessar o Repositório
```bash
git clone https://github.com/gabrielpsn/english_daily_web.git
cd english_daily_web
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Rodar em Ambiente de Desenvolvimento (Vite Dev Server)
```bash
npm run dev
```
O console exibirá o link local (geralmente `http://localhost:5173`). Abra o link em um navegador baseado em Chromium (**Google Chrome ou Microsoft Edge**) para desfrutar de total suporte local à API de reconhecimento de voz por microfone.

### 4. Compilar e Gerar Versão Otimizada de Produção (Build)
```bash
npm run build
```
O build minificado, otimizado e estático será gerado na pasta `/dist`, pronto para ser publicado em qualquer servidor de arquivos estáticos como GitHub Pages, Netlify, Vercel ou Firebase Hosting com custo zero!

---

## 🛠️ Stack Tecnológica

- **Core:** HTML5, CSS3, ES6+ Javascript
- **Framework Base:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Framework de Design:** [Quasar Framework v2+](https://quasar.dev/)
- **Gerenciador de Estado:** [Pinia](https://pinia.vuejs.org/)
- **Roteador:** [Vue Router 4](https://router.vuejs.org/)
- **Estilização & Compilador:** Sass/SCSS
- **Gráficos:** [Chart.js](https://www.chartjs.org/) (via canvas nativo do Vue)
- **Documentação PDF:** [jsPDF](https://github.com/parallax/jsPDF)
- **Comemoração Visual:** Canvas-Confetti
- **Serviços de Voz:** Web Speech API (`SpeechSynthesis` e `webkitSpeechRecognition`)

---

## 📂 Estrutura de Pastas Simplificada

```text
english_daily_web/
├── dist/               # Arquivos otimizados de build para deploy
├── src/
│   ├── assets/         # Logo SVG, imagens e recursos visuais do app
│   ├── css/            # Estilos SCSS customizados do Eclipse Night e variáveis do Quasar
│   ├── data/           # Banco de dados de lições estáticas (90 dias) e geradores
│   ├── layouts/        # Layout responsivo MainLayout (Drawer desktop + bottom abas mobile)
│   ├── router/         # Rotas e configurações do Vue Router
│   ├── services/       # Módulos de áudio (speech), localStorage (storage) e exportação (export)
│   ├── stores/         # Estados do Pinia para estudos, configurações e conquistas
│   ├── utils/          # Funções de similaridade Levenshtein e higienização de texto
│   ├── pages/          # Páginas (Dashboard, Lessons, LessonDetail, Stats, Achievements, Settings)
│   ├── App.vue         # Ponto de entrada de renderização do roteador
│   └── main.js         # Configurações globais e bootstrap de plugins e bibliotecas
├── index.html          # Index principal com meta-tags amigáveis para SEO e Open Graph
├── package.json        # Manifest de dependências e comandos npm
└── vite.config.js      # Configurações de build do Vite e injeção de CSS pré-processado
```

---

## ℹ️ Informações Úteis

- **Versão:** `1.0.0`
- **Licença:** MIT
- **Desenvolvido para:** Gabriel (Persona programador)
- **Compatibilidade:** O aplicativo funciona em qualquer navegador moderno. Contudo, para o recurso de **Reconhecimento de Voz por Microfone (Treino de Fala)**, recomenda-se a utilização de navegadores Chromium como **Google Chrome** ou **Microsoft Edge**, que possuem a API de voz integrada localmente de forma nativa e gratuita.