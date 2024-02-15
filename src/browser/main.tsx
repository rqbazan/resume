import ReactDOM from 'react-dom'
import { App } from '~/app'
import data from '~/data/es.json'
import { PDFViewer } from '~/react-pdf'
import { Lang } from '~/types'
import './register-fonts'
import './styles.css'

ReactDOM.render(
  <PDFViewer className="pdf-viewer">
    <App {...data} lang={data.lang as Lang} />
  </PDFViewer>,
  document.getElementById('root'),
)
