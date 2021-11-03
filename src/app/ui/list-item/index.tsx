import { useTheme } from '~/app/hooks/use-theme'
import { Text, View, Style, StyleSheet } from '~/react-pdf'
import { Icon } from '../icon'

export interface ListItemProps {
  style?: Style
  children: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  text: {
    fontSize: 8,
    fontFamily: 'OpenSans',
    flex: 1,
  },
})

export function ListItem({ style, children }: ListItemProps) {
  const theme = useTheme()

  return (
    <View style={[styles.container, style!]}>
      <Icon name="dot" size={3.5} style={{ margin: 4, marginRight: 8 }} />
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {children.replace(/\xa0/g, ' ')}
      </Text>
    </View>
  )
}
