import './register-fonts'
import * as React from 'react'
import { renderToStream } from '@react-pdf/renderer'
import { App } from '../app'

export const renderAppToStream = props => renderToStream(<App {...props} />)
