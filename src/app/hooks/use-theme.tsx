import * as React from 'react'
import type { Theme } from '~/types'

export interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

// @ts-expect-error
const ThemeContext = React.createContext<Theme>()

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)
