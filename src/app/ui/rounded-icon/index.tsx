import * as React from 'react'
import { cn } from '~/app/cn'
import { useTheme } from '~/app/hooks/use-theme'
import { StyleSheet, View } from '~/react-pdf'
import { Icon, type IconProps } from '../icon'

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    borderRadius: 99999,
  },
})

export function RoundedIcon({ style, ...props }: IconProps) {
  const theme = useTheme()

  return (
    <View
      style={cn(
        styles.container,
        { backgroundColor: theme.colors.ligthGray },
        style,
      )}
    >
      <Icon {...props} />
    </View>
  )
}
