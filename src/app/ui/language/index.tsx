import { useTheme } from '~/app/hooks/use-theme'
import { View, Text, Style, StyleSheet } from '~/react-pdf'
import { Score } from '../score'

export interface LanguageProps {
  style?: Style
  name: string
  scoreLabel: string
  score: number
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
  scoreLabel: {
    fontFamily: 'OpenSans',
    fontSize: 8,
    marginLeft: 'auto',
    marginRight: 5,
  },
})

export function Language({ style, name, scoreLabel, score }: LanguageProps) {
  const theme = useTheme()

  return (
    <View style={[styles.container, style!]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={[styles.scoreLabel, { color: theme.colors.text }]}>
        {scoreLabel}
      </Text>
      <Score id="language" rank={score} />
    </View>
  )
}
