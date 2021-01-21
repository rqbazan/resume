export function getTheme(options) {
  const primaryColor = options?.primaryColor ?? '#a300cb'

  return {
    colors: {
      text: '#2d3c42',
      gray: '#929596',
      ligthGray: '#e9e9e9',
      primary: primaryColor
    }
  }
}
