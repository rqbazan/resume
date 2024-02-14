import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getTechProfile, getTechResume } from '../src/lib/airtable.js'
import type { Lang } from '../src/types'

// @ts-ignore
import { renderAppToStream } from '../.lib/server.cjs'

type Query = {
  id: string
  lang: Lang
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const { id, lang = 'en' } = req.query as Query

  const [techProfile, techResume] = await Promise.all([
    getTechProfile(),
    getTechResume({ id, lang }),
  ])

  if (!techResume) {
    return res.redirect(techProfile.website)
  }

  const appProps = {
    lang,
    techProfile,
    techResume,
  }

  if (process.env.NODE_ENV !== 'production') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
    res.setHeader('Cache-Control', 'max-age=60')
    res.json(appProps)
    return
  }

  const stream = await renderAppToStream(appProps)
  res.setHeader('Content-Type', 'application/pdf')
  stream.pipe(res)
}
