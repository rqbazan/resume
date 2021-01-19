import { getTechProfile, getTechResume } from '../lib/airtable'
import { renderAppToStream } from '../lib/app'

export default async (req, res) => {
  const [techProfile, techResume] = await Promise.all([
    getTechProfile(),
    getTechResume()
  ])

  if (
    process.env.NODE_ENV !== 'production' &&
    req.headers.accept === 'application/json'
  ) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
    res.json({ techProfile, techResume })
    return
  }

  const stream = await renderAppToStream({ techProfile, techResume })
  res.setHeader('Content-Type', 'application/pdf')
  stream.pipe(res)
}
