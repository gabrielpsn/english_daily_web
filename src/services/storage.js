// Serviço de Armazenamento e Persistência no LocalStorage
const STORAGE_KEY = 'english-study-app'

export const storageService = {
  /**
   * Salva o estado completo no LocalStorage
   * @param {Object} data - Dados a serem serializados
   * @returns {boolean} Sucesso da operação
   */
  save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      return true
    } catch (e) {
      console.error('Erro ao salvar dados no LocalStorage:', e)
      return false
    }
  },

  /**
   * Carrega os dados salvos no LocalStorage
   * @returns {Object|null} Dados desserializados ou null se vazio
   */
  load() {
    try {
      const dataString = localStorage.getItem(STORAGE_KEY)
      if (!dataString) return null
      return JSON.parse(dataString)
    } catch (e) {
      console.error('Erro ao ler dados do LocalStorage:', e)
      return null
    }
  },

  /**
   * Limpa todos os dados salvos do app no LocalStorage
   * @returns {boolean} Sucesso da operação
   */
  reset() {
    try {
      localStorage.removeItem(STORAGE_KEY)
      return true
    } catch (e) {
      console.error('Erro ao resetar dados do LocalStorage:', e)
      return false
    }
  }
}

export default storageService
