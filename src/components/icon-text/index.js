import React from 'react'
import { Container, Text, Image } from './elements'

export default function IconText({ style, text, iconSource }) {
  return (
    <Container style={style}>
      <Image source={iconSource} />
      <Text>{text}</Text>
    </Container>
  )
}
