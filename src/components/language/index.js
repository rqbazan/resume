import React from 'react'
import { Image } from '@react-pdf/renderer'
import { Container, Name, Score } from './elements'

export default function Language({ style, name, score, scoreSource }) {
  return (
    <Container style={style}>
      <Name>{name}</Name>
      <Score>{score}</Score>
      <Image style={{ height: 5 }} source={scoreSource} />
    </Container>
  )
}
