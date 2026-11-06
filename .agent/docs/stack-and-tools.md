# Stack Tecnológica e Ferramentas - English Study Pro

Este documento especifica a versão exata das tecnologias, dependências de produção, ferramentas de desenvolvimento, APIs de navegador e os comandos operacionais suportados no repositório **English Study Pro**.

---

## 1. Runtime e Gerenciador de Pacotes

- **Node.js:** Versão 20+ (conforme definido no arquivo [.node-version](file:///home/gabriel/projetos/english_daily_web/.node-version)).
- **Package Manager:** `npm` (utilizando [package-lock.json](file:///home/gabriel/projetos/english_daily_web/package-lock.json) para integridade de dependências determinísticas).

---

## 2. Dependências de Produção (Dependencies)

| Pacote | Versão Instalada | Finalidade no Projeto |
| :--- | :--- | :--- |
| `vue` | `^3.5.34` | Core framework reativo (Composition API) |
| `quasar` | `^2.19.3` | Biblioteca de UI components (Cards, Botoes, Dialogs, Notificações) |
| `@quasar/extras` | `^2.0.0` | Conjunto de fontes de ícones (*Material Icons*) e tipografia |
| `pinia` | `^3.0.4` | Gerenciamento de estado global e reativo |
| `vue-router` | `^5.1.0` | Roteamento declarativo com suporte a histórico HTML5 |
| `@supabase/supabase-js` | `^2.106.2` | Cliente para autenticação e persistência de dados em nuvem |
| `chart.js` | `^4.5.1` | Renderização de gráficos de evolução e tempo de estudo |
| `jspdf` | `^4.2.1` | Motor de geração de relatórios e notas em formato PDF |
| `canvas-confetti` | `^1.9.4` | Efeitos visuais de comemoração ao completar lições/streaks |

---

## 3. Dependências de Desenvolvimento (DevDependencies)

| Pacote | Versão Instalada | Finalidade no Projeto |
| :--- | :--- | :--- |
| `vite` | `^8.0.12` | Bundler de ultra-alta velocidade e servidor de desenvolvimento |
| `@vitejs/plugin-vue` | `^6.0.6` | Plugin oficial para compilação de Single File Components Vue 3 |
| `@quasar/vite-plugin` | `^1.12.0` | Injeção e compilação de componentes sob demanda do Quasar |
| `sass` | `^1.100.0` | Compilador Sass/SCSS nativo em Dart |

---

## 4. APIs Nativas do Navegador (Browser APIs)

A aplicação tira proveito de capacidades modernas de navegadores baseados em Chromium:

1. **Web Speech API - Síntese de Fala (Text-to-Speech):**
   - Interface: `window.speechSynthesis` e `SpeechSynthesisUtterance`.
   - Utilização: Reprodução de pronúncia nativa com suporte a sotaques (`en-US`, `en-GB`, `en-AU`).
2. **Web Speech API - Reconhecimento de Fala (Speech-to-Text):**
   - Interface: `window.SpeechRecognition` ou `window.webkitSpeechRecognition`.
   - Utilização: Captura do áudio do microfone do usuário e transcrição em texto para comparação.
3. **Web Storage API:**
   - Interface: `window.localStorage`.
   - Utilização: Armazenamento persistente de aulas concluídas, anotações, streaks e flags de conquistas.

---

## 5. Scripts e Comandos Operacionais

Os comandos abaixo são os scripts padrão definidos no `package.json`:

### 5.1 Desenvolvimento Local
```bash
npm run dev
```
Inicia o Vite Dev Server com Hot Module Replacement (HMR). Geralmente disponível em `http://localhost:5173`.

### 5.2 Compilação de Produção
```bash
npm run build
```
Executa a validação de compilação dos arquivos Vue e gera os bundles minificados e otimizados na pasta `/dist`.

### 5.3 Pré-visualização do Pacote de Produção
```bash
npm run preview
```
Sobe um servidor HTTP estático local apontando para o conteúdo de `/dist`.

---

## 6. Ferramental Recomendado para Automação de Qualidade (QA & CI)

Para suporte às automações dos agentes autônomos (`skill-quality`), recomenda-se a padronização dos seguintes comandos:

- **Linting de Código:**
  ```bash
  npx eslint --ext .js,.vue src
  ```
- **Execução de Testes Unitários de Algoritmos:**
  ```bash
  npx vitest run
  ```
  *(Verificação do algoritmo de Levenshtein em `similarity.js` e métodos de cálculo de streak no `study.js`)*.
