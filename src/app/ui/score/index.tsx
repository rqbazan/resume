import { useTheme } from '~/app/hooks/use-theme'
import { View } from '~/react-pdf'
import { Icon } from '../icon'

export interface ScoreProps {
  id: string
  rank: number
}

export function Score({ id, rank }: ScoreProps) {
  const theme = useTheme()

  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={`${id}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: no better key
            index
          }`}
          size={5.5}
          name="dot"
          style={{ marginRight: 1 }}
          color={
            index <= rank - 1 ? theme.colors.primary : theme.colors.ligthGray
          }
        />
      ))}
    </View>
  )
}
