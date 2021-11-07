import airtable, { Record, FieldSet } from 'airtable'
import type { Lang, TechProfile, TechResume } from '~/types'

interface Relation {
  table: string
  linkField: keyof TechResume
}

interface GetTechResumeOptions {
  id: string
  lang: Lang
}

const db = airtable.base(process.env.AIRTABLE_BASE!)

function toJSON<T extends FieldSet>(record: Record<T>) {
  return { id: record.id, ...record.fields }
}

export async function getTechProfile() {
  return db('Tech Profiles')
    .find(process.env.AIRTABLE_RECORD_ID!)
    .then((record) => toJSON(record as unknown as Record<TechProfile>))
}

export async function getTechResume({
  id,
  lang,
}: GetTechResumeOptions): Promise<TechResume | undefined> {
  const table = 'Tech Resumes'

  function $in(IDS: string[]) {
    return `OR(${IDS.map((id) => `RECORD_ID() = "${id}"`).join(',')})`
  }

  async function getTechResumeRecord() {
    if (id) {
      return db(table)
        .find(id)
        .catch((e) => console.log(e))
    }

    const [record] = await db(table)
      .select({
        filterByFormula: `AND(published = TRUE(), lang = "${lang}")`,
        sort: [{ field: 'createdAt', direction: 'desc' }],
        maxRecords: 1,
      })
      .firstPage()

    return record as unknown as Record<TechResume>
  }

  const record = await getTechResumeRecord()

  if (!record) {
    return
  }

  const relations: Relation[] = [
    {
      table: 'Lang Skills',
      linkField: 'langSkills',
    },
    {
      table: 'Strengths',
      linkField: 'strengths',
    },
    {
      table: 'Tech Groups',
      linkField: 'techGroups',
    },
    {
      table: 'Work Experiences',
      linkField: 'workExperiences',
    },
    {
      table: 'Education Experiences',
      linkField: 'educationExperiences',
    },
    {
      table: 'Work Projects',
      linkField: 'workProjects',
    },
  ]

  const promises = relations.map(async ({ table, linkField }) => {
    const records = await db(table)
      .select({
        filterByFormula: $in(record.get(linkField)),
        view: 'All',
      })
      .all()

    record.set(linkField, records.map(toJSON))
  })

  await Promise.all(promises)

  return toJSON(record as unknown as Record<TechResume>)
}
