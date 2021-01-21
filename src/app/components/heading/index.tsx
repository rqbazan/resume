import React from 'react'
import { Link } from '@react-pdf/renderer'
import IconText from '../icon-text'
import { Container, Title, SubTitle, InfoContainer } from './elements'

export interface HeadingProps {
  style?: unknown
  title: string
  subtitle: string
  information: {
    phone: string
    email: string
    website: string
    location: string
  }
}

export default function Heading({
  style,
  title,
  subtitle,
  information: { phone, email, website, location }
}: HeadingProps) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <InfoContainer>
        <Link src={`tel:${phone}`} style={{ marginRight: 16 }}>
          <IconText text={phone} iconName="call" />
        </Link>
        <Link src={`mailto:${email}`} style={{ marginRight: 16 }}>
          <IconText text={email} iconName="atSymbol" />
        </Link>
        <Link src={`mailto:${website}`} style={{ marginRight: 16 }}>
          <IconText text={website} iconName="link" />
        </Link>
        <IconText text={location} iconName="location" />
      </InfoContainer>
    </Container>
  )
}
