import { cn } from '~/app/cn'
import { useTheme } from '~/app/hooks/use-theme'
import { Style, StyleSheet, Text, View } from '~/react-pdf'
import type { IconName } from '../icon'
import { RoundedIcon } from '../rounded-icon'

export interface InsightProps {
  style?: Style
  iconName?: IconName
  title: string
  description: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
  description: {
    fontFamily: 'OpenSans',
    fontSize: 8,
    marginTop: 2,
  },
})

export function Insight({ style, title, description, iconName }: InsightProps) {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      {iconName && (
        <RoundedIcon
          size={18}
          name={iconName}
          color={theme.colors.primary}
          style={{ marginRight: 6 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.description, { color: theme.colors.text }]}>
          {description}
        </Text>
      </View>
    </View>
  )
}
