import React from 'react'
import { Container, Title, Separator } from './elements'

export default function Section({ style, title, children }) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Separator />
      {children}
    </Container>
  )
}
