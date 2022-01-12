import './register-fonts'
import ReactDOM from 'react-dom'
import { PDFViewer } from '~/react-pdf'
import { Lang } from '~/types'
import { App } from '~/app'
import data from '~/data/en.json'
import './styles.css'

ReactDOM.render(
  <PDFViewer className="pdf-viewer">
    <App {...data} lang={data.lang as Lang} />
  </PDFViewer>,
  document.getElementById('root')
)
