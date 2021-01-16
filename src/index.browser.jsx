import './register-fonts.browser'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import { App } from './app'

ReactDOM.render(
  <React.StrictMode>
    <PDFViewer className="pdf" frameBorder="0">
      <App />
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById('root')
)
