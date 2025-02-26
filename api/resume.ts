import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getTechProfile, getTechResume } from '../src/lib/airtable/api.js'
import { config as airtableConfig } from '../src/lib/airtable/config.js'
import type { Lang } from '../src/types'

// @ts-ignore
import { renderAppToStream } from '../.lib/server.cjs'

type Query = {
  id: string
  lang: Lang
}

export const config = {
  maxDuration: 30,
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'GET' && req.method !== 'OPTIONS') {
    return res.status(405).send({
      error: 'Method not allowed',
    })
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).send(null)
  }

  try {
    const { id, lang = 'en' } = req.query as Query

    const [techProfile, techResume] = await Promise.all([
      getTechProfile({ id: airtableConfig.defaultProfileId }),
      getTechResume({ id, lang }),
    ])

    if (!techResume) {
      return res.status(404).send({
        error: 'Resume not found',
      })
    }

    if (!techProfile) {
      return res.status(404).send({
        error: 'Profile not found',
      })
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
  } catch (error) {
    console.error(error)
    res.status(500).send({
      error: 'An error occurred while fetching the resume',
    })
  }
}
