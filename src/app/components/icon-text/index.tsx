import * as React from 'react'
import ReactPDF from '@react-pdf/renderer'
import { Icon } from '../icon'
import { Container, Text } from './elements'

export interface IconTextProps {
  style?: ReactPDF.Style
  text: string
  iconName: string
}

export function IconText({ style, text, iconName }: IconTextProps) {
  return (
    <Container style={style}>
      <Icon size={10} name={iconName} />
      <Text>{text}</Text>
    </Container>
  )
}
