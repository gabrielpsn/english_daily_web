/**
 * Dicionário de equivalência de contrações idiomáticas comuns em inglês
 */
const CONTRACTIONS = {
  "i'm": 'i am',
  "you're": 'you are',
  "he's": 'he is',
  "she's": 'she is',
  "it's": 'it is',
  "we're": 'we are',
  "they're": 'they are',
  "i've": 'i have',
  "you've": 'you have',
  "we've": 'we have',
  "they've": 'they have',
  "i'll": 'i will',
  "you'll": 'you will',
  "he'll": 'he will',
  "she'll": 'she will',
  "we'll": 'we will',
  "they'll": 'they will',
  "i'd": 'i would',
  "you'd": 'you would',
  "he'd": 'he would',
  "she'd": 'she would',
  "we'd": 'we would',
  "they'd": 'they would',
  "don't": 'do not',
  "doesn't": 'does not',
  "didn't": 'did not',
  "can't": 'cannot',
  "couldn't": 'could not',
  "won't": 'will not',
  "wouldn't": 'would not',
  "shouldn't": 'should not',
  "isn't": 'is not',
  "aren't": 'are not',
  "wasn't": 'was not',
  "weren't": 'were not',
  "haven't": 'have not',
  "hasn't": 'has not',
  "hadn't": 'had not'
}

/**
 * Expande contrações do inglês para a forma canônica
 * @param {string} text - Texto a ser expandido
 * @returns {string}
 */
export function expandContractions(text) {
  if (!text) return ''
  let expanded = text.toLowerCase()
  for (const [contraction, fullForm] of Object.entries(CONTRACTIONS)) {
    const escaped = contraction.replace("'", "['’`]?")
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi')
    expanded = expanded.replace(regex, fullForm)
  }
  return expanded
}

/**
 * Limpa uma string removendo pontuações, caracteres especiais, expandindo contrações e normalizando espaços
 * @param {string} str - String a ser limpa
 * @returns {string} String higienizada
 */
export function cleanString(str) {
  if (!str) return ''
  const expanded = expandContractions(str)
  return expanded
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '') // Remove pontuações e apóstrofos
    .replace(/\s+/g, ' ') // Substitui múltiplos espaços por um só
    .trim()
}

/**
 * Calcula a distância de Levenshtein entre duas strings
 * @param {string} s1 - Primeira string
 * @param {string} s2 - Segunda string
 * @returns {number} Distância de edição
 */
export function calculateLevenshtein(s1, s2) {
  const m = s1.length
  const n = s2.length
  const d = []

  for (let i = 0; i <= m; i++) {
    d[i] = [i]
  }
  for (let j = 0; j <= n; j++) {
    d[0][j] = j
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1
      d[i][j] = Math.min(
        d[i - 1][j] + 1, // Remoção
        d[i][j - 1] + 1, // Inserção
        d[i - 1][j - 1] + cost // Substituição
      )
    }
  }

  return d[m][n]
}

/**
 * Compara palavras individuais entre a frase esperada e a frase falada
 * @param {string} original - Frase de referência
 * @param {string} spoken - Frase falada
 * @returns {Array<{ word: string, matched: boolean }>}
 */
export function compareWords(original, spoken) {
  const originalWords = cleanString(original).split(' ').filter(Boolean)
  const spokenWords = cleanString(spoken).split(' ').filter(Boolean)

  return originalWords.map(word => {
    // Procura correspondência exata ou foneticamente muito próxima na fala
    const matched = spokenWords.some(spk => {
      if (word === spk) return true
      const dist = calculateLevenshtein(word, spk)
      return (dist <= 1 && word.length >= 4) || (dist <= 2 && word.length >= 7)
    })
    return { word, matched }
  })
}

/**
 * Calcula a similaridade ponderada entre a frase esperada e a frase falada
 * Combina distância de Levenshtein caractere a caractere com taxa de matching de palavras (Word Recall).
 *
 * @param {string} original - Frase de referência original
 * @param {string} spoken - Frase falada capturada pelo reconhecimento
 * @returns {number} Porcentagem de similaridade justa e balanceada (0 a 100)
 */
export function calculateSimilarity(original, spoken) {
  const s1 = cleanString(original)
  const s2 = cleanString(spoken)

  if (!s1 && !s2) return 100
  if (!s1 || !s2) return 0
  if (s1 === s2) return 100

  // 1. Similaridade por caracteres (Levenshtein)
  const distance = calculateLevenshtein(s1, s2)
  const maxLength = Math.max(s1.length, s2.length)
  const charScore = ((maxLength - distance) / maxLength) * 100

  // 2. Similaridade por palavras (Token Matching)
  const wordDiff = compareWords(original, spoken)
  const matchedWordsCount = wordDiff.filter(w => w.matched).length
  const wordScore = (matchedWordsCount / wordDiff.length) * 100

  // Média ponderada: 60% peso em palavras corretas pronunciadas, 40% em acurácia de caracteres
  const finalScore = Math.max(0, Math.min(100, (wordScore * 0.6) + (charScore * 0.4)))

  return Math.round(finalScore)
}

export default calculateSimilarity
