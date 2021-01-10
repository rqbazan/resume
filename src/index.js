import 'normalize.css'
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import App from './app'

ReactDOM.render(
  <PDFViewer className="pdf" frameBorder="0">
    <App />
  </PDFViewer>,
  document.getElementById('root')
)
