import React from 'react'
import { App, renderToStream } from '../lib'

export default async (req, res) => {
  const stream = await renderToStream(React.createElement(App))
  res.setHeader('Content-Type', 'application/pdf')
  stream.pipe(res)
}
