import Airtable from 'airtable'
import { config } from './config.js'

Airtable.configure({
  requestTimeout: 3000,
})

export const db = Airtable.base(config.base)

export type { FieldSet, Record } from 'airtable'
