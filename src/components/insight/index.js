import React from 'react'
import { View } from '@react-pdf/renderer'
import { withTheme } from '@react-pdf/styled-components'
import RoundedIcon from '../rounded-icon'
import { Container, Title, Description } from './elements'

function Insight({ style, theme, title, description, iconName }) {
  return (
    <Container style={style}>
      {iconName && (
        <RoundedIcon
          size={18}
          name={iconName}
          color={theme.colors.primary}
          style={{ marginRight: 6 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </View>
    </Container>
  )
}

export default withTheme(Insight)
