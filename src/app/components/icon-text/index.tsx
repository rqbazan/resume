import React from 'react'
import Icon from '../icon'
import { Container, Text } from './elements'

export interface IconTextProps {
  style?: unknown
  text: string
  iconName: string
}

export default function IconText({ style, text, iconName }: IconTextProps) {
  return (
    <Container style={style}>
      <Icon size={10} name={iconName} />
      <Text>{text}</Text>
    </Container>
  )
}
