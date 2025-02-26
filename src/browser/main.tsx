import { createRoot } from 'react-dom/client'
import { App } from '~/app'
import data from '~/data/es.json'
import { PDFViewer } from '~/react-pdf'
import type { Lang } from '~/types'
import './register-fonts'
import './styles.css'

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <PDFViewer className="pdf-viewer">
      <App {...data} lang={data.lang as Lang} />
    </PDFViewer>,
  )
}
