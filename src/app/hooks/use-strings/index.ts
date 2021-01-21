import type { Lang } from '@app'
import constate from 'constate'
import strings from './strings.json'

export interface StringsProviderProps {
  lang: Lang
}

function useStringsValue({ lang }: StringsProviderProps) {
  return {
    ...strings.defaults,
    ...strings[lang]
  }
}

const [StringsProvider, useStrings] = constate(useStringsValue)

export { StringsProvider, useStrings }
