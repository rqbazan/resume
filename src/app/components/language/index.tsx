import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import Score from '../score'
import { Container, Name, Label } from './elements'

export interface LanguageProps {
  style?: ReactPDF.Style
  name: string
  scoreLabel: string
  score: number
}

export default function Language({
  style,
  name,
  scoreLabel,
  score
}: LanguageProps) {
  return (
    <Container style={style}>
      <Name>{name}</Name>
      <Label>{scoreLabel}</Label>
      <Score id="language" rank={score} />
    </Container>
  )
}
