import * as React from 'react'
import ReactPDF from '@react-pdf/renderer'
import { Container, Title, Separator } from './elements'

export interface SectionProps {
  style?: ReactPDF.Style
  title: string
  spacing: number
}

export const Section: React.FC<SectionProps> = ({
  style,
  title,
  spacing,
  children
}) => {
  const size = React.Children.count(children)

  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Separator />
      {React.Children.map(children, (child, index) => {
        const mb = index + 1 === size ? 0 : spacing
        const style = { marginBottom: mb }

        // @ts-expect-error
        return mb ? React.cloneElement(child, { style }) : child
      })}
    </Container>
  )
}
