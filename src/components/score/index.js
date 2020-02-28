import React from 'react'
import { View } from '@react-pdf/renderer'
import { withTheme } from '@react-pdf/styled-components'
import Icon from '../icon'

function Score({ theme, id, rank }) {
  const { colors } = theme

  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={`${id}-${index}`}
          size={5.5}
          name="dot"
          style={{ marginRight: 1 }}
          color={index <= rank - 1 ? colors.primary : colors.ligthGray}
        />
      ))}
    </View>
  )
}

export default withTheme(Score)
