import * as React from 'react'
import { cn } from '~/app/cn'
import { useTheme } from '~/app/hooks/use-theme'
import { Style, StyleSheet, Text } from '~/react-pdf'

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
})

export const Resume: React.FC<{ style?: Style }> = ({ children, style }) => {
  const theme = useTheme()

  return (
    <Text style={cn(styles.container, { color: theme.colors.text }, style)}>
      {children}
    </Text>
  )
}
