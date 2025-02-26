import type { Lang, TechProfile, TechResume } from '~/types'
import { type FieldSet, type Record, db } from './connector.js'

interface Relation {
  table: string
  linkField: keyof TechResume
}

interface GetTechResumeOptions {
  id: string
  lang: Lang
}

interface GetTechProfileOptions {
  id: string
}

function toJSON<T extends FieldSet>(record: Record<T>) {
  return { id: record.id, ...record.fields }
}

export async function getTechProfile({
  id,
}: GetTechProfileOptions): Promise<TechProfile | null> {
  const table = 'Tech Profiles'
  const record = await db(table).find(id)

  if (!record) {
    return null
  }

  return toJSON(record as unknown as Record<TechProfile>)
}

export async function getTechResume({
  id,
  lang,
}: GetTechResumeOptions): Promise<TechResume | null> {
  const table = 'Tech Resumes'

  function $in(IDS: string[]) {
    return `OR(${IDS.map((id) => `RECORD_ID() = "${id}"`).join(',')})`
  }

  async function getTechResumeRecord() {
    if (id) {
      return db(table).find(id)
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
    return null
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
    const IDs = record.get(linkField)

    if (!IDs) {
      return
    }

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
