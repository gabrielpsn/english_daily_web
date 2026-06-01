/**
   * Limpa uma string removendo pontuações, caracteres especiais e espaços excessivos
   * @param {string} str - String a ser limpa
   * @returns {string} String higienizada
   */
export function cleanString(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '') // Remove pontuações
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
 * Calcula a similaridade em porcentagem entre duas strings
 * @param {string} original - Frase de referência original
 * @param {string} spoken - Frase falada capturada pelo reconhecimento
 * @returns {number} Porcentagem de similaridade (0 a 100)
 */
export function calculateSimilarity(original, spoken) {
  const s1 = cleanString(original)
  const s2 = cleanString(spoken)
  
  if (!s1 && !s2) return 100
  if (!s1 || !s2) return 0
  if (s1 === s2) return 100

  const distance = calculateLevenshtein(s1, s2)
  const maxLength = Math.max(s1.length, s2.length)
  const similarity = ((maxLength - distance) / maxLength) * 100
  
  return Math.round(similarity)
}
export default calculateSimilarity
