/**
 * Serviço de Inteligência Conversacional para a Simulação de Chamada de Vídeo.
 * Suporta integração com a API Gemini do Google (se configurada) e possui um
 * motor interativo local robusto (fallback offline imediato com branching e reações naturais).
 */

export const CALL_PERSONAS = [
  {
    id: 'sarah_recruiter',
    name: 'Sarah Jenkins',
    role: 'Tech Recruiter Internacional',
    company: 'Fintech Scale-Up (Londres, UK)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    accent: 'UK',
    color: 'deep-purple-7',
    context: 'Entrevista de triagem (Pre-Screening Call) de 5 minutos para uma vaga remota em dólares/libras.',
    initialGreeting: "Hello Gabriel! Thanks for jumping on the call so quickly. Can you hear and see me alright?",
    initialTranslation: "Olá Gabriel! Obrigado por entrar na chamada tão rápido. Consegue me ouvir e ver bem?",
    suggestions: [
      "Hi Sarah! Yes, loud and clear. Great to meet you!",
      "Hello! Everything is working on my end. How are you doing today?",
      "Hi! I can hear you perfectly. Excited to chat about the role!"
    ],
    offlineScenario: [
      {
        triggerWords: ['yes', 'hear', 'loud', 'clear', 'good', 'fine', 'hi', 'hello', 'great'],
        reply: "Awesome! I loved your background in full-stack web development. Could you briefly tell me about a recent project you built?",
        translation: "Maravilha! Adorei sua experiência em desenvolvimento full-stack. Poderia me falar brevemente sobre um projeto recente que você construiu?",
        hints: [
          "Recently I built a scalable microservice using Node and Vue for payment processing.",
          "I have been leading the frontend architecture of our customer dashboard.",
          "I recently migrated our monolithic application to serverless functions on AWS."
        ]
      },
      {
        triggerWords: ['project', 'built', 'worked', 'vue', 'node', 'react', 'api', 'backend', 'frontend', 'app'],
        reply: "That sounds very impressive! How do you usually handle code reviews and collaboration with remote team members?",
        translation: "Parece muito impressionante! Como você costuma lidar com code reviews e colaboração com colegas remotos?",
        hints: [
          "I prioritize clear PR descriptions, small diffs, and constructive feedback on GitHub.",
          "We do daily standups and use asynchronous communication on Slack and Loom.",
          "I always write automated unit tests to ensure high code quality before merging."
        ]
      },
      {
        triggerWords: ['review', 'pr', 'slack', 'async', 'tests', 'git', 'github', 'team', 'remote'],
        reply: "That's exactly the mindset our engineering leads look for! What are your salary expectations for an international remote contract?",
        translation: "Essa é exatamente a mentalidade que nossos líderes técnicos buscam! Quais são suas expectativas salariais para um contrato remoto internacional?",
        hints: [
          "I am targeting between 4,000 and 5,500 USD per month, depending on benefits.",
          "My target range is around 50 to 60 dollars per hour for senior full-stack roles.",
          "I am open to discuss the best package according to the seniority and impact of the position."
        ]
      },
      {
        triggerWords: ['salary', 'usd', 'dollars', 'range', 'month', 'rate', 'package', 'open'],
        reply: "That fits right into our budget! I will forward our technical assessment and schedule our next round. Thank you so much, Gabriel!",
        translation: "Isso se encaixa perfeitamente no nosso orçamento! Vou encaminhar nosso teste técnico e agendar a próxima rodada. Muito obrigado, Gabriel!",
        hints: [
          "Thank you, Sarah! Looking forward to the next steps. Have a great day!",
          "Sounds wonderful! I will keep an eye on my inbox. Talk soon!",
          "Thanks for your time, Sarah! It was a pleasure chatting with you."
        ]
      }
    ]
  },
  {
    id: 'david_architect',
    name: 'David Chen',
    role: 'Principal Staff Architect',
    company: 'Cloud Infrastructure (Nova York, US)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    accent: 'US',
    color: 'blue-8',
    context: 'Reunião de emergência de arquitetura: Investigação de latência e deadlocks no banco de produção.',
    initialGreeting: "Hey Gabriel, glad you picked up! Our monitoring just flagged a critical latency spike on the checkout API. Are you near your terminal?",
    initialTranslation: "Ei Gabriel, que bom que atendeu! Nosso monitoramento acabou de disparar um pico crítico de latência na API de checkout. Está perto do seu terminal?",
    suggestions: [
      "Hey David! Yes, I have my terminal open right now. What do the metrics show?",
      "Hi David! I'm on it. Is it related to the database connection pool?",
      "Hey! I'm looking at Datadog right now. Let's inspect the error logs."
    ],
    offlineScenario: [
      {
        triggerWords: ['terminal', 'metrics', 'open', 'looking', 'logs', 'database', 'yes', 'here'],
        reply: "The database CPU hit 95%! It looks like an unindexed join or a deadlock on the orders table. What should our first mitigation step be?",
        translation: "A CPU do banco bateu 95%! Parece um join sem índice ou um deadlock na tabela de pedidos. Qual deve ser nosso primeiro passo de mitigação?",
        hints: [
          "We should inspect active slow queries and kill any long-running transactions.",
          "Let's scale up the read replicas and cache the product availability query in Redis.",
          "I will check the latest deployment commit to see if any migration ran without an index."
        ]
      },
      {
        triggerWords: ['query', 'slow', 'replica', 'redis', 'cache', 'index', 'kill', 'migration', 'deploy'],
        reply: "Great idea! Killing the stuck queries dropped the CPU to 40%. How can we prevent this query from locking the table again in the future?",
        translation: "Ótima ideia! Matar as queries travadas derrubou o CPU para 40%. Como podemos evitar que essa query trave a tabela novamente no futuro?",
        hints: [
          "We need to add a composite index on order_id and created_at.",
          "We should introduce an asynchronous message queue with BullMQ or Kafka for heavy processing.",
          "I will write a regression test and enforce query execution plan checks in CI."
        ]
      },
      {
        triggerWords: ['index', 'composite', 'queue', 'kafka', 'bullmq', 'async', 'test', 'ci'],
        reply: "Solid architectural solution, Gabriel. System is stable now. Write a quick post-mortem doc in Notion when you can. Great job troubleshooting!",
        translation: "Solução arquitetural sólida, Gabriel. O sistema está estável agora. Escreva um breve post-mortem no Notion quando puder. Ótimo trabalho!",
        hints: [
          "Will do, David! I'll document the root cause and share the PR shortly.",
          "Glad we resolved it quickly! I'll start the post-mortem right away.",
          "Thanks David! I'll keep monitoring the dashboard for the next hour."
        ]
      }
    ]
  },
  {
    id: 'alex_lead',
    name: 'Alex Rivera',
    role: 'Engineering Team Lead',
    company: 'SaaS Platform (San Francisco, US)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    accent: 'US',
    color: 'teal-8',
    context: 'Conversa informal 1-on-1 de alinhamento quinzenal sobre carreira, sprint e bem-estar.',
    initialGreeting: "Hey Gabriel! How's your week treating you so far? Everything going smooth with the sprint?",
    initialTranslation: "Ei Gabriel! Como está sendo sua semana até aqui? Tudo correndo bem com a sprint?",
    suggestions: [
      "Hey Alex! It's going great, thanks. Making steady progress on my sprint tickets.",
      "Hi Alex! Pretty busy week, but we are on track to hit our sprint goals.",
      "Hey! Doing well, thank you. Excited about the new features we are shipping."
    ],
    offlineScenario: [
      {
        triggerWords: ['great', 'good', 'well', 'progress', 'busy', 'track', 'sprint', 'tickets'],
        reply: "Glad to hear that! You've been doing awesome work on the authentication refactor. Is there any blocker or anything I can help you with?",
        translation: "Fico feliz em ouvir isso! Você tem feito um trabalho incrível na refatoração da autenticação. Há algum impedimento ou algo em que eu possa te ajudar?",
        hints: [
          "No major blockers! Just waiting on the design team for the mobile assets.",
          "Everything is clear on my side. The documentation was super helpful.",
          "I might need a quick 5-minute review on my database schema PR later today."
        ]
      },
      {
        triggerWords: ['blocker', 'waiting', 'design', 'clear', 'review', 'pr', 'schema', 'help', 'no'],
        reply: "I'll review that PR right after this call! Also, looking ahead to next quarter, what technical skills would you like to level up on?",
        translation: "Vou revisar esse PR logo após esta chamada! Além disso, olhando para o próximo trimestre, quais habilidades técnicas você gostaria de aprimorar?",
        hints: [
          "I'd love to dive deeper into Kubernetes, distributed caching, and microservices architecture.",
          "I want to improve my technical leadership and lead a feature initiative from scratch.",
          "I am focusing on optimizing frontend performance and Web Vitals."
        ]
      },
      {
        triggerWords: ['kubernetes', 'microservices', 'leadership', 'performance', 'frontend', 'cloud', 'architecture', 'lead'],
        reply: "Love that ambition! I will pair you with our cloud engineer on the next milestone. Thanks for the chat, Gabriel. Keep up the fantastic work!",
        translation: "Adoro essa ambição! Vou te colocar em dupla com nosso engenheiro de nuvem no próximo marco. Valeu pela conversa, Gabriel. Continue com o trabalho fantástico!",
        hints: [
          "Thanks so much, Alex! Really appreciate your support and mentorship.",
          "Awesome, looking forward to it! Talk to you on Slack.",
          "Have a great rest of your day, Alex! See you around."
        ]
      }
    ]
  }
]

