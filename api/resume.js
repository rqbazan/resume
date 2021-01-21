import { getTechProfile, getTechResume } from '../lib/airtable'
import { renderAppToStream } from '../lib/app'

export default async (req, res) => {
  const { lang = 'es' } = req.query

  const [techProfile, techResume] = await Promise.all([
    getTechProfile(),
    getTechResume({ lang })
  ])

  const data = {
    lang,
    techProfile,
    techResume
  }

  if (process.env.NODE_ENV !== 'production') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
    res.setHeader('Cache-Control', 'max-age=60')
    res.json(data)
    return
  }

  const stream = await renderAppToStream(data)
  res.setHeader('Content-Type', 'application/pdf')
  stream.pipe(res)
}
