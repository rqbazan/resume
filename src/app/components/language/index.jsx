import React from 'react'
import Score from '../score'
import { Container, Name, Label } from './elements'

export default function Language({ style, name, scoreLabel, score }) {
  return (
    <Container style={style}>
      <Name>{name}</Name>
      <Label>{scoreLabel}</Label>
      <Score id="language" rank={score} />
    </Container>
  )
}
