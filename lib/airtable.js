import Airtable from 'airtable'

const db = Airtable.base(process.env.AIRTABLE_BASE)

export async function getTechProfile() {
  return db('Tech Profiles')
    .find(process.env.AIRTABLE_RECORD_ID)
    .then(record => record.fields)
}

export async function getTechResume() {
  return {}
}
