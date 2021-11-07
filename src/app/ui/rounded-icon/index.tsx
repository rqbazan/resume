import * as React from 'react'
import { useTheme } from '~/app/hooks/use-theme'
import { StyleSheet, View } from '~/react-pdf'
import { Icon, IconProps } from '../icon'

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
      style={[
        styles.container,
        { backgroundColor: theme.colors.ligthGray },
        style!,
      ]}
    >
      <Icon {...props} />
    </View>
  )
}