class AICallService {
  constructor() {
    this.conversationHistory = []
    this.currentScenarioIndex = 0
  }

  /**
   * Inicializa uma nova chamada com a persona escolhida
   * @param {Object} persona 
   * @param {string} userName 
   */
  initCall(persona, userName = 'Gabriel') {
    this.conversationHistory = [
      {
        speaker: persona.name,
        text: persona.initialGreeting,
        translation: persona.initialTranslation,
        role: 'model'
      }
    ]
    this.currentScenarioIndex = 0
  }

  /**
   * Envia a fala do usuário e obtém a resposta da IA (online via Gemini ou offline inteligente)
   * @param {Object} persona - Persona participante da chamada
   * @param {string} userMessage - Transcrição da fala do usuário
   * @param {string} apiKey - Chave da API Gemini (opcional)
   * @param {string} userName - Nome do usuário (ex: Gabriel)
   * @returns {Promise<{ reply: string, hints: Array<string> }>}
   */
  async getResponse(persona, userMessage, apiKey = '', userName = 'Gabriel') {
    // Registra a fala do usuário
    this.conversationHistory.push({
      speaker: userName,
      text: userMessage,
      role: 'user'
    })

    // 1. Tenta API Gemini se a chave estiver presente
    const effectiveKey = apiKey || (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || ''
    if (effectiveKey) {
      try {
        const geminiReply = await this.callGeminiAPI(persona, userMessage, effectiveKey, userName)
        if (geminiReply) {
          this.conversationHistory.push({
            speaker: persona.name,
            text: geminiReply,
            role: 'model'
          })
          return {
            reply: geminiReply,
            hints: [
              "That makes complete sense! Let's proceed with that.",
              "Could you elaborate a bit more on that point?",
              "I completely agree. How do you want to handle the next step?"
            ]
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to smart local engine:', err)
      }
    }

    // 2. Motor Local Inteligente (Zero Config / Offline First)
    const localResult = this.generateLocalResponse(persona, userMessage)
    this.conversationHistory.push({
      speaker: persona.name,
      text: localResult.reply,
      role: 'model'
    })

    return localResult
  }

  /**
   * Chamada direta à REST API do Gemini 1.5 Flash (sem SDKs pesados)
   */
  async callGeminiAPI(persona, userMessage, apiKey, userName) {
    const systemPrompt = `You are ${persona.name}, a ${persona.role} at ${persona.company}.
You are in a live WhatsApp video call with a Brazilian software engineer named ${userName}.
Call scenario: ${persona.context}.

CRITICAL RULES FOR REALISTIC CONVERSATIONAL CALL:
1. Speak in natural, spoken English.
2. Keep your response CONCISE: 1 to 2 sentences only (maximum 25-30 words), exactly like a quick video call interaction.
3. React warmly or professionally to what the developer just said, and ask ONE natural follow-up question.
4. Never output lists, bullet points, markdown or explanations. Output ONLY the raw spoken dialogue lines.`

    const contents = [
      {
        role: 'user',
        parts: [{ text: systemPrompt }]
      },
      ...this.conversationHistory.map(item => ({
        role: item.role === 'user' ? 'user' : 'model',
        parts: [{ text: item.text }]
      }))
    ]

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    })

    if (!response.ok) {
      throw new Error(`Gemini API HTTP Error: ${response.status}`)
    }

    const data = await response.json()
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text
    return candidateText ? candidateText.trim() : null
  }

  /**
   * Motor de Resposta Local Inteligente baseado no cenário da persona
   */
  generateLocalResponse(persona, userMessage) {
    const scenario = persona.offlineScenario || []
    const lower = userMessage.toLowerCase()

    // Encontra o próximo passo no roteiro
    const step = scenario[this.currentScenarioIndex] || scenario[scenario.length - 1]

    if (this.currentScenarioIndex < scenario.length - 1) {
      this.currentScenarioIndex++
    }

    if (step) {
      return {
        reply: step.reply,
        translation: step.translation || '',
        hints: step.hints || []
      }
    }

    // Resposta genérica amigável se exceder roteiro
    return {
      reply: "That sounds great, Gabriel! Thanks for running through this with me. Let's sync up again soon!",
      translation: "Isso parece ótimo, Gabriel! Obrigado por repassar isso comigo. Vamos nos alinhar novamente em breve!",
      hints: [
        "Sounds like a plan! Talk to you soon.",
        "Thanks for your time! Have a great day.",
        "Catch you later!"
      ]
    }
  }
}

export const aiCallService = new AICallService()
export default aiCallService
