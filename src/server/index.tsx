import './register-fonts'
import * as React from 'react'
import ReactPDF from '@react-pdf/renderer'
import type { AppProps } from '@app'
import { AppProvider } from '../app'

export function renderAppToStream(props: AppProps) {
  return ReactPDF.renderToStream(<AppProvider {...props} />)
}
