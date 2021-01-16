import './register-fonts.server'
import * as React from 'react'
import { renderToStream } from '@react-pdf/renderer'
import { App } from './app'

export const renderAppToStream = () => renderToStream(<App />)
