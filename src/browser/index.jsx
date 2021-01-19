import './register-fonts'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import { Query } from './query'
import { App } from '../app'

ReactDOM.render(
  <React.StrictMode>
    <Query>
      {data => (
        <PDFViewer className="pdf" frameBorder="0">
          <App {...data} />
        </PDFViewer>
      )}
    </Query>
  </React.StrictMode>,
  document.getElementById('root')
)
