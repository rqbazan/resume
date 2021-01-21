import airtable from 'airtable'
import type { TechProfile, TechResume } from '@app'

type Relation = {
  table: string
  linkField: keyof TechResume
}

const db = airtable.base(process.env.AIRTABLE_BASE)

function toJSON(record) {
  const fn = r => ({ id: r.id, ...r.fields })

  if (Array.isArray(record)) {
    return record.map(fn)
  }

  return fn(record)
}

export async function getTechProfile(): Promise<TechProfile> {
  return db('Tech Profiles').find(process.env.AIRTABLE_RECORD_ID).then(toJSON)
}

export async function getTechResume({ id, lang }): Promise<TechResume> {
  const table = 'Tech Resumes'

  function $in(IDS: string[]): string {
    return `OR(${IDS.map(id => `RECORD_ID() = "${id}"`).join(',')})`
  }

  async function getTechResumeRecord() {
    if (id) {
      return db(table)
        .find(id)
        .catch(e => console.log(e))
    }

    const [record] = await db(table)
      .select({
        filterByFormula: `AND(published = TRUE(), lang = "${lang}")`,
        sort: [{ field: 'createdAt', direction: 'desc' }],
        maxRecords: 1
      })
      .firstPage()

    return record
  }

  const record = await getTechResumeRecord()

  if (!record) {
    return null
  }

  const relations: Relation[] = [
    {
      table: 'Lang Skills',
      linkField: 'langSkills'
    },
    {
      table: 'Strengths',
      linkField: 'strengths'
    },
    {
      table: 'Tech Groups',
      linkField: 'techGroups'
    },
    {
      table: 'Work Experiences',
      linkField: 'workExperiences'
    },
    {
      table: 'Education Experiences',
      linkField: 'educationExperiences'
    },
    {
      table: 'Work Projects',
      linkField: 'workProjects'
    }
  ]

  const promises = relations.map(async ({ table, linkField }) => {
    const data = await db(table)
      .select({
        filterByFormula: $in(record.get(linkField)),
        view: 'All'
      })
      .all()

    record.set(linkField, toJSON(data))
  })

  await Promise.all(promises)

  return toJSON(record)
}
