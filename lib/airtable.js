import Airtable from 'airtable'

const db = Airtable.base(process.env.AIRTABLE_BASE)

function $in(IDS) {
  return `OR(${IDS.map(id => `RECORD_ID() = "${id}"`).join(',')})`
}

function toJSON(record) {
  const fn = r => ({ id: r.id, ...r.fields })

  if (Array.isArray(record)) {
    return record.map(fn)
  }

  return fn(record)
}

export async function getTechProfile() {
  return db('Tech Profiles').find(process.env.AIRTABLE_RECORD_ID).then(toJSON)
}

export async function getTechResume({ lang }) {
  const table = 'Tech Resumes'

  const [record] = await db(table)
    .select({
      filterByFormula: `AND(published = TRUE(), lang = "${lang}")`,
      sort: [{ field: 'createdAt', direction: 'desc' }],
      maxRecords: 1
    })
    .firstPage()

  const relations = [
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

  const promises = relations.map(({ table, linkField }) => {
    return db(table)
      .select({
        filterByFormula: $in(record.get(linkField)),
        view: 'All'
      })
      .all()
      .then(data => record.set(linkField, toJSON(data)))
  })

  await Promise.all(promises)

  return toJSON(record)
}
