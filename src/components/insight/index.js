import React from 'react'
import { View, Image } from '@react-pdf/renderer'
import { Container, Title, Description } from './elements'

export default function Insight({ style, title, description, iconSource }) {
  return (
    <Container style={style}>
      {iconSource && (
        <Image
          source={iconSource}
          style={{ width: 32, height: 32, marginRight: 6 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </View>
    </Container>
  )
}
