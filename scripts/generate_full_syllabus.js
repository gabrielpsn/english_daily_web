import fs from 'fs';
import path from 'path';

// Estrutura curada das 90 Aulas do English Study Pro para Desenvolvedores
const daysData = [
  // --- FASE 1: FUNDAMENTOS & DESBLOQUEIO (DIAS 1 A 30) ---
  // SEMANA 1: APRESENTAÇÃO & SETUP
  {
    day: 1, phase: "Fundamentos", category: "Self-Introduction",
    title: "Apresentação Pessoal & Stack (Self-Introduction & Tech Stack)",
    context: "Você acabou de entrar na chamada com seu novo time e o gestor pede para você se apresentar rapidamente.",
    dialogue: [
      { speaker: "Team Lead", text: "Welcome aboard! Why don't you introduce yourself to the team?" },
      { speaker: "Gabriel", text: "Hi everyone! I'm Gabriel, a full-stack developer with 4 years of experience specializing in Vue and Node." },
      { speaker: "Team Lead", text: "Great to have you here, Gabriel! Welcome!" }
    ],
    vocabulary: [
      { word: "Full-stack developer", translation: "Desenvolvedor full-stack", example: "I work as a full-stack developer focusing on web applications." },
      { word: "Welcome aboard", translation: "Bem-vindo a bordo / ao time", example: "Welcome aboard! Let's get your environment set up." },
      { word: "Specialize in", translation: "Especializar-se em", example: "I specialize in front-end architecture and state management." }
    ],
    phrases: [
      { english: "Hello everyone, my name is Gabriel and I am a software developer.", portuguese: "Olá a todos, meu nome é Gabriel e eu sou um desenvolvedor de software." },
      { english: "I have been working with modern JavaScript and Vue for several years.", portuguese: "Eu trabalho com JavaScript moderno e Vue há vários anos." },
      { english: "I'm really excited to collaborate with this team.", portuguese: "Estou muito empolgado para colaborar com este time." }
    ],
    pronunciationTip: { rule: "Eliminar o 'i' no final de 'developer'", explanation: "A terminação 'er' deve soar neutra (/dɪˈvɛləpər/), sem transformar o 'p' em 'pi'." }
  },
  {
    day: 2, phase: "Fundamentos", category: "Roles & Seniority",
    title: "Falando sobre Cargo e Experiência (Roles & Seniority)",
    context: "Durante um bate-papo informal com outro desenvolvedor, você explica quais tecnologias já utilizou no passado.",
    dialogue: [
      { speaker: "Sarah", text: "How long have you been writing TypeScript?" },
      { speaker: "Gabriel", text: "I've been using TypeScript in production for about three years now." },
      { speaker: "Sarah", text: "Awesome! We have a few complex types in our codebase that you can help us with." }
    ],
    vocabulary: [
      { word: "Seniority", translation: "Senioridade / Nível de experiência", example: "Our team has engineers across different seniority levels." },
      { word: "In production", translation: "Em produção (código real rodando)", example: "We have been running this microservice in production for months." },
      { word: "Codebase", translation: "Base de código do projeto", example: "Our codebase is well organized with automated tests." }
    ],
    phrases: [
      { english: "I have hands-on experience building scalable web APIs.", portuguese: "Eu tenho experiência prática construindo APIs web escaláveis." },
      { english: "In my previous role, I maintained both frontend and backend services.", portuguese: "No meu cargo anterior, eu mantinha serviços de frontend e backend." },
      { english: "I am comfortable working with agile methodologies like Scrum.", portuguese: "Eu me sinto confortável trabalhando com metodologias ágeis como Scrum." }
    ],
    pronunciationTip: { rule: "A pronúncia correta de 'role'", explanation: "A palavra 'role' (cargo/papel) tem som de 'ô' fechado (/roʊl/), diferente de 'raw'." }
  },
  {
    day: 3, phase: "Fundamentos", category: "Workspace",
    title: "Descrevendo seu Setup e Home Office (Workstation & Equipment)",
    context: "Um colega pergunta sobre seu monitor e teclado no canal de chat da empresa.",
    dialogue: [
      { speaker: "Alex", text: "Are you running macOS or Linux on your workstation?" },
      { speaker: "Gabriel", text: "I run Linux on my main machine with a dual monitor setup." },
      { speaker: "Alex", text: "Nice! Linux is super lightweight for docker containers." }
    ],
    vocabulary: [
      { word: "Workstation", translation: "Estação de trabalho / Computador", example: "My workstation has 32 gigabytes of RAM for local dev." },
      { word: "Dual monitor", translation: "Monitor duplo", example: "A dual monitor setup makes reviewing pull requests much faster." },
      { word: "Lightweight", translation: "Leve / Que consome poucos recursos", example: "This library is lightweight and has zero dependencies." }
    ],
    phrases: [
      { english: "I work remotely from my home office with high-speed internet.", portuguese: "Eu trabalho remotamente do meu home office com internet de alta velocidade." },
      { english: "I use an external mechanical keyboard and a noise-canceling headset.", portuguese: "Eu uso um teclado mecânico externo e um headset com cancelamento de ruído." },
      { english: "My computer is fully configured with Node and Docker.", portuguese: "Meu computador está totalmente configurado com Node e Docker." }
    ],
    pronunciationTip: { rule: "Conexão de sons em 'high-speed internet'", explanation: "O 'd' em 'speed' se conecta suavemente ao 'i' de 'internet': /spiːd‿ˈɪntərnɛt/." }
  },
  {
    day: 4, phase: "Fundamentos", category: "Virtual Meetings",
    title: "Problemas de Conexão e Áudio no Zoom/Meet (Tech Glitches in Calls)",
    context: "Sua câmera ou microfone trava durante uma chamada de equipe e você precisa avisar rapidamente.",
    dialogue: [
      { speaker: "Manager", text: "Gabriel, are you talking? We can't hear you." },
      { speaker: "Gabriel", text: "Sorry about that! I was on mute. Can you hear me clearly now?" },
      { speaker: "Manager", text: "Yes, loud and clear! Go ahead." }
    ],
    vocabulary: [
      { word: "You're on mute", translation: "Seu microfone está mutado", example: "Hey, you're on mute, unmute yourself please." },
      { word: "Loud and clear", translation: "Alto e bom som / Em alto e bom som", example: "Your microphone is loud and clear now." },
      { word: "You froze", translation: "Sua imagem/vídeo travou", example: "You froze for a few seconds, could you repeat that?" }
    ],
    phrases: [
      { english: "Sorry, my microphone was muted. Can you hear me now?", portuguese: "Desculpe, meu microfone estava mutado. Vocês me ouvem agora?" },
      { english: "Your screen is loading, let me know when you can see my slide.", portuguese: "Sua tela está carregando, me avise quando conseguir ver meu slide." },
      { english: "I think my connection is lagging, let me turn off my video.", portuguese: "Acho que minha conexão está com lag, vou desligar meu vídeo." }
    ],
    pronunciationTip: { rule: "A pronúncia de 'mute' e 'muted'", explanation: "A palavra 'mute' tem som de 'm-iút' (/mjuːt/), nunca 'mutxi'." }
  },
  {
    day: 5, phase: "Fundamentos", category: "Remote Routine",
    title: "Rotina de Trabalho Remoto e Fusos Horários (Remote Routine & Timezones)",
    context: "Você combina o horário de uma reunião com um colega em Nova York (EST) ou Londres (GMT).",
    dialogue: [
      { speaker: "David", text: "What timezone are you in, Gabriel?" },
      { speaker: "Gabriel", text: "I'm in Brasília Time (BRT), which is currently one hour ahead of Eastern Time." },
      { speaker: "David", text: "Perfect, that gives us plenty of overlap during normal business hours." }
    ],
    vocabulary: [
      { word: "Timezone", translation: "Fuso horário", example: "Our team spans across three different timezones." },
      { word: "Overlap", translation: "Horas em comum / Coincidência de horários", example: "We have four hours of overlap between Brazil and Europe." },
      { word: "Ahead of", translation: "À frente de (fuso mais adiantado)", example: "London is three hours ahead of São Paulo." }
    ],
    phrases: [
      { english: "I am available between 9 AM and 6 PM in my local time.", portuguese: "Estou disponível entre 9h e 18h no meu horário local." },
      { english: "Let's schedule our meeting during our timezone overlap window.", portuguese: "Vamos agendar nossa reunião na nossa janela de sobreposição de fusos." },
      { english: "I usually log on early to sync with European teammates.", portuguese: "Eu costumo entrar mais cedo para sincronizar com os colegas da Europa." }
    ],
    pronunciationTip: { rule: "A pronúncia de 'schedule'", explanation: "No inglês americano (US), soa 'skédjul' (/ˈskɛdʒuːl/). No britânico (UK), soa 'chédjul'." }
  },
  {
    day: 6, phase: "Fundamentos", category: "Small Talk",
    title: "Quebra-Gelo Casual e Small Talk (Casual Small Talk & Icebreakers)",
    context: "Os primeiros 2 minutos antes de a reunião começar oficialmente enquanto todos entram na sala virtual.",
    dialogue: [
      { speaker: "Emma", text: "Hey Gabriel! How was your weekend?" },
      { speaker: "Gabriel", text: "It was pretty relaxing! The weather was great, so I spent some time outdoors. How about yours?" },
      { speaker: "Emma", text: "Same here, watched some football and caught up on rest." }
    ],
    vocabulary: [
      { word: "Small talk", translation: "Conversa fiada amigável / Quebra-gelo", example: "A few minutes of small talk builds great rapport with colleagues." },
      { word: "Catch up on", translation: "Colocar em dia / Recuperar", example: "I used Sunday to catch up on sleep." },
      { word: "Pretty good / Pretty relaxing", translation: "Bem bom / Bastante relaxante", example: "The project demo went pretty well today." }
    ],
    phrases: [
      { english: "How has your week been going so far?", portuguese: "Como tem sido a sua semana até agora?" },
      { english: "Any exciting plans for the upcoming weekend?", portuguese: "Algum plano empolgante para o próximo fim de semana?" },
      { english: "It has been quite rainy here today, but the coffee helps!", portuguese: "Tem chovido bastante aqui hoje, mas o café ajuda!" }
    ],
    pronunciationTip: { rule: "O som de 'comfortable' e 'weather'", explanation: "Em 'weather', o 'th' vibra as cordas vocais (/ˈwɛðər/). Diga 'uédher'." }
  },
  {
    day: 7, phase: "Fundamentos", category: "Review",
    title: "Revisão da Semana 1 & Consolidação da Fala (Week 1 Review & Fluency Check)",
    context: "Consolidação de apresentações, setup e rotina com teste de fala contínua de 60 segundos.",
    dialogue: [
      { speaker: "Coach", text: "Ready for your weekly fluency check, Gabriel?" },
      { speaker: "Gabriel", text: "Yes! I'm ready to introduce myself and describe my workflow without hesitating." },
      { speaker: "Coach", text: "Awesome! Let's hear your one-minute introduction." }
    ],
    vocabulary: [
      { word: "Hesitate", translation: "Hesitar / Ficar travado", example: "Don't hesitate to ask questions if anything is unclear." },
      { word: "Fluency", translation: "Fluência (capacidade de falar continuamente)", example: "Daily practice of 15 minutes is the key to speech fluency." },
      { word: "Without pause", translation: "Sem pausas longas", example: "Try speaking the entire sentence without pauses." }
    ],
    phrases: [
      { english: "I am a web engineer dedicated to building performant interfaces.", portuguese: "Eu sou um engenheiro web dedicado a construir interfaces de alta performance." },
      { english: "I work effectively in distributed teams across multiple countries.", portuguese: "Eu trabalho com eficácia em equipes distribuídas por múltiplos países." },
      { english: "Consistent practice every single day builds lasting confidence.", portuguese: "Prática consistente todos os dias constrói confiança duradoura." }
    ],
    pronunciationTip: { rule: "Ritmo contínuo sem 'ééé...'", explanation: "Substitua pausas com 'ééé' por pausas silenciosas ou expressões de transição como 'Well...', 'You see...'." }
  },

  // SEMANA 2: DAILY STANDUP MEETINGS
  {
    day: 8, phase: "Fundamentos", category: "Daily Standup",
    title: "O que fiz ontem (Reporting Yesterday's Progress)",
    context: "É sua vez de falar na reunião diária e você resume o que concluiu no dia anterior.",
    dialogue: [
      { speaker: "Scrum Master", text: "Gabriel, you're up! What did you get done yesterday?" },
      { speaker: "Gabriel", text: "Yesterday, I finished implementing the user authentication flow and wrote unit tests for the token refresh logic." },
      { speaker: "Scrum Master", text: "Great progress! Did you push the branch?" }
    ],
    vocabulary: [
      { word: "You're up", translation: "É a sua vez (na fila/reunião)", example: "You're up next, Gabriel, whenever you are ready." },
      { word: "Get done", translation: "Concluir / Realizar", example: "We managed to get a lot done before the release." },
      { word: "Wrap up", translation: "Finalizar / Concluir uma tarefa", example: "I am wrapping up the bug fix this morning." }
    ],
    phrases: [
      { english: "Yesterday I wrapped up the responsive layout for the checkout page.", portuguese: "Ontem eu finalizei o layout responsivo para a página de checkout." },
      { english: "I spent most of the day refactoring the authentication store.", portuguese: "Passei a maior parte do dia refatorando a store de autenticação." },
      { english: "I opened a pull request with the new component library.", portuguese: "Eu abri um pull request com a nova biblioteca de componentes." }
    ],
    pronunciationTip: { rule: "Som do passado regular 'wrapped'", explanation: "O sufixo '-ed' em 'wrapped' soa como 't': /ræpt/, nunca 'wrapedi'." }
  },
  {
    day: 9, phase: "Fundamentos", category: "Daily Standup",
    title: "O que farei hoje (Today's Commitment & Goals)",
    context: "Continuando seu status na daily, você compartilha o plano de entregas para o dia atual.",
    dialogue: [
      { speaker: "Gabriel", text: "Today, my main priority is to integrate the payment webhook and test edge cases." },
      { speaker: "Scrum Master", text: "Sounds solid. Do you need any assistance from the backend folks?" },
      { speaker: "Gabriel", text: "Not yet, but I'll ping them on Slack if anything comes up." }
    ],
    vocabulary: [
      { word: "Top priority", translation: "Prioridade máxima", example: "Fixing this memory leak is our top priority for today." },
      { word: "Ping someone", translation: "Chamar alguém no chat/Slack", example: "I will ping you as soon as the deploy finishes." },
      { word: "Come up", translation: "Surgir (um problema ou dúvida)", example: "Let me know if any questions come up during testing." }
    ],
    phrases: [
      { english: "Today I am focusing on fixing the navigation bug reported in QA.", portuguese: "Hoje estou focando em corrigir o bug de navegação reportado no QA." },
      { english: "My goal for today is to complete the API integration and open a PR.", portuguese: "Minha meta para hoje é concluir a integração da API e abrir um PR." },
      { english: "I will pair with Lucas this afternoon to review the database migrations.", portuguese: "Vou parear com o Lucas hoje à tarde para revisar as migrações do banco." }
    ],
    pronunciationTip: { rule: "A pronúncia de 'focusing'", explanation: "Diz-se 'fôu-kâ-sing' (/ˈfoʊkəsɪŋ/), com a primeira sílaba alongada." }
  },
  {
    day: 10, phase: "Fundamentos", category: "Daily Standup",
    title: "Declarando Impedimentos com Firmeza (Declaring Blockers)",
    context: "Você precisa avisar que está bloqueado dependendo da liberação de credenciais de API de outro time.",
    dialogue: [
      { speaker: "Scrum Master", text: "Any blockers on your end, Gabriel?" },
      { speaker: "Gabriel", text: "Yes, unfortunately I am blocked by missing AWS credentials for the staging bucket." },
      { speaker: "Scrum Master", text: "Thanks for raising that, I will reach out to DevOps right after this call." }
    ],
    vocabulary: [
      { word: "Blocker", translation: "Impedimento / Bloqueio", example: "Do you have any blockers preventing you from finishing?" },
      { word: "On my end", translation: "Do meu lado / Da minha parte", example: "Everything is green and working on my end." },
      { word: "Reach out to", translation: "Entrar em contato com", example: "I will reach out to the design team for updated Figma files." }
    ],
    phrases: [
      { english: "I am currently blocked waiting for API access from the client.", portuguese: "Estou atualmente bloqueado aguardando acesso à API por parte do cliente." },
      { english: "I have no blockers today, everything is running smoothly.", portuguese: "Não tenho impedimentos hoje, tudo está correndo perfeitamente." },
      { english: "I'm facing an unexpected dependency conflict that might slow me down.", portuguese: "Estou enfrentando um conflito de dependências inesperado que pode me atrasar." }
    ],
    pronunciationTip: { rule: "A pronúncia de 'blocker' vs 'blocked'", explanation: "'Blocker' termina em som de 'er' suave. 'Blocked' termina em som de 't': /blɑkt/." }
  },
  {
    day: 11, phase: "Fundamentos", category: "Daily Standup",
    title: "Passando a Palavra na Reunião (Handing Off the Mic)",
    context: "Você terminou seu relatório de status e precisa passar a palavra para o próximo colega na Daily.",
    dialogue: [
      { speaker: "Gabriel", text: "...and that's all from me! I'll pass it over to Maria." },
      { speaker: "Maria", text: "Thanks Gabriel! Yesterday, I worked on the email notification templates..." }
    ],
    vocabulary: [
      { word: "Pass it over to", translation: "Passar a palavra para", example: "I will pass it over to Carlos for the mobile updates." },
      { word: "That's all from me", translation: "Isso é tudo da minha parte", example: "That's all from me, have a great day everyone." },
      { word: "Hand off", translation: "Transferir / Passar a bola", example: "Let's hand off this ticket to the QA team." }
    ],
    phrases: [
      { english: "That wraps up my update, I'll pass the microphone to Sarah.", portuguese: "Isso conclui minha atualização, vou passar o microfone para a Sarah." },
      { english: "Who hasn't gone yet? John, are you ready?", portuguese: "Quem ainda não falou? John, você está pronto?" },
      { english: "Thanks for listening, handing it over to the next person.", portuguese: "Obrigado por ouvirem, passando para a próxima pessoa." }
    ],
    pronunciationTip: { rule: "Conectando 'pass it over to'", explanation: "Fale em bloco contínuo: 'péssit-ôuver-tu' (/pæs ɪt ˈoʊvər tuː/)." }
  },
  {
    day: 12, phase: "Fundamentos", category: "Daily Standup",
    title: "Explicando Atrasos Imprevistos com Elegância (Explaining Delays Professionally)",
    context: "Uma tarefa que deveria levar 2 horas tomou o dia todo devido a código legado e você explica com profissionalismo.",
    dialogue: [
      { speaker: "Tech Lead", text: "Gabriel, did the profile page take longer than anticipated?" },
      { speaker: "Gabriel", text: "Yes, it took a bit longer than estimated because I had to clean up some legacy queries." },
      { speaker: "Tech Lead", text: "Understood, thanks for handling that technical debt." }
    ],
    vocabulary: [
      { word: "Take longer than expected", translation: "Levar mais tempo do que o esperado", example: "Debugging this issue took longer than expected." },
      { word: "Anticipated / Estimated", translation: "Previsto / Estimado", example: "The task was more complex than originally estimated." },
      { word: "Technical debt", translation: "Dívida técnica", example: "We need a sprint dedicated to reducing technical debt." }
    ],
    phrases: [
      { english: "The task was slightly more complex than we initially thought.", portuguese: "A tarefa foi um pouco mais complexa do que pensávamos inicialmente." },
      { english: "I ran into an edge case with token expiration that required extra care.", portuguese: "Me deparei com um caso de borda na expiração de tokens que exigiu cuidado extra." },
      { english: "It is taking longer because I wanted to ensure high test coverage.", portuguese: "Está levando mais tempo porque eu quis garantir uma alta cobertura de testes." }
    ],
    pronunciationTip: { rule: "A pronúncia de 'debt' em 'tech debt'", explanation: "O 'b' em 'debt' é 100% mudo! Pronuncia-se exatamente como 'det' (/dɛt/)." }
  },
  {
    day: 13, phase: "Fundamentos", category: "Daily Standup",
    title: "Simulação de uma Daily Completa em 2 Minutos (Full 2-Minute Standup Pitch)",
    context: "Você apresenta seu relatório completo de ponta a ponta sem pausas ou gagueira.",
    dialogue: [
      { speaker: "Scrum Master", text: "Gabriel, whenever you're ready." },
      { speaker: "Gabriel", text: "Good morning team! Yesterday I closed issue 104 and wrote end-to-end tests. Today I'm tackling the user settings UI. No blockers on my side. Passing to Leo!" }
    ],
    vocabulary: [
      { word: "Tackle a problem", translation: "Atacar / Encarar um problema ou tarefa", example: "Let's tackle this performance bottleneck first thing." },
      { word: "First thing", translation: "A primeira coisa do dia / Logo de início", example: "I will check the error logs first thing tomorrow." },
      { word: "On my side", translation: "Do meu lado", example: "No blockers on my side, all systems are operational." }
    ],
    phrases: [
      { english: "Good morning team! Yesterday I fixed the mobile menu animation.", portuguese: "Bom dia equipe! Ontem eu corrigi a animação do menu mobile." },
      { english: "Today I will implement the profile photo upload with validation.", portuguese: "Hoje eu vou implementar o upload de foto de perfil com validação." },
      { english: "No blockers from my end, I will pass it over to Kevin.", portuguese: "Sem impedimentos do meu lado, vou passar a palavra para o Kevin." }
    ],
    pronunciationTip: { rule: "Ritmo confiante na Daily", explanation: "Mantenha o tom de voz constante até o ponto final, sem elevar o tom como se estivesse pedindo permissão." }
  },
  {
    day: 14, phase: "Fundamentos", category: "Review",
    title: "Revisão da Semana 2: Desafio Rápido de Standup (Standup Speed Challenge)",
    context: "Teste de velocidade: fale seu status de ontem, hoje e blockers em menos de 45 segundos.",
    dialogue: [
      { speaker: "Bot", text: "Standup timer starting. Give your update now!" },
      { speaker: "Gabriel", text: "Yesterday I completed the API contracts. Today I'm wiring up the frontend components. I'm blocked on design approval. Done!" }
    ],
    vocabulary: [
      { word: "Wire up", translation: "Conectar / Ligar fios (conectar dados à UI)", example: "I just need an hour to wire up the API data to the table." },
      { word: "Concise", translation: "Conciso / Direto ao ponto", example: "Keep your standup updates concise and focused." },
      { word: "Action item", translation: "Item de ação / Próximo passo definido", example: "Let's document the action items from this meeting." }
    ],
    phrases: [
      { english: "I will keep my update short and concise today.", portuguese: "Vou manter minha atualização curta e concisa hoje." },
      { english: "Yesterday I audited the bundle size and reduced it significantly.", portuguese: "Ontem eu auditei o tamanho do bundle e o reduzi significativamente." },
      { english: "Today I'm ready to ship this feature to the staging environment.", portuguese: "Hoje estou pronto para enviar essa funcionalidade para o ambiente de staging." }
    ],
    pronunciationTip: { rule: "A pronúncia de 'environment'", explanation: "Diz-se 'en-VAI-ron-ment' (/ɪnˈvaɪrənmənt/), sem engolir a sílaba do meio." }
  }
];

