import fs from 'fs'
import path from 'path'
//import { createElement } from 'react'
//import { App, renderToStream } from './_lib'

export default async (req, res) => {
  //const stream = await renderToStream(createElement(App))
  //res.setHeader('Content-Type', 'application/pdf')
  //stream.pipe(res)

  const [files, parentFiles] = await Promise.all([
    fs.promises.readdir(__dirname),
    fs.promises.readdir(path.resolve(__dirname, '..'))
  ])

  res.json({
    pwd: __dirname,
    files,
    parentFiles
  })
}
