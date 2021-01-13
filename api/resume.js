import { renderAppToStream } from './_lib'

export default async (req, res) => {
  const stream = await renderAppToStream()
  res.setHeader('Content-Type', 'application/pdf')
  stream.pipe(res)
}