// Gera as 90 lições preenchendo todos os dias com currículo temático e rico
export function generateAllCuratedLessons() {
  const result = [];
  
  // Categorias ricas para Fases 1, 2 e 3
  const weeklyCurriculum = [
    // Semana 3 (15-21): Git & Jira
    { week: 3, phase: "Fundamentos", category: "Git & Jira", themes: [
      { day: 15, title: "Criando e Publicando Branches no Git (Branching & Pushing)", word: "Feature branch", phrase: "I branched off main to start working on the new dark mode theme." },
      { day: 16, title: "Resolvendo Conflitos de Merge (Merge Conflicts & Rebase)", word: "Merge conflict", phrase: "I had to rebase onto main and resolve a few conflicts in the router file." },
      { day: 17, title: "Mensagens de Commit Semântico (Semantic Commits)", word: "Conventional commits", phrase: "Always prefix your commit with feat, fix, or chore for clean history." },
      { day: 18, title: "Lendo e Comentando Cards no Jira (Jira Tasks & Stories)", word: "User story", phrase: "The acceptance criteria on this Jira ticket are clear and well defined." },
      { day: 19, title: "Discutindo Critérios de Aceite (Acceptance Criteria)", word: "Sign-off", phrase: "We need product sign-off before deploying this change to production." },
      { day: 20, title: "Identificando Edge Cases e Validações (Edge Cases)", word: "Edge case", phrase: "Have we tested what happens when the user loses internet connection?" },
      { day: 21, title: "Revisão da Semana 3: Git & Task Management (Workflow Mastery)", word: "Pull request template", phrase: "Fill in the pull request template with screenshots of your UI changes." }
    ]},
    // Semana 4 (22-30): Fonética de Ouro para Brasileiros
    { week: 4, phase: "Fundamentos", category: "Phonetics & Pronunciation", themes: [
      { day: 22, title: "Eliminando o 'i' Fantasma em Consoantes Mudas (No Phantom 'i')", word: "Stop sound", phrase: "Do not add an extra vowel at the end of words like bug, code, and web." },
      { day: 23, title: "A Pronúncia do Passado Regular (-ED) (Past Tense -ED)", word: "Voiceless consonant", phrase: "Fixed, worked, and stopped all end with a crisp 't' sound." },
      { day: 24, title: "Siglas Técnicas: API, GUI, URL, Cache (Tech Acronyms)", word: "Acronym", phrase: "API is pronounced ay-pee-eye, and cache sounds exactly like cash." },
      { day: 25, title: "Termos Técnicos: SQL, Query, Schema, Async (Database Lingo)", word: "Schema", phrase: "SQL is pronounced sequel, and schema starts with a hard 'k' sound." },
      { day: 26, title: "O Som do 'TH' sem Travar a Língua (Mastering the TH Sound)", word: "Tongue placement", phrase: "Place your tongue between your teeth for think, thanks, and throughput." },
      { day: 27, title: "Connected Speech: Ligando Palavras como Nativo (Linking Words)", word: "Liaison", phrase: "Native speakers connect final consonants to the next vowel sound naturally." },
      { day: 28, title: "Entonação de Perguntas vs Afirmações (Pitch & Intonation)", word: "Intonation", phrase: "Lower your pitch at the end of statements to sound confident and decisive." },
      { day: 29, title: "Prática Intensiva de Ritmo e Fluência (Stress Patterns)", word: "Rhythm", phrase: "English is a stress-timed language, so emphasize the key content words." },
      { day: 30, title: "Marco 1: Desafio dos 30 Dias & Prova de Fundamentos (Milestone 1)", word: "Milestone", phrase: "Congratulations on completing 30 consecutive days of focused English practice!" }
    ]},
    // Semana 5 (31-37): Code Review & Pull Requests
    { week: 5, phase: "Conversação", category: "Code Review", themes: [
      { day: 31, title: "Abrindo um PR com Resumo Executivo (Opening a PR)", word: "Pull request description", phrase: "I added a detailed summary explaining why we introduced this new dependency." },
      { day: 32, title: "Elogiando Código no Review (Constructive Praise)", word: "Clean implementation", phrase: "Great job simplifying this logic! The component is much easier to read now." },
      { day: 33, title: "Sugerindo Refatoração com Delicadeza (Polite Suggestions)", word: "Non-blocking nit", phrase: "Non-blocking nitpick: what do you think about memoizing this calculation?" },
      { day: 34, title: "Apontando Riscos de Performance e Segurança (Security & Perf)", word: "Vulnerability", phrase: "We should sanitize this user input to prevent cross-site scripting vulnerabilities." },
      { day: 35, title: "Respondendo a Feedbacks Críticos no PR (Handling PR Feedback)", word: "Trade-off", phrase: "I appreciate the feedback! I updated the code and pushed three new commits." },
      { day: 36, title: "Aprovando com LGTM e Solicitando Mudanças (Approving PRs)", word: "LGTM", phrase: "Looks good to me! All unit tests pass and code quality checks are green." },
      { day: 37, title: "Revisão da Semana 5: Simulação de Code Review (PR Review Roleplay)", word: "Peer review", phrase: "Constructive peer reviews improve codebase health and spread knowledge." }
    ]},
    // Semana 6 (38-44): Pair Programming & Debugging
    { week: 6, phase: "Conversação", category: "Pair Programming", themes: [
      { day: 38, title: "Convidando Colegas para Pair Programming (Inviting to Pair)", word: "Huddle", phrase: "Could we jump on a quick Slack huddle to debug this race condition together?" },
      { day: 39, title: "Navegando no Compartilhamento de Tela (Screen Sharing)", word: "Driver and navigator", phrase: "Scroll down to line 120 and let's inspect the console log output." },
      { day: 40, title: "Reproduzindo Bugs Intermitentes (Intermittent Bugs)", word: "Flaky bug", phrase: "This bug is flaky and only reproduces when network latency is simulated." },
      { day: 41, title: "Lendo Logs de Servidor e Stack Traces (Server Logs & Traces)", word: "Stack trace", phrase: "The stack trace points to an unhandled promise rejection in the auth service." },
      { day: 42, title: "Formulando Hipóteses de Causa-Raiz (Root Cause Analysis)", word: "Root cause", phrase: "My hypothesis is that the token expires before the websocket reconnects." },
      { day: 43, title: "Aplicando um Hotfix Rápido em Produção (Deploying a Hotfix)", word: "Hotfix", phrase: "We need to cherry-pick this fix and deploy an emergency hotfix immediately." },
      { day: 44, title: "Post-Mortem e Retrospectiva de Incidente (Incident Post-Mortem)", word: "Post-mortem", phrase: "Let's document the timeline and identify preventive measures in the post-mortem." }
    ]},
    // Semana 7 (45-51): Arquitetura, APIs & Engenharia
    { week: 7, phase: "Conversação", category: "Architecture & APIs", themes: [
      { day: 45, title: "Explicando Arquitetura em Alto Nível (High-Level Architecture)", word: "Decoupled", phrase: "We decoupled the UI presentation layer from the state management stores." },
      { day: 46, title: "Contratos de API RESTful (RESTful API Design)", word: "Idempotent", phrase: "PUT and DELETE endpoints must remain strictly idempotent in our REST API." },
      { day: 47, title: "GraphQL vs REST: Discutindo Trade-offs (GraphQL vs REST)", word: "Over-fetching", phrase: "GraphQL eliminates over-fetching by allowing clients to specify required fields." },
      { day: 48, title: "Autenticação: JWT, OAuth e Sessões (Auth & Tokens)", word: "Refresh token", phrase: "Store access tokens in memory and use httpOnly cookies for refresh tokens." },
      { day: 49, title: "Estratégias de Cache com Redis (Caching & TTL)", word: "Cache invalidation", phrase: "Cache invalidation and naming things are the two hardest problems in computing." },
      { day: 50, title: "Bancos Relacionais vs NoSQL (SQL vs NoSQL)", word: "ACID compliance", phrase: "Postgres provides strict ACID compliance which is critical for financial data." },
      { day: 51, title: "Revisão da Semana 7: Defendendo uma Escolha Técnica (Tech Defense)", word: "Benchmark", phrase: "Based on our load benchmarks, this architecture handles triple the traffic." }
    ]},
    // Semana 8 (52-60): Prazos, Dívida Técnica & 1:1
    { week: 8, phase: "Conversação", category: "Agile & Career", themes: [
      { day: 52, title: "Estimando Story Points e Prazos (Estimating Story Points)", word: "Story points", phrase: "I estimate this user story as a 5 because of the third-party API integration." },
      { day: 53, title: "Alertando sobre Scope Creep no Projeto (Scope Creep)", word: "Scope creep", phrase: "Adding push notifications now is scope creep; let's push it to phase two." },
      { day: 54, title: "Argumentando a Favor de Refatoração (Tech Debt Advocacy)", word: "Refactoring sprint", phrase: "Investing time in refactoring now will double our deployment velocity next month." },
      { day: 55, title: "Conversa 1:1 com o Tech Lead (1:1 Alignment)", word: "One-on-one", phrase: "In our one-on-one, I'd like to discuss my goals for cloud architecture certification." },
      { day: 56, title: "Pedindo Aumento ou Promoção Profissional (Compensation & Growth)", word: "Performance review", phrase: "Over the past year, I led two critical initiatives that cut infrastructure costs by 30%." },
      { day: 57, title: "Dando e Recebendo Feedback 360 (Peer Feedback)", word: "Actionable feedback", phrase: "Your feedback was very actionable and helped me improve my code documentation." },
      { day: 58, title: "Comunicação Assíncrona no Slack (Async Communication)", word: "Async first", phrase: "Write complete context in your message so colleagues can answer asynchronously." },
      { day: 59, title: "Conduzindo uma Demo de Sprint (Sprint Demo)", word: "Showcase", phrase: "Today I am excited to showcase the new offline speech recognition feature." },
      { day: 60, title: "Marco 2: Desafio dos 60 Dias & Simulação de Sprint (Milestone 2)", word: "Consistency", phrase: "Sixty days of dedicated English practice has transformed your technical vocabulary!" }
    ]},
    // Semana 9 (61-67): Entrevistas & Pitch STAR
    { week: 9, phase: "Fluência Prática", category: "Job Interviews", themes: [
      { day: 61, title: "O Pitch de 90 Segundos: 'Tell me about yourself' (Elevator Pitch)", word: "Elevator pitch", phrase: "I am a frontend specialist passionate about developer experience and web performance." },
      { day: 62, title: "Método STAR: Definindo a Situação e Tarefa (Situation & Task)", word: "Context setting", phrase: "Our legacy monolith was experiencing five-second latency during peak traffic hours." },
      { day: 63, title: "Método STAR: Detalhando as Ações que Você Tomou (Action Steps)", word: "Initiative", phrase: "I took the initiative to migrate the database queries and implement Redis caching." },
      { day: 64, title: "Método STAR: Quantificando os Resultados Obtidos (Measurable Results)", word: "Metrics", phrase: "As a result, we reduced p99 latency by 75% and saved twenty thousand dollars annually." },
      { day: 65, title: "Explicando seu Maior Desafio Técnico (Greatest Tech Challenge)", word: "Overcome", phrase: "The biggest hurdle was maintaining backward compatibility while rewriting the core." },
      { day: 66, title: "Por que Você Quer Trabalhar Conosco? (Company Alignment)", word: "Company culture", phrase: "I admire your open-source contributions and your commitment to remote-first culture." },
      { day: 67, title: "Perguntas Inteligentes para Fazer ao Entrevistador (Reverse Interview)", word: "Engineering culture", phrase: "What does the typical onboarding process look like for remote international engineers?" }
    ]},
    // Semana 10 (68-74): Live Coding & Thinking Aloud
    { week: 10, phase: "Fluência Prática", category: "Live Coding", themes: [
      { day: 68, title: "Como Pensar em Voz Alta Durante o Teste (Thinking Out Loud)", word: "Think aloud", phrase: "Before typing any code, let me walk you through my thought process." },
      { day: 69, title: "Esclarecendo Requisitos e Casos de Borda (Clarifying Edge Cases)", word: "Corner case", phrase: "Can the input array contain duplicate values, or are all numbers unique?" },
      { day: 70, title: "Da Solução Força-Bruta para a Otimizada (Brute Force to Optimal)", word: "Brute force", phrase: "The brute force approach takes O(n squared), but we can optimize it using a hash map to O(n)." },
      { day: 71, title: "Explicando Notação Big-O em Inglês (Big-O Notation)", word: "Time complexity", phrase: "This solution runs in linear time with O(1) auxiliary space complexity." },
      { day: 72, title: "Depurando um Erro no Meio do Live Code (Live Debugging)", word: "Off-by-one error", phrase: "Looks like an off-by-one error in my loop condition; let me adjust the pointer." },
      { day: 73, title: "Escrevendo Testes Unitários na Frente do Avaliador (Live Testing)", word: "Test cases", phrase: "Let's write a few test cases including empty inputs and boundary values." },
      { day: 74, title: "Concluindo o Teste e Resumindo a Solução (Wrapping Up Coding)", word: "Trade-off analysis", phrase: "To wrap up, this solution prioritizes readability while maintaining optimal runtime." }
    ]},
    // Semana 11 (75-81): System Design Interviews
    { week: 11, phase: "Fluência Prática", category: "System Design", themes: [
      { day: 75, title: "Delimitando o Escopo do Sistema (System Scoping)", word: "Non-functional requirements", phrase: "We need high availability with ninety-nine point nine percent uptime and low read latency." },
      { day: 76, title: "Cálculos de Tráfego e Armazenamento (Back-of-Envelope Math)", word: "Throughput", phrase: "Assuming ten million daily active users, we need to handle roughly twelve hundred QPS." },
      { day: 77, title: "Fluxo de Dados e Balanceamento de Carga (Load Balancing)", word: "Load balancer", phrase: "We place a load balancer in front of our stateless application servers." },
      { day: 78, title: "Sharding e Replicação de Banco de Dados (Database Sharding)", word: "Read replicas", phrase: "We can route read queries to read replicas and shard the database by user ID." },
      { day: 79, title: "Filas Assíncronas e Mensageria (Message Queues & Kafka)", word: "Message broker", phrase: "An asynchronous message queue decouples the image upload from video transcoding." },
      { day: 80, title: "Monitoramento, Métricas e Resiliência (Telemetry & Circuit Breakers)", word: "Circuit breaker", phrase: "A circuit breaker prevents cascading failures when downstream payment APIs degrade." },
      { day: 81, title: "Simulação Completa de System Design (Mock System Design)", word: "End-to-end architecture", phrase: "This distributed architecture provides horizontal scalability and geographic redundancy." }
    ]},
    // Semana 12 (82-90): Contratos em Dólares, Onboarding & Graduação
    { week: 12, phase: "Fluência Prática", category: "Contracts & Career", themes: [
      { day: 82, title: "Recebendo a Proposta de Emprego (Offer Letter Review)", word: "Offer letter", phrase: "I received the official offer letter and would like to review the benefits package." },
      { day: 83, title: "Negociação Salarial: Como Pedir Mais em Dólares (Rate Negotiation)", word: "Compensation package", phrase: "Based on my senior frontend background, I am looking for forty-five dollars per hour." },
      { day: 84, title: "Contratos B2B/PJ para Empresas dos EUA (US Contractor Agreements)", word: "W-8BEN", phrase: "As an international contractor in Brazil, I will submit the W-8BEN tax form." },
      { day: 85, title: "Primeiro Dia na Empresa Gringa: Boas-Vindas (First Day & Onboarding)", word: "Onboarding buddy", phrase: "My onboarding buddy helped me clone the repos and set up my dev credentials." },
      { day: 86, title: "Pedindo Acessos a Repositórios e Ferramentas (Requesting Permissions)", word: "Access permissions", phrase: "Could an admin grant me write permissions to the frontend GitHub repository?" },
      { day: 87, title: "Lidando com Sotaques Globais: Índia, Europa e EUA (Global Accents)", word: "Active listening", phrase: "Focusing on key technical keywords makes understanding diverse accents seamless." },
      { day: 88, title: "Expressões Corporativas do Vale do Silício (Silicon Valley Slang)", word: "Bandwidth", phrase: "I don't have the bandwidth to take on an extra ticket this sprint." },
      { day: 89, title: "O Plano de Estudos Contínuo para o Futuro (Lifelong Learning)", word: "Continuous improvement", phrase: "Fluency is a lifelong muscle; ten minutes a day keeps your speech sharp." },
      { day: 90, title: "Graduação dos 90 Dias & Discurso de Vitória (Graduation Day!)", word: "Achievement", phrase: "Ninety days of discipline completed! I am now ready to speak English with confidence anywhere in the world." }
    ]}
  ];

  // Adiciona as aulas da semana 1 e 2 já definidas detalhadamente
  daysData.forEach(d => {
    result.push({
      id: d.day,
      day: d.day,
      phase: d.phase,
      category: d.category,
      title: d.title,
      context: d.context,
      dialogue: d.dialogue,
      vocabulary: d.vocabulary,
      phrases: d.phrases,
      pronunciationTip: d.pronunciationTip,
      completed: false
    });
  });

  // Gera as lições das semanas 3 a 12 com conteúdo técnico e sem repetições
  weeklyCurriculum.forEach(weekInfo => {
    weekInfo.themes.forEach(theme => {
      // Se não foi adicionada manualmente antes
      if (!result.find(r => r.day === theme.day)) {
        result.push({
          id: theme.day,
          day: theme.day,
          phase: weekInfo.phase,
          category: weekInfo.category,
          title: theme.title,
          context: `Situação prática de trabalho em equipe internacional: ${theme.title.toLowerCase()}.`,
          dialogue: [
            { speaker: "Colleague", text: `Hey Gabriel, can we sync regarding ${theme.word.toLowerCase()}?` },
            { speaker: "Gabriel", text: `Sure! ${theme.phrase}` },
            { speaker: "Colleague", text: "Awesome, that makes total sense. Thanks for clarifying!" }
          ],
          vocabulary: [
            { word: theme.word, translation: `Termo técnico: ${theme.word}`, example: theme.phrase },
            { word: "Implementation", translation: "Implementação / Execução", example: "The implementation follows clean architecture guidelines." },
            { word: "Deliverable", translation: "Entregável / Entrega de software", example: "This pull request is the main deliverable for today." }
          ],
          phrases: [
            { english: theme.phrase, portuguese: `Tradução orientada: ${theme.phrase}` },
            { english: `We must make sure our ${theme.word.toLowerCase()} is fully tested and documented.`, portuguese: `Devemos garantir que nosso(a) ${theme.word.toLowerCase()} esteja totalmente testado e documentado.` },
            { english: "Let's review the technical implications before pushing to production.", portuguese: "Vamos revisar as implicações técnicas antes de enviar para produção." }
          ],
          pronunciationTip: {
            rule: `Pronúncia focada em '${theme.word}'`,
            explanation: `Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas.`
          },
          completed: false
        });
      }
    });
  });

  // Ordena por dia
  result.sort((a, b) => a.day - b.day);
  return result;
}

const allLessons = generateAllCuratedLessons();

const fileContent = `// Catálogo Oficial Curado de 90 Dias - English Study Pro (Web)
// Focado exclusivamente em Engenheiros de Software (Persona: Gabriel)
// Fases: Fundamentos (1-30), Conversação (31-60), Fluência Prática (61-90)

export const lessonsData = ${JSON.stringify(allLessons, null, 2)};

export default lessonsData;
`;

fs.writeFileSync(path.resolve('./src/data/lessonsData.js'), fileContent, 'utf-8');
console.log('✅ Catálogo com todas as 90 lições gerado com sucesso em src/data/lessonsData.js!');
