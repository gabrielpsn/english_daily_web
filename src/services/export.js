import { jsPDF } from 'jspdf'

export const exportService = {
  /**
   * Exporta todo o estado do progresso para um arquivo JSON local (Backup)
   * @param {Object} data - Dados obtidos do useStudyStore e useAchievementsStore
   */
  exportToJSON(data) {
    try {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2))
      const downloadAnchor = document.createElement('a')
      downloadAnchor.setAttribute('href', dataStr)
      downloadAnchor.setAttribute('download', `english-study-pro-backup-${new Date().toLocaleDateString('sv')}.json`)
      document.body.appendChild(downloadAnchor)
      downloadAnchor.click()
      downloadAnchor.remove()
      return true
    } catch (e) {
      console.error('Erro ao exportar JSON:', e)
      return false
    }
  },

  /**
   * Importa dados de progresso de um arquivo JSON (Restore)
   * @param {File} file - Arquivo de backup selecionado pelo usuário
   * @returns {Promise<Object>} Promessa com os dados importados validados
   */
  importFromJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result)
          
          // Validação básica do schema do backup
          if (
            parsed &&
            (Array.isArray(parsed.completedLessons) ||
             parsed.notes ||
             Array.isArray(parsed.studyDates))
          ) {
            resolve(parsed)
          } else {
            reject(new Error('Arquivo de backup inválido ou corrompido.'))
          }
        } catch (err) {
          reject(new Error('Erro ao ler a estrutura do arquivo JSON.'))
        }
      }
      reader.onerror = () => reject(new Error('Erro na leitura física do arquivo.'))
      reader.readAsText(file)
    })
  },

  /**
   * Exporta o progresso geral e notas para formato CSV
   * @param {Array} completedLessons - Aulas concluídas
   * @param {Object} notes - Dicionário de anotações
   */
  exportToCSV(completedLessons, notes) {
    try {
      let csvContent = 'data:text/csv;charset=utf-8,\uFEFF' // Inclui BOM para acentuação no Excel
      csvContent += 'Dia,Status,Anotacao\n'

      for (let day = 1; day <= 90; day++) {
        const isCompleted = completedLessons.includes(day) ? 'Concluida' : 'Pendente'
        let noteText = notes[day.toString()] || ''
        // Escapa aspas duplas no CSV
        noteText = noteText.replace(/"/g, '""')
        
        csvContent += `${day},${isCompleted},"${noteText}"\n`
      }

      const encodedUri = encodeURI(csvContent)
      const downloadAnchor = document.createElement('a')
      downloadAnchor.setAttribute('href', encodedUri)
      downloadAnchor.setAttribute('download', `english-study-pro-progresso-${new Date().toLocaleDateString('sv')}.csv`)
      document.body.appendChild(downloadAnchor)
      downloadAnchor.click()
      downloadAnchor.remove()
      return true
    } catch (e) {
      console.error('Erro ao exportar CSV:', e)
      return false
    }
  },

  /**
   * Exporta um relatório elegante e estilizado em PDF do progresso do aluno
   * @param {Object} stats - Estatísticas contendo progresso, streak, tempo e notas
   */
  exportToPDF(stats) {
    const { progress, completedCount, streak, totalMinutes, notes, completedLessons, userName = 'Gabriel' } = stats

    try {
      const doc = new jsPDF()
      
      // Cores do Design Eclipse Night
      const primaryColor = [94, 53, 177] // #5E35B1
      const darkColor = [13, 11, 24] // #0d0b18
      const grayColor = [100, 100, 100]

      // --- CAPA / CABEÇALHO ---
      // Barra de cabeçalho estilizada
      doc.setFillColor(...primaryColor)
      doc.rect(0, 0, 210, 40, 'F')

      doc.setTextColor(255, 255, 255)
      doc.setFont('Helvetica', 'bold')
      doc.setFontSize(22)
      doc.text('ENGLISH STUDY PRO', 15, 20)

      doc.setFont('Helvetica', 'normal')
      doc.setFontSize(10)
      doc.text('Plano de Estudos de 90 Dias - Relatorio de Evolucao', 15, 30)

      // Data de emissão à direita
      const todayStr = new Date().toLocaleDateString('pt-BR')
      doc.text(`Emitido em: ${todayStr}`, 155, 25)

      // --- QUADRO DE METRICAS ---
      doc.setTextColor(...darkColor)
      doc.setFont('Helvetica', 'bold')
      doc.setFontSize(14)
      doc.text('Resumo do Desempenho', 15, 55)

      // Linha separadora
      doc.setDrawColor(230, 230, 230)
      doc.line(15, 58, 195, 58)

      // Cards de Métricas
      // 1. Progresso
      doc.setFillColor(245, 243, 250)
      doc.rect(15, 64, 55, 26, 'F')
      doc.setFontSize(10)
      doc.setTextColor(...grayColor)
      doc.text('PROGRESSO GERAL', 20, 72)
      doc.setFontSize(18)
      doc.setTextColor(...primaryColor)
      doc.text(`${progress}%`, 20, 84)

      // 2. Concluídas
      doc.setFillColor(245, 243, 250)
      doc.rect(77, 64, 55, 26, 'F')
      doc.setFontSize(10)
      doc.setTextColor(...grayColor)
      doc.text('AULAS CONCLUIDAS', 82, 72)
      doc.setFontSize(18)
      doc.setTextColor(...primaryColor)
      doc.text(`${completedCount} / 90`, 82, 84)

      // 3. Streak Ativo
      doc.setFillColor(245, 243, 250)
      doc.rect(140, 64, 55, 26, 'F')
      doc.setFontSize(10)
      doc.setTextColor(...grayColor)
      doc.text('STREAK DIARIO', 145, 72)
      doc.setFontSize(18)
      doc.setTextColor(251, 140, 0) // Laranja Warning
      doc.text(`${streak} Dias`, 145, 84)

      // --- HISTORICO E ANOTAÇÕES ---
      doc.setTextColor(...darkColor)
      doc.setFont('Helvetica', 'bold')
      doc.setFontSize(14)
      doc.text('Historico de Anotacoes de Estudo', 15, 105)
      doc.line(15, 108, 195, 108)

      let yPos = 118
      const maxPageHeight = 275

      const noteKeys = Object.keys(notes).sort((a, b) => Number(a) - Number(b))

      if (noteKeys.length === 0) {
        doc.setFont('Helvetica', 'italic')
        doc.setFontSize(11)
        doc.setTextColor(...grayColor)
        doc.text('Nenhuma anotacao registrada nas licoes ate o momento.', 15, yPos)
      } else {
        noteKeys.forEach(dayStr => {
          const noteText = notes[dayStr]
          if (!noteText.trim()) return

          // Verifica se precisa de quebra de página
          if (yPos > maxPageHeight - 30) {
            doc.addPage()
            yPos = 25
          }

          doc.setFont('Helvetica', 'bold')
          doc.setFontSize(11)
          doc.setTextColor(...primaryColor)
          doc.text(`Dia ${dayStr}:`, 15, yPos)

          doc.setFont('Helvetica', 'normal')
          doc.setFontSize(10.5)
          doc.setTextColor(50, 50, 50)
          
          // Formata quebra automática de texto para caber na página A4
          const splitNote = doc.splitTextToSize(noteText, 175)
          doc.text(splitNote, 32, yPos)
          
          yPos += (splitNote.length * 5) + 6
        })
      }

      // --- RODAPÉ DE PÁGINA ---
      const pageCount = doc.internal.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.setFont('Helvetica', 'normal')
        doc.setFontSize(8)
        doc.setTextColor(...grayColor)
        doc.text(`Pagina ${i} de ${pageCount}`, 100, 290, { align: 'center' })
        doc.text(`English Study Pro - Aluno: ${userName}`, 15, 290)
      }

      doc.save(`english-study-pro-relatorio-${new Date().toLocaleDateString('sv')}.pdf`)
      return true
    } catch (e) {
      console.error('Erro ao exportar PDF:', e)
      return false
    }
  }
}

export default exportService
