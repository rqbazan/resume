import './register-fonts'
import * as React from 'react'
import type { AppProps } from '@app'
import { renderToStream } from '@react-pdf/renderer'
import { App } from '../app'

export function renderAppToStream(props: AppProps) {
  return renderToStream(<App {...props} />)
}
