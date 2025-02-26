declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AIRTABLE_BASE: string | undefined
      AIRTABLE_RECORD_ID: string | undefined
    }
  }
}

export {}
