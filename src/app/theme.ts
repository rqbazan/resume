import type { Theme } from '~/types'

export interface ThemeOptions {
  primaryColor: string
}

export function createTheme(options: ThemeOptions): Theme {
  return {
    colors: {
      text: '#2d3c42',
      gray: '#929596',
      ligthGray: '#e9e9e9',
      primary: options.primaryColor,
    },
  }
}
