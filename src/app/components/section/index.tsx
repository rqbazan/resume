import React from 'react'
import { Container, Title, Separator } from './elements'

export interface SectionProps {
  style?: unknown
  title: string
  spacing: number
}

const Section: React.FC<SectionProps> = ({
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
        return React.cloneElement(child, { style })
      })}
    </Container>
  )
}

export default Section
