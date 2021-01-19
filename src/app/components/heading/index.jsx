import React from 'react'
import IconText from '../icon-text'
import { Container, Title, SubTitle, InfoContainer } from './elements'

export default function Heading({ style, title, subtitle, information }) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <InfoContainer>
        <IconText
          text={information.phone}
          iconName="call"
          style={{ marginRight: 16 }}
        />
        <IconText
          text={information.email}
          iconName="atSymbol"
          style={{ marginRight: 16 }}
        />
        <IconText
          text={information.website}
          iconName="link"
          style={{ marginRight: 16 }}
        />
        <IconText text={information.location} iconName="location" />
      </InfoContainer>
    </Container>
  )
}
