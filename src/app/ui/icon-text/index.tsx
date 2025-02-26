import { cn } from '~/app/cn'
import { useTheme } from '~/app/hooks/use-theme'
import { type Style, StyleSheet, Text, View } from '~/react-pdf'
import { Icon, type IconName } from '../icon'

export interface IconTextProps {
  style?: Style
  text: string
  iconName: IconName
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Quicksand',
    fontSize: 8,
    marginLeft: 4,
  },
})

export function IconText({ style, text, iconName }: IconTextProps) {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <Icon size={10} name={iconName} />
      <Text style={[styles.text, { color: theme.colors.text }]}>{text}</Text>
    </View>
  )
}
