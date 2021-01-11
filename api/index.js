import React from 'react'
import { renderToStream } from '@react-pdf/renderer'
import { App } from '../src'

export default async (req, res) => {
  const stream = await renderToStream(<App />)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Cache-Control', 'max-age=0, must-revalidate')
  stream.pipe(res)
}
