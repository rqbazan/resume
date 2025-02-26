import invariant from 'tiny-invariant'

invariant(process.env.AIRTABLE_BASE, 'Missing AIRTABLE_BASE env var')
invariant(process.env.AIRTABLE_RECORD_ID, 'Missing AIRTABLE_RECORD_ID env var')

export const config = {
  base: process.env.AIRTABLE_BASE,
  defaultProfileId: process.env.AIRTABLE_RECORD_ID,
}
