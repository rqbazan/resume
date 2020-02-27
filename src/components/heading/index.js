import React from 'react'
import IconText from '../icon-text'
import iconSources from '../../icon-sources'
import { Container, Title, SubTitle, InfoContainer } from './elements'

export default function Heading({ style, title, subtitle, information }) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <InfoContainer>
        <IconText
          text={information.phone}
          iconSource={iconSources.call}
          style={{ marginRight: 16 }}
        />
        <IconText
          text={information.email}
          iconSource={iconSources.atSymbol}
          style={{ marginRight: 16 }}
        />
        <IconText
          text={information.website}
          iconSource={iconSources.link}
          style={{ marginRight: 16 }}
        />
        <IconText
          text={information.location}
          iconSource={iconSources.location}
        />
      </InfoContainer>
    </Container>
  )
}
