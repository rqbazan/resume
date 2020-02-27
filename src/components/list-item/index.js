import React from 'react'
import { Image } from '@react-pdf/renderer'
import iconSources from '../../icon-sources'
import { Text, Container } from './elements'

export default function ListItem({ style, children }) {
  return (
    <Container style={style}>
      <Image
        style={{ height: 3, width: 3, margin: 4, marginRight: 8 }}
        source={iconSources.dot}
      />
      <Text>{children}</Text>
    </Container>
  )
}
