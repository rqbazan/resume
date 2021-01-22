import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import { Icon } from '../icon'
import { Text, Container } from './elements'

export interface ListItemProps {
  style?: ReactPDF.Style
  children: string
}

export function ListItem({ style, children }: ListItemProps) {
  return (
    <Container style={style}>
      <Icon name="dot" size={3.5} style={{ margin: 4, marginRight: 8 }} />
      <Text>{children.replace(/\xa0/g, ' ')}</Text>
    </Container>
  )
}
