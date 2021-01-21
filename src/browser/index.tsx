import './register-fonts'
import type { AppProps } from '@app'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import { Query } from './query'
import { AppProvider } from '../app'

ReactDOM.render(
  <React.StrictMode>
    <Query>
      {(data: AppProps) => (
        // @ts-expect-error
        <PDFViewer className="pdf" frameBorder="0">
          <AppProvider {...data} />
        </PDFViewer>
      )}
    </Query>
  </React.StrictMode>,
  document.getElementById('root')
)
