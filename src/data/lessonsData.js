// Catálogo Oficial Curado de 90 Dias - English Study Pro (Web)
// Focado exclusivamente em Engenheiros de Software (Persona: Gabriel)
// Fases: Fundamentos (1-30), Conversação (31-60), Fluência Prática (61-90)

export const lessonsData = [
  {
    "id": 1,
    "day": 1,
    "phase": "Fundamentos",
    "category": "Self-Introduction",
    "title": "Apresentação Pessoal & Stack (Self-Introduction & Tech Stack)",
    "context": "Você acabou de entrar na chamada com seu novo time e o gestor pede para você se apresentar rapidamente.",
    "dialogue": [
      {
        "speaker": "Team Lead",
        "text": "Welcome aboard! Why don't you introduce yourself to the team?"
      },
      {
        "speaker": "Gabriel",
        "text": "Hi everyone! I'm Gabriel, a full-stack developer with 4 years of experience specializing in Vue and Node."
      },
      {
        "speaker": "Team Lead",
        "text": "Great to have you here, Gabriel! Welcome!"
      }
    ],
    "vocabulary": [
      {
        "word": "Full-stack developer",
        "translation": "Desenvolvedor full-stack",
        "example": "I work as a full-stack developer focusing on web applications."
      },
      {
        "word": "Welcome aboard",
        "translation": "Bem-vindo a bordo / ao time",
        "example": "Welcome aboard! Let's get your environment set up."
      },
      {
        "word": "Specialize in",
        "translation": "Especializar-se em",
        "example": "I specialize in front-end architecture and state management."
      }
    ],
    "phrases": [
      {
        "english": "Hello everyone, my name is Gabriel and I am a software developer.",
        "portuguese": "Olá a todos, meu nome é Gabriel e eu sou um desenvolvedor de software."
      },
      {
        "english": "I have been working with modern JavaScript and Vue for several years.",
        "portuguese": "Eu trabalho com JavaScript moderno e Vue há vários anos."
      },
      {
        "english": "I'm really excited to collaborate with this team.",
        "portuguese": "Estou muito empolgado para colaborar com este time."
      }
    ],
    "pronunciationTip": {
      "rule": "Eliminar o 'i' no final de 'developer'",
      "explanation": "A terminação 'er' deve soar neutra (/dɪˈvɛləpər/), sem transformar o 'p' em 'pi'."
    },
    "completed": false
  },
  {
    "id": 2,
    "day": 2,
    "phase": "Fundamentos",
    "category": "Roles & Seniority",
    "title": "Falando sobre Cargo e Experiência (Roles & Seniority)",
    "context": "Durante um bate-papo informal com outro desenvolvedor, você explica quais tecnologias já utilizou no passado.",
    "dialogue": [
      {
        "speaker": "Sarah",
        "text": "How long have you been writing TypeScript?"
      },
      {
        "speaker": "Gabriel",
        "text": "I've been using TypeScript in production for about three years now."
      },
      {
        "speaker": "Sarah",
        "text": "Awesome! We have a few complex types in our codebase that you can help us with."
      }
    ],
    "vocabulary": [
      {
        "word": "Seniority",
        "translation": "Senioridade / Nível de experiência",
        "example": "Our team has engineers across different seniority levels."
      },
      {
        "word": "In production",
        "translation": "Em produção (código real rodando)",
        "example": "We have been running this microservice in production for months."
      },
      {
        "word": "Codebase",
        "translation": "Base de código do projeto",
        "example": "Our codebase is well organized with automated tests."
      }
    ],
    "phrases": [
      {
        "english": "I have hands-on experience building scalable web APIs.",
        "portuguese": "Eu tenho experiência prática construindo APIs web escaláveis."
      },
      {
        "english": "In my previous role, I maintained both frontend and backend services.",
        "portuguese": "No meu cargo anterior, eu mantinha serviços de frontend e backend."
      },
      {
        "english": "I am comfortable working with agile methodologies like Scrum.",
        "portuguese": "Eu me sinto confortável trabalhando com metodologias ágeis como Scrum."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia correta de 'role'",
      "explanation": "A palavra 'role' (cargo/papel) tem som de 'ô' fechado (/roʊl/), diferente de 'raw'."
    },
    "completed": false
  },
  {
    "id": 3,
    "day": 3,
    "phase": "Fundamentos",
    "category": "Workspace",
    "title": "Descrevendo seu Setup e Home Office (Workstation & Equipment)",
    "context": "Um colega pergunta sobre seu monitor e teclado no canal de chat da empresa.",
    "dialogue": [
      {
        "speaker": "Alex",
        "text": "Are you running macOS or Linux on your workstation?"
      },
      {
        "speaker": "Gabriel",
        "text": "I run Linux on my main machine with a dual monitor setup."
      },
      {
        "speaker": "Alex",
        "text": "Nice! Linux is super lightweight for docker containers."
      }
    ],
    "vocabulary": [
      {
        "word": "Workstation",
        "translation": "Estação de trabalho / Computador",
        "example": "My workstation has 32 gigabytes of RAM for local dev."
      },
      {
        "word": "Dual monitor",
        "translation": "Monitor duplo",
        "example": "A dual monitor setup makes reviewing pull requests much faster."
      },
      {
        "word": "Lightweight",
        "translation": "Leve / Que consome poucos recursos",
        "example": "This library is lightweight and has zero dependencies."
      }
    ],
    "phrases": [
      {
        "english": "I work remotely from my home office with high-speed internet.",
        "portuguese": "Eu trabalho remotamente do meu home office com internet de alta velocidade."
      },
      {
        "english": "I use an external mechanical keyboard and a noise-canceling headset.",
        "portuguese": "Eu uso um teclado mecânico externo e um headset com cancelamento de ruído."
      },
      {
        "english": "My computer is fully configured with Node and Docker.",
        "portuguese": "Meu computador está totalmente configurado com Node e Docker."
      }
    ],
    "pronunciationTip": {
      "rule": "Conexão de sons em 'high-speed internet'",
      "explanation": "O 'd' em 'speed' se conecta suavemente ao 'i' de 'internet': /spiːd‿ˈɪntərnɛt/."
    },
    "completed": false
  },
  {
    "id": 4,
    "day": 4,
    "phase": "Fundamentos",
    "category": "Virtual Meetings",
    "title": "Problemas de Conexão e Áudio no Zoom/Meet (Tech Glitches in Calls)",
    "context": "Sua câmera ou microfone trava durante uma chamada de equipe e você precisa avisar rapidamente.",
    "dialogue": [
      {
        "speaker": "Manager",
        "text": "Gabriel, are you talking? We can't hear you."
      },
      {
        "speaker": "Gabriel",
        "text": "Sorry about that! I was on mute. Can you hear me clearly now?"
      },
      {
        "speaker": "Manager",
        "text": "Yes, loud and clear! Go ahead."
      }
    ],
    "vocabulary": [
      {
        "word": "You're on mute",
        "translation": "Seu microfone está mutado",
        "example": "Hey, you're on mute, unmute yourself please."
      },
      {
        "word": "Loud and clear",
        "translation": "Alto e bom som / Em alto e bom som",
        "example": "Your microphone is loud and clear now."
      },
      {
        "word": "You froze",
        "translation": "Sua imagem/vídeo travou",
        "example": "You froze for a few seconds, could you repeat that?"
      }
    ],
    "phrases": [
      {
        "english": "Sorry, my microphone was muted. Can you hear me now?",
        "portuguese": "Desculpe, meu microfone estava mutado. Vocês me ouvem agora?"
      },
      {
        "english": "Your screen is loading, let me know when you can see my slide.",
        "portuguese": "Sua tela está carregando, me avise quando conseguir ver meu slide."
      },
      {
        "english": "I think my connection is lagging, let me turn off my video.",
        "portuguese": "Acho que minha conexão está com lag, vou desligar meu vídeo."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia de 'mute' e 'muted'",
      "explanation": "A palavra 'mute' tem som de 'm-iút' (/mjuːt/), nunca 'mutxi'."
    },
    "completed": false
  },
  {
    "id": 5,
    "day": 5,
    "phase": "Fundamentos",
    "category": "Remote Routine",
    "title": "Rotina de Trabalho Remoto e Fusos Horários (Remote Routine & Timezones)",
    "context": "Você combina o horário de uma reunião com um colega em Nova York (EST) ou Londres (GMT).",
    "dialogue": [
      {
        "speaker": "David",
        "text": "What timezone are you in, Gabriel?"
      },
      {
        "speaker": "Gabriel",
        "text": "I'm in Brasília Time (BRT), which is currently one hour ahead of Eastern Time."
      },
      {
        "speaker": "David",
        "text": "Perfect, that gives us plenty of overlap during normal business hours."
      }
    ],
    "vocabulary": [
      {
        "word": "Timezone",
        "translation": "Fuso horário",
        "example": "Our team spans across three different timezones."
      },
      {
        "word": "Overlap",
        "translation": "Horas em comum / Coincidência de horários",
        "example": "We have four hours of overlap between Brazil and Europe."
      },
      {
        "word": "Ahead of",
        "translation": "À frente de (fuso mais adiantado)",
        "example": "London is three hours ahead of São Paulo."
      }
    ],
    "phrases": [
      {
        "english": "I am available between 9 AM and 6 PM in my local time.",
        "portuguese": "Estou disponível entre 9h e 18h no meu horário local."
      },
      {
        "english": "Let's schedule our meeting during our timezone overlap window.",
        "portuguese": "Vamos agendar nossa reunião na nossa janela de sobreposição de fusos."
      },
      {
        "english": "I usually log on early to sync with European teammates.",
        "portuguese": "Eu costumo entrar mais cedo para sincronizar com os colegas da Europa."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia de 'schedule'",
      "explanation": "No inglês americano (US), soa 'skédjul' (/ˈskɛdʒuːl/). No britânico (UK), soa 'chédjul'."
    },
    "completed": false
  },
  {
    "id": 6,
    "day": 6,
    "phase": "Fundamentos",
    "category": "Small Talk",
    "title": "Quebra-Gelo Casual e Small Talk (Casual Small Talk & Icebreakers)",
    "context": "Os primeiros 2 minutos antes de a reunião começar oficialmente enquanto todos entram na sala virtual.",
    "dialogue": [
      {
        "speaker": "Emma",
        "text": "Hey Gabriel! How was your weekend?"
      },
      {
        "speaker": "Gabriel",
        "text": "It was pretty relaxing! The weather was great, so I spent some time outdoors. How about yours?"
      },
      {
        "speaker": "Emma",
        "text": "Same here, watched some football and caught up on rest."
      }
    ],
    "vocabulary": [
      {
        "word": "Small talk",
        "translation": "Conversa fiada amigável / Quebra-gelo",
        "example": "A few minutes of small talk builds great rapport with colleagues."
      },
      {
        "word": "Catch up on",
        "translation": "Colocar em dia / Recuperar",
        "example": "I used Sunday to catch up on sleep."
      },
      {
        "word": "Pretty good / Pretty relaxing",
        "translation": "Bem bom / Bastante relaxante",
        "example": "The project demo went pretty well today."
      }
    ],
    "phrases": [
      {
        "english": "How has your week been going so far?",
        "portuguese": "Como tem sido a sua semana até agora?"
      },
      {
        "english": "Any exciting plans for the upcoming weekend?",
        "portuguese": "Algum plano empolgante para o próximo fim de semana?"
      },
      {
        "english": "It has been quite rainy here today, but the coffee helps!",
        "portuguese": "Tem chovido bastante aqui hoje, mas o café ajuda!"
      }
    ],
    "pronunciationTip": {
      "rule": "O som de 'comfortable' e 'weather'",
      "explanation": "Em 'weather', o 'th' vibra as cordas vocais (/ˈwɛðər/). Diga 'uédher'."
    },
    "completed": false
  },
  {
    "id": 7,
    "day": 7,
    "phase": "Fundamentos",
    "category": "Review",
    "title": "Revisão da Semana 1 & Consolidação da Fala (Week 1 Review & Fluency Check)",
    "context": "Consolidação de apresentações, setup e rotina com teste de fala contínua de 60 segundos.",
    "dialogue": [
      {
        "speaker": "Coach",
        "text": "Ready for your weekly fluency check, Gabriel?"
      },
      {
        "speaker": "Gabriel",
        "text": "Yes! I'm ready to introduce myself and describe my workflow without hesitating."
      },
      {
        "speaker": "Coach",
        "text": "Awesome! Let's hear your one-minute introduction."
      }
    ],
    "vocabulary": [
      {
        "word": "Hesitate",
        "translation": "Hesitar / Ficar travado",
        "example": "Don't hesitate to ask questions if anything is unclear."
      },
      {
        "word": "Fluency",
        "translation": "Fluência (capacidade de falar continuamente)",
        "example": "Daily practice of 15 minutes is the key to speech fluency."
      },
      {
        "word": "Without pause",
        "translation": "Sem pausas longas",
        "example": "Try speaking the entire sentence without pauses."
      }
    ],
    "phrases": [
      {
        "english": "I am a web engineer dedicated to building performant interfaces.",
        "portuguese": "Eu sou um engenheiro web dedicado a construir interfaces de alta performance."
      },
      {
        "english": "I work effectively in distributed teams across multiple countries.",
        "portuguese": "Eu trabalho com eficácia em equipes distribuídas por múltiplos países."
      },
      {
        "english": "Consistent practice every single day builds lasting confidence.",
        "portuguese": "Prática consistente todos os dias constrói confiança duradoura."
      }
    ],
    "pronunciationTip": {
      "rule": "Ritmo contínuo sem 'ééé...'",
      "explanation": "Substitua pausas com 'ééé' por pausas silenciosas ou expressões de transição como 'Well...', 'You see...'."
    },
    "completed": false
  },
  {
    "id": 8,
    "day": 8,
    "phase": "Fundamentos",
    "category": "Daily Standup",
    "title": "O que fiz ontem (Reporting Yesterday's Progress)",
    "context": "É sua vez de falar na reunião diária e você resume o que concluiu no dia anterior.",
    "dialogue": [
      {
        "speaker": "Scrum Master",
        "text": "Gabriel, you're up! What did you get done yesterday?"
      },
      {
        "speaker": "Gabriel",
        "text": "Yesterday, I finished implementing the user authentication flow and wrote unit tests for the token refresh logic."
      },
      {
        "speaker": "Scrum Master",
        "text": "Great progress! Did you push the branch?"
      }
    ],
    "vocabulary": [
      {
        "word": "You're up",
        "translation": "É a sua vez (na fila/reunião)",
        "example": "You're up next, Gabriel, whenever you are ready."
      },
      {
        "word": "Get done",
        "translation": "Concluir / Realizar",
        "example": "We managed to get a lot done before the release."
      },
      {
        "word": "Wrap up",
        "translation": "Finalizar / Concluir uma tarefa",
        "example": "I am wrapping up the bug fix this morning."
      }
    ],
    "phrases": [
      {
        "english": "Yesterday I wrapped up the responsive layout for the checkout page.",
        "portuguese": "Ontem eu finalizei o layout responsivo para a página de checkout."
      },
      {
        "english": "I spent most of the day refactoring the authentication store.",
        "portuguese": "Passei a maior parte do dia refatorando a store de autenticação."
      },
      {
        "english": "I opened a pull request with the new component library.",
        "portuguese": "Eu abri um pull request com a nova biblioteca de componentes."
      }
    ],
    "pronunciationTip": {
      "rule": "Som do passado regular 'wrapped'",
      "explanation": "O sufixo '-ed' em 'wrapped' soa como 't': /ræpt/, nunca 'wrapedi'."
    },
    "completed": false
  },
  {
    "id": 9,
    "day": 9,
    "phase": "Fundamentos",
    "category": "Daily Standup",
    "title": "O que farei hoje (Today's Commitment & Goals)",
    "context": "Continuando seu status na daily, você compartilha o plano de entregas para o dia atual.",
    "dialogue": [
      {
        "speaker": "Gabriel",
        "text": "Today, my main priority is to integrate the payment webhook and test edge cases."
      },
      {
        "speaker": "Scrum Master",
        "text": "Sounds solid. Do you need any assistance from the backend folks?"
      },
      {
        "speaker": "Gabriel",
        "text": "Not yet, but I'll ping them on Slack if anything comes up."
      }
    ],
    "vocabulary": [
      {
        "word": "Top priority",
        "translation": "Prioridade máxima",
        "example": "Fixing this memory leak is our top priority for today."
      },
      {
        "word": "Ping someone",
        "translation": "Chamar alguém no chat/Slack",
        "example": "I will ping you as soon as the deploy finishes."
      },
      {
        "word": "Come up",
        "translation": "Surgir (um problema ou dúvida)",
        "example": "Let me know if any questions come up during testing."
      }
    ],
    "phrases": [
      {
        "english": "Today I am focusing on fixing the navigation bug reported in QA.",
        "portuguese": "Hoje estou focando em corrigir o bug de navegação reportado no QA."
      },
      {
        "english": "My goal for today is to complete the API integration and open a PR.",
        "portuguese": "Minha meta para hoje é concluir a integração da API e abrir um PR."
      },
      {
        "english": "I will pair with Lucas this afternoon to review the database migrations.",
        "portuguese": "Vou parear com o Lucas hoje à tarde para revisar as migrações do banco."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia de 'focusing'",
      "explanation": "Diz-se 'fôu-kâ-sing' (/ˈfoʊkəsɪŋ/), com a primeira sílaba alongada."
    },
    "completed": false
  },
  {
    "id": 10,
    "day": 10,
    "phase": "Fundamentos",
    "category": "Daily Standup",
    "title": "Declarando Impedimentos com Firmeza (Declaring Blockers)",
    "context": "Você precisa avisar que está bloqueado dependendo da liberação de credenciais de API de outro time.",
    "dialogue": [
      {
        "speaker": "Scrum Master",
        "text": "Any blockers on your end, Gabriel?"
      },
      {
        "speaker": "Gabriel",
        "text": "Yes, unfortunately I am blocked by missing AWS credentials for the staging bucket."
      },
      {
        "speaker": "Scrum Master",
        "text": "Thanks for raising that, I will reach out to DevOps right after this call."
      }
    ],
    "vocabulary": [
      {
        "word": "Blocker",
        "translation": "Impedimento / Bloqueio",
        "example": "Do you have any blockers preventing you from finishing?"
      },
      {
        "word": "On my end",
        "translation": "Do meu lado / Da minha parte",
        "example": "Everything is green and working on my end."
      },
      {
        "word": "Reach out to",
        "translation": "Entrar em contato com",
        "example": "I will reach out to the design team for updated Figma files."
      }
    ],
    "phrases": [
      {
        "english": "I am currently blocked waiting for API access from the client.",
        "portuguese": "Estou atualmente bloqueado aguardando acesso à API por parte do cliente."
      },
      {
        "english": "I have no blockers today, everything is running smoothly.",
        "portuguese": "Não tenho impedimentos hoje, tudo está correndo perfeitamente."
      },
      {
        "english": "I'm facing an unexpected dependency conflict that might slow me down.",
        "portuguese": "Estou enfrentando um conflito de dependências inesperado que pode me atrasar."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia de 'blocker' vs 'blocked'",
      "explanation": "'Blocker' termina em som de 'er' suave. 'Blocked' termina em som de 't': /blɑkt/."
    },
    "completed": false
  },
  {
    "id": 11,
    "day": 11,
    "phase": "Fundamentos",
    "category": "Daily Standup",
    "title": "Passando a Palavra na Reunião (Handing Off the Mic)",
    "context": "Você terminou seu relatório de status e precisa passar a palavra para o próximo colega na Daily.",
    "dialogue": [
      {
        "speaker": "Gabriel",
        "text": "...and that's all from me! I'll pass it over to Maria."
      },
      {
        "speaker": "Maria",
        "text": "Thanks Gabriel! Yesterday, I worked on the email notification templates..."
      }
    ],
    "vocabulary": [
      {
        "word": "Pass it over to",
        "translation": "Passar a palavra para",
        "example": "I will pass it over to Carlos for the mobile updates."
      },
      {
        "word": "That's all from me",
        "translation": "Isso é tudo da minha parte",
        "example": "That's all from me, have a great day everyone."
      },
      {
        "word": "Hand off",
        "translation": "Transferir / Passar a bola",
        "example": "Let's hand off this ticket to the QA team."
      }
    ],
    "phrases": [
      {
        "english": "That wraps up my update, I'll pass the microphone to Sarah.",
        "portuguese": "Isso conclui minha atualização, vou passar o microfone para a Sarah."
      },
      {
        "english": "Who hasn't gone yet? John, are you ready?",
        "portuguese": "Quem ainda não falou? John, você está pronto?"
      },
      {
        "english": "Thanks for listening, handing it over to the next person.",
        "portuguese": "Obrigado por ouvirem, passando para a próxima pessoa."
      }
    ],
    "pronunciationTip": {
      "rule": "Conectando 'pass it over to'",
      "explanation": "Fale em bloco contínuo: 'péssit-ôuver-tu' (/pæs ɪt ˈoʊvər tuː/)."
    },
    "completed": false
  },
  {
    "id": 12,
    "day": 12,
    "phase": "Fundamentos",
    "category": "Daily Standup",
    "title": "Explicando Atrasos Imprevistos com Elegância (Explaining Delays Professionally)",
    "context": "Uma tarefa que deveria levar 2 horas tomou o dia todo devido a código legado e você explica com profissionalismo.",
    "dialogue": [
      {
        "speaker": "Tech Lead",
        "text": "Gabriel, did the profile page take longer than anticipated?"
      },
      {
        "speaker": "Gabriel",
        "text": "Yes, it took a bit longer than estimated because I had to clean up some legacy queries."
      },
      {
        "speaker": "Tech Lead",
        "text": "Understood, thanks for handling that technical debt."
      }
    ],
    "vocabulary": [
      {
        "word": "Take longer than expected",
        "translation": "Levar mais tempo do que o esperado",
        "example": "Debugging this issue took longer than expected."
      },
      {
        "word": "Anticipated / Estimated",
        "translation": "Previsto / Estimado",
        "example": "The task was more complex than originally estimated."
      },
      {
        "word": "Technical debt",
        "translation": "Dívida técnica",
        "example": "We need a sprint dedicated to reducing technical debt."
      }
    ],
    "phrases": [
      {
        "english": "The task was slightly more complex than we initially thought.",
        "portuguese": "A tarefa foi um pouco mais complexa do que pensávamos inicialmente."
      },
      {
        "english": "I ran into an edge case with token expiration that required extra care.",
        "portuguese": "Me deparei com um caso de borda na expiração de tokens que exigiu cuidado extra."
      },
      {
        "english": "It is taking longer because I wanted to ensure high test coverage.",
        "portuguese": "Está levando mais tempo porque eu quis garantir uma alta cobertura de testes."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia de 'debt' em 'tech debt'",
      "explanation": "O 'b' em 'debt' é 100% mudo! Pronuncia-se exatamente como 'det' (/dɛt/)."
    },
    "completed": false
  },
  {
    "id": 13,
    "day": 13,
    "phase": "Fundamentos",
    "category": "Daily Standup",
    "title": "Simulação de uma Daily Completa em 2 Minutos (Full 2-Minute Standup Pitch)",
    "context": "Você apresenta seu relatório completo de ponta a ponta sem pausas ou gagueira.",
    "dialogue": [
      {
        "speaker": "Scrum Master",
        "text": "Gabriel, whenever you're ready."
      },
      {
        "speaker": "Gabriel",
        "text": "Good morning team! Yesterday I closed issue 104 and wrote end-to-end tests. Today I'm tackling the user settings UI. No blockers on my side. Passing to Leo!"
      }
    ],
    "vocabulary": [
      {
        "word": "Tackle a problem",
        "translation": "Atacar / Encarar um problema ou tarefa",
        "example": "Let's tackle this performance bottleneck first thing."
      },
      {
        "word": "First thing",
        "translation": "A primeira coisa do dia / Logo de início",
        "example": "I will check the error logs first thing tomorrow."
      },
      {
        "word": "On my side",
        "translation": "Do meu lado",
        "example": "No blockers on my side, all systems are operational."
      }
    ],
    "phrases": [
      {
        "english": "Good morning team! Yesterday I fixed the mobile menu animation.",
        "portuguese": "Bom dia equipe! Ontem eu corrigi a animação do menu mobile."
      },
      {
        "english": "Today I will implement the profile photo upload with validation.",
        "portuguese": "Hoje eu vou implementar o upload de foto de perfil com validação."
      },
      {
        "english": "No blockers from my end, I will pass it over to Kevin.",
        "portuguese": "Sem impedimentos do meu lado, vou passar a palavra para o Kevin."
      }
    ],
    "pronunciationTip": {
      "rule": "Ritmo confiante na Daily",
      "explanation": "Mantenha o tom de voz constante até o ponto final, sem elevar o tom como se estivesse pedindo permissão."
    },
    "completed": false
  },
  {
    "id": 14,
    "day": 14,
    "phase": "Fundamentos",
    "category": "Review",
    "title": "Revisão da Semana 2: Desafio Rápido de Standup (Standup Speed Challenge)",
    "context": "Teste de velocidade: fale seu status de ontem, hoje e blockers em menos de 45 segundos.",
    "dialogue": [
      {
        "speaker": "Bot",
        "text": "Standup timer starting. Give your update now!"
      },
      {
        "speaker": "Gabriel",
        "text": "Yesterday I completed the API contracts. Today I'm wiring up the frontend components. I'm blocked on design approval. Done!"
      }
    ],
    "vocabulary": [
      {
        "word": "Wire up",
        "translation": "Conectar / Ligar fios (conectar dados à UI)",
        "example": "I just need an hour to wire up the API data to the table."
      },
      {
        "word": "Concise",
        "translation": "Conciso / Direto ao ponto",
        "example": "Keep your standup updates concise and focused."
      },
      {
        "word": "Action item",
        "translation": "Item de ação / Próximo passo definido",
        "example": "Let's document the action items from this meeting."
      }
    ],
    "phrases": [
      {
        "english": "I will keep my update short and concise today.",
        "portuguese": "Vou manter minha atualização curta e concisa hoje."
      },
      {
        "english": "Yesterday I audited the bundle size and reduced it significantly.",
        "portuguese": "Ontem eu auditei o tamanho do bundle e o reduzi significativamente."
      },
      {
        "english": "Today I'm ready to ship this feature to the staging environment.",
        "portuguese": "Hoje estou pronto para enviar essa funcionalidade para o ambiente de staging."
      }
    ],
    "pronunciationTip": {
      "rule": "A pronúncia de 'environment'",
      "explanation": "Diz-se 'en-VAI-ron-ment' (/ɪnˈvaɪrənmənt/), sem engolir a sílaba do meio."
    },
    "completed": false
  },
  {
    "id": 15,
    "day": 15,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Criando e Publicando Branches no Git (Branching & Pushing)",
    "context": "Situação prática de trabalho em equipe internacional: criando e publicando branches no git (branching & pushing).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding feature branch?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I branched off main to start working on the new dark mode theme."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Feature branch",
        "translation": "Termo técnico: Feature branch",
        "example": "I branched off main to start working on the new dark mode theme."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I branched off main to start working on the new dark mode theme.",
        "portuguese": "Tradução orientada: I branched off main to start working on the new dark mode theme."
      },
      {
        "english": "We must make sure our feature branch is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) feature branch esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Feature branch'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 16,
    "day": 16,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Resolvendo Conflitos de Merge (Merge Conflicts & Rebase)",
    "context": "Situação prática de trabalho em equipe internacional: resolvendo conflitos de merge (merge conflicts & rebase).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding merge conflict?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I had to rebase onto main and resolve a few conflicts in the router file."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Merge conflict",
        "translation": "Termo técnico: Merge conflict",
        "example": "I had to rebase onto main and resolve a few conflicts in the router file."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I had to rebase onto main and resolve a few conflicts in the router file.",
        "portuguese": "Tradução orientada: I had to rebase onto main and resolve a few conflicts in the router file."
      },
      {
        "english": "We must make sure our merge conflict is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) merge conflict esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Merge conflict'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 17,
    "day": 17,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Mensagens de Commit Semântico (Semantic Commits)",
    "context": "Situação prática de trabalho em equipe internacional: mensagens de commit semântico (semantic commits).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding conventional commits?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Always prefix your commit with feat, fix, or chore for clean history."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Conventional commits",
        "translation": "Termo técnico: Conventional commits",
        "example": "Always prefix your commit with feat, fix, or chore for clean history."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Always prefix your commit with feat, fix, or chore for clean history.",
        "portuguese": "Tradução orientada: Always prefix your commit with feat, fix, or chore for clean history."
      },
      {
        "english": "We must make sure our conventional commits is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) conventional commits esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Conventional commits'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 18,
    "day": 18,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Lendo e Comentando Cards no Jira (Jira Tasks & Stories)",
    "context": "Situação prática de trabalho em equipe internacional: lendo e comentando cards no jira (jira tasks & stories).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding user story?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! The acceptance criteria on this Jira ticket are clear and well defined."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "User story",
        "translation": "Termo técnico: User story",
        "example": "The acceptance criteria on this Jira ticket are clear and well defined."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "The acceptance criteria on this Jira ticket are clear and well defined.",
        "portuguese": "Tradução orientada: The acceptance criteria on this Jira ticket are clear and well defined."
      },
      {
        "english": "We must make sure our user story is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) user story esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'User story'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 19,
    "day": 19,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Discutindo Critérios de Aceite (Acceptance Criteria)",
    "context": "Situação prática de trabalho em equipe internacional: discutindo critérios de aceite (acceptance criteria).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding sign-off?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We need product sign-off before deploying this change to production."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Sign-off",
        "translation": "Termo técnico: Sign-off",
        "example": "We need product sign-off before deploying this change to production."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We need product sign-off before deploying this change to production.",
        "portuguese": "Tradução orientada: We need product sign-off before deploying this change to production."
      },
      {
        "english": "We must make sure our sign-off is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) sign-off esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Sign-off'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 20,
    "day": 20,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Identificando Edge Cases e Validações (Edge Cases)",
    "context": "Situação prática de trabalho em equipe internacional: identificando edge cases e validações (edge cases).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding edge case?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Have we tested what happens when the user loses internet connection?"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Edge case",
        "translation": "Termo técnico: Edge case",
        "example": "Have we tested what happens when the user loses internet connection?"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Have we tested what happens when the user loses internet connection?",
        "portuguese": "Tradução orientada: Have we tested what happens when the user loses internet connection?"
      },
      {
        "english": "We must make sure our edge case is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) edge case esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Edge case'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 21,
    "day": 21,
    "phase": "Fundamentos",
    "category": "Git & Jira",
    "title": "Revisão da Semana 3: Git & Task Management (Workflow Mastery)",
    "context": "Situação prática de trabalho em equipe internacional: revisão da semana 3: git & task management (workflow mastery).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding pull request template?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Fill in the pull request template with screenshots of your UI changes."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Pull request template",
        "translation": "Termo técnico: Pull request template",
        "example": "Fill in the pull request template with screenshots of your UI changes."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Fill in the pull request template with screenshots of your UI changes.",
        "portuguese": "Tradução orientada: Fill in the pull request template with screenshots of your UI changes."
      },
      {
        "english": "We must make sure our pull request template is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) pull request template esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Pull request template'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 22,
    "day": 22,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Eliminando o 'i' Fantasma em Consoantes Mudas (No Phantom 'i')",
    "context": "Situação prática de trabalho em equipe internacional: eliminando o 'i' fantasma em consoantes mudas (no phantom 'i').",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding stop sound?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Do not add an extra vowel at the end of words like bug, code, and web."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Stop sound",
        "translation": "Termo técnico: Stop sound",
        "example": "Do not add an extra vowel at the end of words like bug, code, and web."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Do not add an extra vowel at the end of words like bug, code, and web.",
        "portuguese": "Tradução orientada: Do not add an extra vowel at the end of words like bug, code, and web."
      },
      {
        "english": "We must make sure our stop sound is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) stop sound esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Stop sound'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 23,
    "day": 23,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "A Pronúncia do Passado Regular (-ED) (Past Tense -ED)",
    "context": "Situação prática de trabalho em equipe internacional: a pronúncia do passado regular (-ed) (past tense -ed).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding voiceless consonant?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Fixed, worked, and stopped all end with a crisp 't' sound."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Voiceless consonant",
        "translation": "Termo técnico: Voiceless consonant",
        "example": "Fixed, worked, and stopped all end with a crisp 't' sound."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Fixed, worked, and stopped all end with a crisp 't' sound.",
        "portuguese": "Tradução orientada: Fixed, worked, and stopped all end with a crisp 't' sound."
      },
      {
        "english": "We must make sure our voiceless consonant is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) voiceless consonant esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Voiceless consonant'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 24,
    "day": 24,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Siglas Técnicas: API, GUI, URL, Cache (Tech Acronyms)",
    "context": "Situação prática de trabalho em equipe internacional: siglas técnicas: api, gui, url, cache (tech acronyms).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding acronym?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! API is pronounced ay-pee-eye, and cache sounds exactly like cash."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Acronym",
        "translation": "Termo técnico: Acronym",
        "example": "API is pronounced ay-pee-eye, and cache sounds exactly like cash."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "API is pronounced ay-pee-eye, and cache sounds exactly like cash.",
        "portuguese": "Tradução orientada: API is pronounced ay-pee-eye, and cache sounds exactly like cash."
      },
      {
        "english": "We must make sure our acronym is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) acronym esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Acronym'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 25,
    "day": 25,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Termos Técnicos: SQL, Query, Schema, Async (Database Lingo)",
    "context": "Situação prática de trabalho em equipe internacional: termos técnicos: sql, query, schema, async (database lingo).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding schema?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! SQL is pronounced sequel, and schema starts with a hard 'k' sound."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Schema",
        "translation": "Termo técnico: Schema",
        "example": "SQL is pronounced sequel, and schema starts with a hard 'k' sound."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "SQL is pronounced sequel, and schema starts with a hard 'k' sound.",
        "portuguese": "Tradução orientada: SQL is pronounced sequel, and schema starts with a hard 'k' sound."
      },
      {
        "english": "We must make sure our schema is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) schema esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Schema'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 26,
    "day": 26,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "O Som do 'TH' sem Travar a Língua (Mastering the TH Sound)",
    "context": "Situação prática de trabalho em equipe internacional: o som do 'th' sem travar a língua (mastering the th sound).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding tongue placement?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Place your tongue between your teeth for think, thanks, and throughput."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Tongue placement",
        "translation": "Termo técnico: Tongue placement",
        "example": "Place your tongue between your teeth for think, thanks, and throughput."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Place your tongue between your teeth for think, thanks, and throughput.",
        "portuguese": "Tradução orientada: Place your tongue between your teeth for think, thanks, and throughput."
      },
      {
        "english": "We must make sure our tongue placement is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) tongue placement esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Tongue placement'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 27,
    "day": 27,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Connected Speech: Ligando Palavras como Nativo (Linking Words)",
    "context": "Situação prática de trabalho em equipe internacional: connected speech: ligando palavras como nativo (linking words).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding liaison?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Native speakers connect final consonants to the next vowel sound naturally."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Liaison",
        "translation": "Termo técnico: Liaison",
        "example": "Native speakers connect final consonants to the next vowel sound naturally."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Native speakers connect final consonants to the next vowel sound naturally.",
        "portuguese": "Tradução orientada: Native speakers connect final consonants to the next vowel sound naturally."
      },
      {
        "english": "We must make sure our liaison is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) liaison esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Liaison'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 28,
    "day": 28,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Entonação de Perguntas vs Afirmações (Pitch & Intonation)",
    "context": "Situação prática de trabalho em equipe internacional: entonação de perguntas vs afirmações (pitch & intonation).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding intonation?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Lower your pitch at the end of statements to sound confident and decisive."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Intonation",
        "translation": "Termo técnico: Intonation",
        "example": "Lower your pitch at the end of statements to sound confident and decisive."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Lower your pitch at the end of statements to sound confident and decisive.",
        "portuguese": "Tradução orientada: Lower your pitch at the end of statements to sound confident and decisive."
      },
      {
        "english": "We must make sure our intonation is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) intonation esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Intonation'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 29,
    "day": 29,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Prática Intensiva de Ritmo e Fluência (Stress Patterns)",
    "context": "Situação prática de trabalho em equipe internacional: prática intensiva de ritmo e fluência (stress patterns).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding rhythm?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! English is a stress-timed language, so emphasize the key content words."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Rhythm",
        "translation": "Termo técnico: Rhythm",
        "example": "English is a stress-timed language, so emphasize the key content words."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "English is a stress-timed language, so emphasize the key content words.",
        "portuguese": "Tradução orientada: English is a stress-timed language, so emphasize the key content words."
      },
      {
        "english": "We must make sure our rhythm is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) rhythm esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Rhythm'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 30,
    "day": 30,
    "phase": "Fundamentos",
    "category": "Phonetics & Pronunciation",
    "title": "Marco 1: Desafio dos 30 Dias & Prova de Fundamentos (Milestone 1)",
    "context": "Situação prática de trabalho em equipe internacional: marco 1: desafio dos 30 dias & prova de fundamentos (milestone 1).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding milestone?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Congratulations on completing 30 consecutive days of focused English practice!"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Milestone",
        "translation": "Termo técnico: Milestone",
        "example": "Congratulations on completing 30 consecutive days of focused English practice!"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Congratulations on completing 30 consecutive days of focused English practice!",
        "portuguese": "Tradução orientada: Congratulations on completing 30 consecutive days of focused English practice!"
      },
      {
        "english": "We must make sure our milestone is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) milestone esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Milestone'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 31,
    "day": 31,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Abrindo um PR com Resumo Executivo (Opening a PR)",
    "context": "Situação prática de trabalho em equipe internacional: abrindo um pr com resumo executivo (opening a pr).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding pull request description?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I added a detailed summary explaining why we introduced this new dependency."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Pull request description",
        "translation": "Termo técnico: Pull request description",
        "example": "I added a detailed summary explaining why we introduced this new dependency."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I added a detailed summary explaining why we introduced this new dependency.",
        "portuguese": "Tradução orientada: I added a detailed summary explaining why we introduced this new dependency."
      },
      {
        "english": "We must make sure our pull request description is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) pull request description esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Pull request description'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 32,
    "day": 32,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Elogiando Código no Review (Constructive Praise)",
    "context": "Situação prática de trabalho em equipe internacional: elogiando código no review (constructive praise).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding clean implementation?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Great job simplifying this logic! The component is much easier to read now."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Clean implementation",
        "translation": "Termo técnico: Clean implementation",
        "example": "Great job simplifying this logic! The component is much easier to read now."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Great job simplifying this logic! The component is much easier to read now.",
        "portuguese": "Tradução orientada: Great job simplifying this logic! The component is much easier to read now."
      },
      {
        "english": "We must make sure our clean implementation is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) clean implementation esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Clean implementation'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 33,
    "day": 33,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Sugerindo Refatoração com Delicadeza (Polite Suggestions)",
    "context": "Situação prática de trabalho em equipe internacional: sugerindo refatoração com delicadeza (polite suggestions).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding non-blocking nit?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Non-blocking nitpick: what do you think about memoizing this calculation?"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Non-blocking nit",
        "translation": "Termo técnico: Non-blocking nit",
        "example": "Non-blocking nitpick: what do you think about memoizing this calculation?"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Non-blocking nitpick: what do you think about memoizing this calculation?",
        "portuguese": "Tradução orientada: Non-blocking nitpick: what do you think about memoizing this calculation?"
      },
      {
        "english": "We must make sure our non-blocking nit is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) non-blocking nit esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Non-blocking nit'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 34,
    "day": 34,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Apontando Riscos de Performance e Segurança (Security & Perf)",
    "context": "Situação prática de trabalho em equipe internacional: apontando riscos de performance e segurança (security & perf).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding vulnerability?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We should sanitize this user input to prevent cross-site scripting vulnerabilities."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Vulnerability",
        "translation": "Termo técnico: Vulnerability",
        "example": "We should sanitize this user input to prevent cross-site scripting vulnerabilities."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We should sanitize this user input to prevent cross-site scripting vulnerabilities.",
        "portuguese": "Tradução orientada: We should sanitize this user input to prevent cross-site scripting vulnerabilities."
      },
      {
        "english": "We must make sure our vulnerability is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) vulnerability esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Vulnerability'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 35,
    "day": 35,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Respondendo a Feedbacks Críticos no PR (Handling PR Feedback)",
    "context": "Situação prática de trabalho em equipe internacional: respondendo a feedbacks críticos no pr (handling pr feedback).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding trade-off?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I appreciate the feedback! I updated the code and pushed three new commits."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Trade-off",
        "translation": "Termo técnico: Trade-off",
        "example": "I appreciate the feedback! I updated the code and pushed three new commits."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I appreciate the feedback! I updated the code and pushed three new commits.",
        "portuguese": "Tradução orientada: I appreciate the feedback! I updated the code and pushed three new commits."
      },
      {
        "english": "We must make sure our trade-off is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) trade-off esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Trade-off'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 36,
    "day": 36,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Aprovando com LGTM e Solicitando Mudanças (Approving PRs)",
    "context": "Situação prática de trabalho em equipe internacional: aprovando com lgtm e solicitando mudanças (approving prs).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding lgtm?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Looks good to me! All unit tests pass and code quality checks are green."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "LGTM",
        "translation": "Termo técnico: LGTM",
        "example": "Looks good to me! All unit tests pass and code quality checks are green."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Looks good to me! All unit tests pass and code quality checks are green.",
        "portuguese": "Tradução orientada: Looks good to me! All unit tests pass and code quality checks are green."
      },
      {
        "english": "We must make sure our lgtm is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) lgtm esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'LGTM'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 37,
    "day": 37,
    "phase": "Conversação",
    "category": "Code Review",
    "title": "Revisão da Semana 5: Simulação de Code Review (PR Review Roleplay)",
    "context": "Situação prática de trabalho em equipe internacional: revisão da semana 5: simulação de code review (pr review roleplay).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding peer review?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Constructive peer reviews improve codebase health and spread knowledge."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Peer review",
        "translation": "Termo técnico: Peer review",
        "example": "Constructive peer reviews improve codebase health and spread knowledge."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Constructive peer reviews improve codebase health and spread knowledge.",
        "portuguese": "Tradução orientada: Constructive peer reviews improve codebase health and spread knowledge."
      },
      {
        "english": "We must make sure our peer review is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) peer review esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Peer review'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 38,
    "day": 38,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Convidando Colegas para Pair Programming (Inviting to Pair)",
    "context": "Situação prática de trabalho em equipe internacional: convidando colegas para pair programming (inviting to pair).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding huddle?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Could we jump on a quick Slack huddle to debug this race condition together?"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Huddle",
        "translation": "Termo técnico: Huddle",
        "example": "Could we jump on a quick Slack huddle to debug this race condition together?"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Could we jump on a quick Slack huddle to debug this race condition together?",
        "portuguese": "Tradução orientada: Could we jump on a quick Slack huddle to debug this race condition together?"
      },
      {
        "english": "We must make sure our huddle is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) huddle esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Huddle'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 39,
    "day": 39,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Navegando no Compartilhamento de Tela (Screen Sharing)",
    "context": "Situação prática de trabalho em equipe internacional: navegando no compartilhamento de tela (screen sharing).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding driver and navigator?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Scroll down to line 120 and let's inspect the console log output."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Driver and navigator",
        "translation": "Termo técnico: Driver and navigator",
        "example": "Scroll down to line 120 and let's inspect the console log output."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Scroll down to line 120 and let's inspect the console log output.",
        "portuguese": "Tradução orientada: Scroll down to line 120 and let's inspect the console log output."
      },
      {
        "english": "We must make sure our driver and navigator is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) driver and navigator esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Driver and navigator'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 40,
    "day": 40,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Reproduzindo Bugs Intermitentes (Intermittent Bugs)",
    "context": "Situação prática de trabalho em equipe internacional: reproduzindo bugs intermitentes (intermittent bugs).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding flaky bug?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! This bug is flaky and only reproduces when network latency is simulated."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Flaky bug",
        "translation": "Termo técnico: Flaky bug",
        "example": "This bug is flaky and only reproduces when network latency is simulated."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "This bug is flaky and only reproduces when network latency is simulated.",
        "portuguese": "Tradução orientada: This bug is flaky and only reproduces when network latency is simulated."
      },
      {
        "english": "We must make sure our flaky bug is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) flaky bug esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Flaky bug'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 41,
    "day": 41,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Lendo Logs de Servidor e Stack Traces (Server Logs & Traces)",
    "context": "Situação prática de trabalho em equipe internacional: lendo logs de servidor e stack traces (server logs & traces).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding stack trace?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! The stack trace points to an unhandled promise rejection in the auth service."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Stack trace",
        "translation": "Termo técnico: Stack trace",
        "example": "The stack trace points to an unhandled promise rejection in the auth service."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "The stack trace points to an unhandled promise rejection in the auth service.",
        "portuguese": "Tradução orientada: The stack trace points to an unhandled promise rejection in the auth service."
      },
      {
        "english": "We must make sure our stack trace is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) stack trace esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Stack trace'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 42,
    "day": 42,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Formulando Hipóteses de Causa-Raiz (Root Cause Analysis)",
    "context": "Situação prática de trabalho em equipe internacional: formulando hipóteses de causa-raiz (root cause analysis).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding root cause?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! My hypothesis is that the token expires before the websocket reconnects."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Root cause",
        "translation": "Termo técnico: Root cause",
        "example": "My hypothesis is that the token expires before the websocket reconnects."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "My hypothesis is that the token expires before the websocket reconnects.",
        "portuguese": "Tradução orientada: My hypothesis is that the token expires before the websocket reconnects."
      },
      {
        "english": "We must make sure our root cause is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) root cause esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Root cause'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 43,
    "day": 43,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Aplicando um Hotfix Rápido em Produção (Deploying a Hotfix)",
    "context": "Situação prática de trabalho em equipe internacional: aplicando um hotfix rápido em produção (deploying a hotfix).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding hotfix?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We need to cherry-pick this fix and deploy an emergency hotfix immediately."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Hotfix",
        "translation": "Termo técnico: Hotfix",
        "example": "We need to cherry-pick this fix and deploy an emergency hotfix immediately."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We need to cherry-pick this fix and deploy an emergency hotfix immediately.",
        "portuguese": "Tradução orientada: We need to cherry-pick this fix and deploy an emergency hotfix immediately."
      },
      {
        "english": "We must make sure our hotfix is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) hotfix esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Hotfix'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 44,
    "day": 44,
    "phase": "Conversação",
    "category": "Pair Programming",
    "title": "Post-Mortem e Retrospectiva de Incidente (Incident Post-Mortem)",
    "context": "Situação prática de trabalho em equipe internacional: post-mortem e retrospectiva de incidente (incident post-mortem).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding post-mortem?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Let's document the timeline and identify preventive measures in the post-mortem."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Post-mortem",
        "translation": "Termo técnico: Post-mortem",
        "example": "Let's document the timeline and identify preventive measures in the post-mortem."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Let's document the timeline and identify preventive measures in the post-mortem.",
        "portuguese": "Tradução orientada: Let's document the timeline and identify preventive measures in the post-mortem."
      },
      {
        "english": "We must make sure our post-mortem is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) post-mortem esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Post-mortem'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 45,
    "day": 45,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "Explicando Arquitetura em Alto Nível (High-Level Architecture)",
    "context": "Situação prática de trabalho em equipe internacional: explicando arquitetura em alto nível (high-level architecture).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding decoupled?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We decoupled the UI presentation layer from the state management stores."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Decoupled",
        "translation": "Termo técnico: Decoupled",
        "example": "We decoupled the UI presentation layer from the state management stores."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We decoupled the UI presentation layer from the state management stores.",
        "portuguese": "Tradução orientada: We decoupled the UI presentation layer from the state management stores."
      },
      {
        "english": "We must make sure our decoupled is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) decoupled esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Decoupled'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 46,
    "day": 46,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "Contratos de API RESTful (RESTful API Design)",
    "context": "Situação prática de trabalho em equipe internacional: contratos de api restful (restful api design).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding idempotent?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! PUT and DELETE endpoints must remain strictly idempotent in our REST API."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Idempotent",
        "translation": "Termo técnico: Idempotent",
        "example": "PUT and DELETE endpoints must remain strictly idempotent in our REST API."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "PUT and DELETE endpoints must remain strictly idempotent in our REST API.",
        "portuguese": "Tradução orientada: PUT and DELETE endpoints must remain strictly idempotent in our REST API."
      },
      {
        "english": "We must make sure our idempotent is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) idempotent esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Idempotent'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 47,
    "day": 47,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "GraphQL vs REST: Discutindo Trade-offs (GraphQL vs REST)",
    "context": "Situação prática de trabalho em equipe internacional: graphql vs rest: discutindo trade-offs (graphql vs rest).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding over-fetching?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! GraphQL eliminates over-fetching by allowing clients to specify required fields."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Over-fetching",
        "translation": "Termo técnico: Over-fetching",
        "example": "GraphQL eliminates over-fetching by allowing clients to specify required fields."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "GraphQL eliminates over-fetching by allowing clients to specify required fields.",
        "portuguese": "Tradução orientada: GraphQL eliminates over-fetching by allowing clients to specify required fields."
      },
      {
        "english": "We must make sure our over-fetching is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) over-fetching esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Over-fetching'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 48,
    "day": 48,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "Autenticação: JWT, OAuth e Sessões (Auth & Tokens)",
    "context": "Situação prática de trabalho em equipe internacional: autenticação: jwt, oauth e sessões (auth & tokens).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding refresh token?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Store access tokens in memory and use httpOnly cookies for refresh tokens."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Refresh token",
        "translation": "Termo técnico: Refresh token",
        "example": "Store access tokens in memory and use httpOnly cookies for refresh tokens."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Store access tokens in memory and use httpOnly cookies for refresh tokens.",
        "portuguese": "Tradução orientada: Store access tokens in memory and use httpOnly cookies for refresh tokens."
      },
      {
        "english": "We must make sure our refresh token is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) refresh token esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Refresh token'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 49,
    "day": 49,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "Estratégias de Cache com Redis (Caching & TTL)",
    "context": "Situação prática de trabalho em equipe internacional: estratégias de cache com redis (caching & ttl).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding cache invalidation?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Cache invalidation and naming things are the two hardest problems in computing."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Cache invalidation",
        "translation": "Termo técnico: Cache invalidation",
        "example": "Cache invalidation and naming things are the two hardest problems in computing."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Cache invalidation and naming things are the two hardest problems in computing.",
        "portuguese": "Tradução orientada: Cache invalidation and naming things are the two hardest problems in computing."
      },
      {
        "english": "We must make sure our cache invalidation is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) cache invalidation esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Cache invalidation'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 50,
    "day": 50,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "Bancos Relacionais vs NoSQL (SQL vs NoSQL)",
    "context": "Situação prática de trabalho em equipe internacional: bancos relacionais vs nosql (sql vs nosql).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding acid compliance?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Postgres provides strict ACID compliance which is critical for financial data."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "ACID compliance",
        "translation": "Termo técnico: ACID compliance",
        "example": "Postgres provides strict ACID compliance which is critical for financial data."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Postgres provides strict ACID compliance which is critical for financial data.",
        "portuguese": "Tradução orientada: Postgres provides strict ACID compliance which is critical for financial data."
      },
      {
        "english": "We must make sure our acid compliance is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) acid compliance esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'ACID compliance'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 51,
    "day": 51,
    "phase": "Conversação",
    "category": "Architecture & APIs",
    "title": "Revisão da Semana 7: Defendendo uma Escolha Técnica (Tech Defense)",
    "context": "Situação prática de trabalho em equipe internacional: revisão da semana 7: defendendo uma escolha técnica (tech defense).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding benchmark?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Based on our load benchmarks, this architecture handles triple the traffic."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Benchmark",
        "translation": "Termo técnico: Benchmark",
        "example": "Based on our load benchmarks, this architecture handles triple the traffic."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Based on our load benchmarks, this architecture handles triple the traffic.",
        "portuguese": "Tradução orientada: Based on our load benchmarks, this architecture handles triple the traffic."
      },
      {
        "english": "We must make sure our benchmark is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) benchmark esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Benchmark'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 52,
    "day": 52,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Estimando Story Points e Prazos (Estimating Story Points)",
    "context": "Situação prática de trabalho em equipe internacional: estimando story points e prazos (estimating story points).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding story points?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I estimate this user story as a 5 because of the third-party API integration."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Story points",
        "translation": "Termo técnico: Story points",
        "example": "I estimate this user story as a 5 because of the third-party API integration."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I estimate this user story as a 5 because of the third-party API integration.",
        "portuguese": "Tradução orientada: I estimate this user story as a 5 because of the third-party API integration."
      },
      {
        "english": "We must make sure our story points is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) story points esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Story points'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 53,
    "day": 53,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Alertando sobre Scope Creep no Projeto (Scope Creep)",
    "context": "Situação prática de trabalho em equipe internacional: alertando sobre scope creep no projeto (scope creep).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding scope creep?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Adding push notifications now is scope creep; let's push it to phase two."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Scope creep",
        "translation": "Termo técnico: Scope creep",
        "example": "Adding push notifications now is scope creep; let's push it to phase two."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Adding push notifications now is scope creep; let's push it to phase two.",
        "portuguese": "Tradução orientada: Adding push notifications now is scope creep; let's push it to phase two."
      },
      {
        "english": "We must make sure our scope creep is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) scope creep esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Scope creep'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 54,
    "day": 54,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Argumentando a Favor de Refatoração (Tech Debt Advocacy)",
    "context": "Situação prática de trabalho em equipe internacional: argumentando a favor de refatoração (tech debt advocacy).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding refactoring sprint?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Investing time in refactoring now will double our deployment velocity next month."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Refactoring sprint",
        "translation": "Termo técnico: Refactoring sprint",
        "example": "Investing time in refactoring now will double our deployment velocity next month."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Investing time in refactoring now will double our deployment velocity next month.",
        "portuguese": "Tradução orientada: Investing time in refactoring now will double our deployment velocity next month."
      },
      {
        "english": "We must make sure our refactoring sprint is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) refactoring sprint esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Refactoring sprint'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 55,
    "day": 55,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Conversa 1:1 com o Tech Lead (1:1 Alignment)",
    "context": "Situação prática de trabalho em equipe internacional: conversa 1:1 com o tech lead (1:1 alignment).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding one-on-one?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! In our one-on-one, I'd like to discuss my goals for cloud architecture certification."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "One-on-one",
        "translation": "Termo técnico: One-on-one",
        "example": "In our one-on-one, I'd like to discuss my goals for cloud architecture certification."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "In our one-on-one, I'd like to discuss my goals for cloud architecture certification.",
        "portuguese": "Tradução orientada: In our one-on-one, I'd like to discuss my goals for cloud architecture certification."
      },
      {
        "english": "We must make sure our one-on-one is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) one-on-one esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'One-on-one'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 56,
    "day": 56,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Pedindo Aumento ou Promoção Profissional (Compensation & Growth)",
    "context": "Situação prática de trabalho em equipe internacional: pedindo aumento ou promoção profissional (compensation & growth).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding performance review?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Over the past year, I led two critical initiatives that cut infrastructure costs by 30%."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Performance review",
        "translation": "Termo técnico: Performance review",
        "example": "Over the past year, I led two critical initiatives that cut infrastructure costs by 30%."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Over the past year, I led two critical initiatives that cut infrastructure costs by 30%.",
        "portuguese": "Tradução orientada: Over the past year, I led two critical initiatives that cut infrastructure costs by 30%."
      },
      {
        "english": "We must make sure our performance review is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) performance review esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Performance review'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 57,
    "day": 57,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Dando e Recebendo Feedback 360 (Peer Feedback)",
    "context": "Situação prática de trabalho em equipe internacional: dando e recebendo feedback 360 (peer feedback).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding actionable feedback?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Your feedback was very actionable and helped me improve my code documentation."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Actionable feedback",
        "translation": "Termo técnico: Actionable feedback",
        "example": "Your feedback was very actionable and helped me improve my code documentation."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Your feedback was very actionable and helped me improve my code documentation.",
        "portuguese": "Tradução orientada: Your feedback was very actionable and helped me improve my code documentation."
      },
      {
        "english": "We must make sure our actionable feedback is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) actionable feedback esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Actionable feedback'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 58,
    "day": 58,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Comunicação Assíncrona no Slack (Async Communication)",
    "context": "Situação prática de trabalho em equipe internacional: comunicação assíncrona no slack (async communication).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding async first?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Write complete context in your message so colleagues can answer asynchronously."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Async first",
        "translation": "Termo técnico: Async first",
        "example": "Write complete context in your message so colleagues can answer asynchronously."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Write complete context in your message so colleagues can answer asynchronously.",
        "portuguese": "Tradução orientada: Write complete context in your message so colleagues can answer asynchronously."
      },
      {
        "english": "We must make sure our async first is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) async first esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Async first'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 59,
    "day": 59,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Conduzindo uma Demo de Sprint (Sprint Demo)",
    "context": "Situação prática de trabalho em equipe internacional: conduzindo uma demo de sprint (sprint demo).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding showcase?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Today I am excited to showcase the new offline speech recognition feature."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Showcase",
        "translation": "Termo técnico: Showcase",
        "example": "Today I am excited to showcase the new offline speech recognition feature."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Today I am excited to showcase the new offline speech recognition feature.",
        "portuguese": "Tradução orientada: Today I am excited to showcase the new offline speech recognition feature."
      },
      {
        "english": "We must make sure our showcase is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) showcase esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Showcase'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 60,
    "day": 60,
    "phase": "Conversação",
    "category": "Agile & Career",
    "title": "Marco 2: Desafio dos 60 Dias & Simulação de Sprint (Milestone 2)",
    "context": "Situação prática de trabalho em equipe internacional: marco 2: desafio dos 60 dias & simulação de sprint (milestone 2).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding consistency?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Sixty days of dedicated English practice has transformed your technical vocabulary!"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Consistency",
        "translation": "Termo técnico: Consistency",
        "example": "Sixty days of dedicated English practice has transformed your technical vocabulary!"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Sixty days of dedicated English practice has transformed your technical vocabulary!",
        "portuguese": "Tradução orientada: Sixty days of dedicated English practice has transformed your technical vocabulary!"
      },
      {
        "english": "We must make sure our consistency is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) consistency esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Consistency'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 61,
    "day": 61,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "O Pitch de 90 Segundos: 'Tell me about yourself' (Elevator Pitch)",
    "context": "Situação prática de trabalho em equipe internacional: o pitch de 90 segundos: 'tell me about yourself' (elevator pitch).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding elevator pitch?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I am a frontend specialist passionate about developer experience and web performance."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Elevator pitch",
        "translation": "Termo técnico: Elevator pitch",
        "example": "I am a frontend specialist passionate about developer experience and web performance."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I am a frontend specialist passionate about developer experience and web performance.",
        "portuguese": "Tradução orientada: I am a frontend specialist passionate about developer experience and web performance."
      },
      {
        "english": "We must make sure our elevator pitch is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) elevator pitch esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Elevator pitch'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 62,
    "day": 62,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "Método STAR: Definindo a Situação e Tarefa (Situation & Task)",
    "context": "Situação prática de trabalho em equipe internacional: método star: definindo a situação e tarefa (situation & task).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding context setting?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Our legacy monolith was experiencing five-second latency during peak traffic hours."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Context setting",
        "translation": "Termo técnico: Context setting",
        "example": "Our legacy monolith was experiencing five-second latency during peak traffic hours."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Our legacy monolith was experiencing five-second latency during peak traffic hours.",
        "portuguese": "Tradução orientada: Our legacy monolith was experiencing five-second latency during peak traffic hours."
      },
      {
        "english": "We must make sure our context setting is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) context setting esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Context setting'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 63,
    "day": 63,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "Método STAR: Detalhando as Ações que Você Tomou (Action Steps)",
    "context": "Situação prática de trabalho em equipe internacional: método star: detalhando as ações que você tomou (action steps).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding initiative?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I took the initiative to migrate the database queries and implement Redis caching."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Initiative",
        "translation": "Termo técnico: Initiative",
        "example": "I took the initiative to migrate the database queries and implement Redis caching."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I took the initiative to migrate the database queries and implement Redis caching.",
        "portuguese": "Tradução orientada: I took the initiative to migrate the database queries and implement Redis caching."
      },
      {
        "english": "We must make sure our initiative is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) initiative esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Initiative'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 64,
    "day": 64,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "Método STAR: Quantificando os Resultados Obtidos (Measurable Results)",
    "context": "Situação prática de trabalho em equipe internacional: método star: quantificando os resultados obtidos (measurable results).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding metrics?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! As a result, we reduced p99 latency by 75% and saved twenty thousand dollars annually."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Metrics",
        "translation": "Termo técnico: Metrics",
        "example": "As a result, we reduced p99 latency by 75% and saved twenty thousand dollars annually."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "As a result, we reduced p99 latency by 75% and saved twenty thousand dollars annually.",
        "portuguese": "Tradução orientada: As a result, we reduced p99 latency by 75% and saved twenty thousand dollars annually."
      },
      {
        "english": "We must make sure our metrics is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) metrics esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Metrics'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 65,
    "day": 65,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "Explicando seu Maior Desafio Técnico (Greatest Tech Challenge)",
    "context": "Situação prática de trabalho em equipe internacional: explicando seu maior desafio técnico (greatest tech challenge).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding overcome?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! The biggest hurdle was maintaining backward compatibility while rewriting the core."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Overcome",
        "translation": "Termo técnico: Overcome",
        "example": "The biggest hurdle was maintaining backward compatibility while rewriting the core."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "The biggest hurdle was maintaining backward compatibility while rewriting the core.",
        "portuguese": "Tradução orientada: The biggest hurdle was maintaining backward compatibility while rewriting the core."
      },
      {
        "english": "We must make sure our overcome is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) overcome esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Overcome'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 66,
    "day": 66,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "Por que Você Quer Trabalhar Conosco? (Company Alignment)",
    "context": "Situação prática de trabalho em equipe internacional: por que você quer trabalhar conosco? (company alignment).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding company culture?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I admire your open-source contributions and your commitment to remote-first culture."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Company culture",
        "translation": "Termo técnico: Company culture",
        "example": "I admire your open-source contributions and your commitment to remote-first culture."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I admire your open-source contributions and your commitment to remote-first culture.",
        "portuguese": "Tradução orientada: I admire your open-source contributions and your commitment to remote-first culture."
      },
      {
        "english": "We must make sure our company culture is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) company culture esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Company culture'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 67,
    "day": 67,
    "phase": "Fluência Prática",
    "category": "Job Interviews",
    "title": "Perguntas Inteligentes para Fazer ao Entrevistador (Reverse Interview)",
    "context": "Situação prática de trabalho em equipe internacional: perguntas inteligentes para fazer ao entrevistador (reverse interview).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding engineering culture?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! What does the typical onboarding process look like for remote international engineers?"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Engineering culture",
        "translation": "Termo técnico: Engineering culture",
        "example": "What does the typical onboarding process look like for remote international engineers?"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "What does the typical onboarding process look like for remote international engineers?",
        "portuguese": "Tradução orientada: What does the typical onboarding process look like for remote international engineers?"
      },
      {
        "english": "We must make sure our engineering culture is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) engineering culture esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Engineering culture'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 68,
    "day": 68,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Como Pensar em Voz Alta Durante o Teste (Thinking Out Loud)",
    "context": "Situação prática de trabalho em equipe internacional: como pensar em voz alta durante o teste (thinking out loud).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding think aloud?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Before typing any code, let me walk you through my thought process."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Think aloud",
        "translation": "Termo técnico: Think aloud",
        "example": "Before typing any code, let me walk you through my thought process."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Before typing any code, let me walk you through my thought process.",
        "portuguese": "Tradução orientada: Before typing any code, let me walk you through my thought process."
      },
      {
        "english": "We must make sure our think aloud is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) think aloud esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Think aloud'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 69,
    "day": 69,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Esclarecendo Requisitos e Casos de Borda (Clarifying Edge Cases)",
    "context": "Situação prática de trabalho em equipe internacional: esclarecendo requisitos e casos de borda (clarifying edge cases).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding corner case?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Can the input array contain duplicate values, or are all numbers unique?"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Corner case",
        "translation": "Termo técnico: Corner case",
        "example": "Can the input array contain duplicate values, or are all numbers unique?"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Can the input array contain duplicate values, or are all numbers unique?",
        "portuguese": "Tradução orientada: Can the input array contain duplicate values, or are all numbers unique?"
      },
      {
        "english": "We must make sure our corner case is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) corner case esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Corner case'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 70,
    "day": 70,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Da Solução Força-Bruta para a Otimizada (Brute Force to Optimal)",
    "context": "Situação prática de trabalho em equipe internacional: da solução força-bruta para a otimizada (brute force to optimal).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding brute force?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! The brute force approach takes O(n squared), but we can optimize it using a hash map to O(n)."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Brute force",
        "translation": "Termo técnico: Brute force",
        "example": "The brute force approach takes O(n squared), but we can optimize it using a hash map to O(n)."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "The brute force approach takes O(n squared), but we can optimize it using a hash map to O(n).",
        "portuguese": "Tradução orientada: The brute force approach takes O(n squared), but we can optimize it using a hash map to O(n)."
      },
      {
        "english": "We must make sure our brute force is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) brute force esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Brute force'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 71,
    "day": 71,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Explicando Notação Big-O em Inglês (Big-O Notation)",
    "context": "Situação prática de trabalho em equipe internacional: explicando notação big-o em inglês (big-o notation).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding time complexity?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! This solution runs in linear time with O(1) auxiliary space complexity."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Time complexity",
        "translation": "Termo técnico: Time complexity",
        "example": "This solution runs in linear time with O(1) auxiliary space complexity."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "This solution runs in linear time with O(1) auxiliary space complexity.",
        "portuguese": "Tradução orientada: This solution runs in linear time with O(1) auxiliary space complexity."
      },
      {
        "english": "We must make sure our time complexity is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) time complexity esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Time complexity'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 72,
    "day": 72,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Depurando um Erro no Meio do Live Code (Live Debugging)",
    "context": "Situação prática de trabalho em equipe internacional: depurando um erro no meio do live code (live debugging).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding off-by-one error?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Looks like an off-by-one error in my loop condition; let me adjust the pointer."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Off-by-one error",
        "translation": "Termo técnico: Off-by-one error",
        "example": "Looks like an off-by-one error in my loop condition; let me adjust the pointer."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Looks like an off-by-one error in my loop condition; let me adjust the pointer.",
        "portuguese": "Tradução orientada: Looks like an off-by-one error in my loop condition; let me adjust the pointer."
      },
      {
        "english": "We must make sure our off-by-one error is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) off-by-one error esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Off-by-one error'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 73,
    "day": 73,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Escrevendo Testes Unitários na Frente do Avaliador (Live Testing)",
    "context": "Situação prática de trabalho em equipe internacional: escrevendo testes unitários na frente do avaliador (live testing).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding test cases?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Let's write a few test cases including empty inputs and boundary values."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Test cases",
        "translation": "Termo técnico: Test cases",
        "example": "Let's write a few test cases including empty inputs and boundary values."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Let's write a few test cases including empty inputs and boundary values.",
        "portuguese": "Tradução orientada: Let's write a few test cases including empty inputs and boundary values."
      },
      {
        "english": "We must make sure our test cases is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) test cases esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Test cases'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 74,
    "day": 74,
    "phase": "Fluência Prática",
    "category": "Live Coding",
    "title": "Concluindo o Teste e Resumindo a Solução (Wrapping Up Coding)",
    "context": "Situação prática de trabalho em equipe internacional: concluindo o teste e resumindo a solução (wrapping up coding).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding trade-off analysis?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! To wrap up, this solution prioritizes readability while maintaining optimal runtime."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Trade-off analysis",
        "translation": "Termo técnico: Trade-off analysis",
        "example": "To wrap up, this solution prioritizes readability while maintaining optimal runtime."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "To wrap up, this solution prioritizes readability while maintaining optimal runtime.",
        "portuguese": "Tradução orientada: To wrap up, this solution prioritizes readability while maintaining optimal runtime."
      },
      {
        "english": "We must make sure our trade-off analysis is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) trade-off analysis esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Trade-off analysis'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 75,
    "day": 75,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Delimitando o Escopo do Sistema (System Scoping)",
    "context": "Situação prática de trabalho em equipe internacional: delimitando o escopo do sistema (system scoping).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding non-functional requirements?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We need high availability with ninety-nine point nine percent uptime and low read latency."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Non-functional requirements",
        "translation": "Termo técnico: Non-functional requirements",
        "example": "We need high availability with ninety-nine point nine percent uptime and low read latency."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We need high availability with ninety-nine point nine percent uptime and low read latency.",
        "portuguese": "Tradução orientada: We need high availability with ninety-nine point nine percent uptime and low read latency."
      },
      {
        "english": "We must make sure our non-functional requirements is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) non-functional requirements esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Non-functional requirements'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 76,
    "day": 76,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Cálculos de Tráfego e Armazenamento (Back-of-Envelope Math)",
    "context": "Situação prática de trabalho em equipe internacional: cálculos de tráfego e armazenamento (back-of-envelope math).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding throughput?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Assuming ten million daily active users, we need to handle roughly twelve hundred QPS."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Throughput",
        "translation": "Termo técnico: Throughput",
        "example": "Assuming ten million daily active users, we need to handle roughly twelve hundred QPS."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Assuming ten million daily active users, we need to handle roughly twelve hundred QPS.",
        "portuguese": "Tradução orientada: Assuming ten million daily active users, we need to handle roughly twelve hundred QPS."
      },
      {
        "english": "We must make sure our throughput is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) throughput esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Throughput'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 77,
    "day": 77,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Fluxo de Dados e Balanceamento de Carga (Load Balancing)",
    "context": "Situação prática de trabalho em equipe internacional: fluxo de dados e balanceamento de carga (load balancing).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding load balancer?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We place a load balancer in front of our stateless application servers."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Load balancer",
        "translation": "Termo técnico: Load balancer",
        "example": "We place a load balancer in front of our stateless application servers."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We place a load balancer in front of our stateless application servers.",
        "portuguese": "Tradução orientada: We place a load balancer in front of our stateless application servers."
      },
      {
        "english": "We must make sure our load balancer is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) load balancer esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Load balancer'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 78,
    "day": 78,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Sharding e Replicação de Banco de Dados (Database Sharding)",
    "context": "Situação prática de trabalho em equipe internacional: sharding e replicação de banco de dados (database sharding).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding read replicas?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! We can route read queries to read replicas and shard the database by user ID."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Read replicas",
        "translation": "Termo técnico: Read replicas",
        "example": "We can route read queries to read replicas and shard the database by user ID."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "We can route read queries to read replicas and shard the database by user ID.",
        "portuguese": "Tradução orientada: We can route read queries to read replicas and shard the database by user ID."
      },
      {
        "english": "We must make sure our read replicas is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) read replicas esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Read replicas'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 79,
    "day": 79,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Filas Assíncronas e Mensageria (Message Queues & Kafka)",
    "context": "Situação prática de trabalho em equipe internacional: filas assíncronas e mensageria (message queues & kafka).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding message broker?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! An asynchronous message queue decouples the image upload from video transcoding."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Message broker",
        "translation": "Termo técnico: Message broker",
        "example": "An asynchronous message queue decouples the image upload from video transcoding."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "An asynchronous message queue decouples the image upload from video transcoding.",
        "portuguese": "Tradução orientada: An asynchronous message queue decouples the image upload from video transcoding."
      },
      {
        "english": "We must make sure our message broker is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) message broker esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Message broker'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 80,
    "day": 80,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Monitoramento, Métricas e Resiliência (Telemetry & Circuit Breakers)",
    "context": "Situação prática de trabalho em equipe internacional: monitoramento, métricas e resiliência (telemetry & circuit breakers).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding circuit breaker?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! A circuit breaker prevents cascading failures when downstream payment APIs degrade."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Circuit breaker",
        "translation": "Termo técnico: Circuit breaker",
        "example": "A circuit breaker prevents cascading failures when downstream payment APIs degrade."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "A circuit breaker prevents cascading failures when downstream payment APIs degrade.",
        "portuguese": "Tradução orientada: A circuit breaker prevents cascading failures when downstream payment APIs degrade."
      },
      {
        "english": "We must make sure our circuit breaker is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) circuit breaker esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Circuit breaker'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 81,
    "day": 81,
    "phase": "Fluência Prática",
    "category": "System Design",
    "title": "Simulação Completa de System Design (Mock System Design)",
    "context": "Situação prática de trabalho em equipe internacional: simulação completa de system design (mock system design).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding end-to-end architecture?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! This distributed architecture provides horizontal scalability and geographic redundancy."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "End-to-end architecture",
        "translation": "Termo técnico: End-to-end architecture",
        "example": "This distributed architecture provides horizontal scalability and geographic redundancy."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "This distributed architecture provides horizontal scalability and geographic redundancy.",
        "portuguese": "Tradução orientada: This distributed architecture provides horizontal scalability and geographic redundancy."
      },
      {
        "english": "We must make sure our end-to-end architecture is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) end-to-end architecture esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'End-to-end architecture'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 82,
    "day": 82,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Recebendo a Proposta de Emprego (Offer Letter Review)",
    "context": "Situação prática de trabalho em equipe internacional: recebendo a proposta de emprego (offer letter review).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding offer letter?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I received the official offer letter and would like to review the benefits package."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Offer letter",
        "translation": "Termo técnico: Offer letter",
        "example": "I received the official offer letter and would like to review the benefits package."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I received the official offer letter and would like to review the benefits package.",
        "portuguese": "Tradução orientada: I received the official offer letter and would like to review the benefits package."
      },
      {
        "english": "We must make sure our offer letter is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) offer letter esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Offer letter'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 83,
    "day": 83,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Negociação Salarial: Como Pedir Mais em Dólares (Rate Negotiation)",
    "context": "Situação prática de trabalho em equipe internacional: negociação salarial: como pedir mais em dólares (rate negotiation).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding compensation package?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Based on my senior frontend background, I am looking for forty-five dollars per hour."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Compensation package",
        "translation": "Termo técnico: Compensation package",
        "example": "Based on my senior frontend background, I am looking for forty-five dollars per hour."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Based on my senior frontend background, I am looking for forty-five dollars per hour.",
        "portuguese": "Tradução orientada: Based on my senior frontend background, I am looking for forty-five dollars per hour."
      },
      {
        "english": "We must make sure our compensation package is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) compensation package esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Compensation package'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 84,
    "day": 84,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Contratos B2B/PJ para Empresas dos EUA (US Contractor Agreements)",
    "context": "Situação prática de trabalho em equipe internacional: contratos b2b/pj para empresas dos eua (us contractor agreements).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding w-8ben?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! As an international contractor in Brazil, I will submit the W-8BEN tax form."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "W-8BEN",
        "translation": "Termo técnico: W-8BEN",
        "example": "As an international contractor in Brazil, I will submit the W-8BEN tax form."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "As an international contractor in Brazil, I will submit the W-8BEN tax form.",
        "portuguese": "Tradução orientada: As an international contractor in Brazil, I will submit the W-8BEN tax form."
      },
      {
        "english": "We must make sure our w-8ben is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) w-8ben esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'W-8BEN'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 85,
    "day": 85,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Primeiro Dia na Empresa Gringa: Boas-Vindas (First Day & Onboarding)",
    "context": "Situação prática de trabalho em equipe internacional: primeiro dia na empresa gringa: boas-vindas (first day & onboarding).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding onboarding buddy?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! My onboarding buddy helped me clone the repos and set up my dev credentials."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Onboarding buddy",
        "translation": "Termo técnico: Onboarding buddy",
        "example": "My onboarding buddy helped me clone the repos and set up my dev credentials."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "My onboarding buddy helped me clone the repos and set up my dev credentials.",
        "portuguese": "Tradução orientada: My onboarding buddy helped me clone the repos and set up my dev credentials."
      },
      {
        "english": "We must make sure our onboarding buddy is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) onboarding buddy esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Onboarding buddy'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 86,
    "day": 86,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Pedindo Acessos a Repositórios e Ferramentas (Requesting Permissions)",
    "context": "Situação prática de trabalho em equipe internacional: pedindo acessos a repositórios e ferramentas (requesting permissions).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding access permissions?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Could an admin grant me write permissions to the frontend GitHub repository?"
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Access permissions",
        "translation": "Termo técnico: Access permissions",
        "example": "Could an admin grant me write permissions to the frontend GitHub repository?"
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Could an admin grant me write permissions to the frontend GitHub repository?",
        "portuguese": "Tradução orientada: Could an admin grant me write permissions to the frontend GitHub repository?"
      },
      {
        "english": "We must make sure our access permissions is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) access permissions esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Access permissions'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 87,
    "day": 87,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Lidando com Sotaques Globais: Índia, Europa e EUA (Global Accents)",
    "context": "Situação prática de trabalho em equipe internacional: lidando com sotaques globais: índia, europa e eua (global accents).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding active listening?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Focusing on key technical keywords makes understanding diverse accents seamless."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Active listening",
        "translation": "Termo técnico: Active listening",
        "example": "Focusing on key technical keywords makes understanding diverse accents seamless."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Focusing on key technical keywords makes understanding diverse accents seamless.",
        "portuguese": "Tradução orientada: Focusing on key technical keywords makes understanding diverse accents seamless."
      },
      {
        "english": "We must make sure our active listening is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) active listening esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Active listening'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 88,
    "day": 88,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Expressões Corporativas do Vale do Silício (Silicon Valley Slang)",
    "context": "Situação prática de trabalho em equipe internacional: expressões corporativas do vale do silício (silicon valley slang).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding bandwidth?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! I don't have the bandwidth to take on an extra ticket this sprint."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Bandwidth",
        "translation": "Termo técnico: Bandwidth",
        "example": "I don't have the bandwidth to take on an extra ticket this sprint."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "I don't have the bandwidth to take on an extra ticket this sprint.",
        "portuguese": "Tradução orientada: I don't have the bandwidth to take on an extra ticket this sprint."
      },
      {
        "english": "We must make sure our bandwidth is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) bandwidth esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Bandwidth'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 89,
    "day": 89,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "O Plano de Estudos Contínuo para o Futuro (Lifelong Learning)",
    "context": "Situação prática de trabalho em equipe internacional: o plano de estudos contínuo para o futuro (lifelong learning).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding continuous improvement?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Fluency is a lifelong muscle; ten minutes a day keeps your speech sharp."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Continuous improvement",
        "translation": "Termo técnico: Continuous improvement",
        "example": "Fluency is a lifelong muscle; ten minutes a day keeps your speech sharp."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Fluency is a lifelong muscle; ten minutes a day keeps your speech sharp.",
        "portuguese": "Tradução orientada: Fluency is a lifelong muscle; ten minutes a day keeps your speech sharp."
      },
      {
        "english": "We must make sure our continuous improvement is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) continuous improvement esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Continuous improvement'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  },
  {
    "id": 90,
    "day": 90,
    "phase": "Fluência Prática",
    "category": "Contracts & Career",
    "title": "Graduação dos 90 Dias & Discurso de Vitória (Graduation Day!)",
    "context": "Situação prática de trabalho em equipe internacional: graduação dos 90 dias & discurso de vitória (graduation day!).",
    "dialogue": [
      {
        "speaker": "Colleague",
        "text": "Hey Gabriel, can we sync regarding achievement?"
      },
      {
        "speaker": "Gabriel",
        "text": "Sure! Ninety days of discipline completed! I am now ready to speak English with confidence anywhere in the world."
      },
      {
        "speaker": "Colleague",
        "text": "Awesome, that makes total sense. Thanks for clarifying!"
      }
    ],
    "vocabulary": [
      {
        "word": "Achievement",
        "translation": "Termo técnico: Achievement",
        "example": "Ninety days of discipline completed! I am now ready to speak English with confidence anywhere in the world."
      },
      {
        "word": "Implementation",
        "translation": "Implementação / Execução",
        "example": "The implementation follows clean architecture guidelines."
      },
      {
        "word": "Deliverable",
        "translation": "Entregável / Entrega de software",
        "example": "This pull request is the main deliverable for today."
      }
    ],
    "phrases": [
      {
        "english": "Ninety days of discipline completed! I am now ready to speak English with confidence anywhere in the world.",
        "portuguese": "Tradução orientada: Ninety days of discipline completed! I am now ready to speak English with confidence anywhere in the world."
      },
      {
        "english": "We must make sure our achievement is fully tested and documented.",
        "portuguese": "Devemos garantir que nosso(a) achievement esteja totalmente testado e documentado."
      },
      {
        "english": "Let's review the technical implications before pushing to production.",
        "portuguese": "Vamos revisar as implicações técnicas antes de enviar para produção."
      }
    ],
    "pronunciationTip": {
      "rule": "Pronúncia focada em 'Achievement'",
      "explanation": "Articule os fonemas claramente sem adicionar vogal de apoio no final das consoantes mudas."
    },
    "completed": false
  }
];

export default lessonsData;
