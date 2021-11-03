import * as React from 'react'
import { useTheme } from '~/app/hooks/use-theme'
import { Text, Style, StyleSheet } from '~/react-pdf'

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
})

export const Resume: React.FC<{ style?: Style }> = ({ children, style }) => {
  const theme = useTheme()

  return (
    <Text style={[styles.container, { color: theme.colors.text }, style!]}>
      {children}
    </Text>
  )
}
