declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AIRTABLE_BASE: string
      AIRTABLE_RECORD_ID: string
    }
  }
}

export {}
