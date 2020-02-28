import React from 'react'
import Icon from '../icon'
import { Container, Text } from './elements'

export default function IconText({ style, text, iconName }) {
  return (
    <Container style={style}>
      <Icon size={10} name={iconName} />
      <Text>{text}</Text>
    </Container>
  )
}
