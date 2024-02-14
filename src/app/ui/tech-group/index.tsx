import { useTheme } from '~/app/hooks/use-theme'
import { Style, StyleSheet, Text, View } from '~/react-pdf'

export interface TechGroupProps {
  style?: Style
  title: string
  tags: string[]
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tag: {
    fontSize: 9,
    fontFamily: 'OpenSans',
  },
  tagContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export function TechGroup({ style, title, tags }: TechGroupProps) {
  const theme = useTheme()

  return (
    <View style={style}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        {title}
      </Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag) => (
          <View
            key={tag}
            style={[styles.tagContainer, { borderColor: theme.colors.gray }]}
          >
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
