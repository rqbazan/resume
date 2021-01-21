export interface ThemeOptions {
  primaryColor: string
}

export interface Theme {
  colors: {
    text: string
    gray: string
    ligthGray: string
    primary: string
  }
}

export function getTheme(options: ThemeOptions): Theme {
  return {
    colors: {
      text: '#2d3c42',
      gray: '#929596',
      ligthGray: '#e9e9e9',
      primary: options.primaryColor
    }
  }
}
