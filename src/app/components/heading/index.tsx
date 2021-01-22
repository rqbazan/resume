import React from 'react'
import ReactPDF, { Link, View } from '@react-pdf/renderer'
import { IconText } from '../icon-text'
import {
  Container,
  Title,
  SubTitle,
  InfoContainer,
  ImageContainer,
  Image
} from './elements'

export interface HeadingProps {
  style?: ReactPDF.Style
  avatarSize?: number
  avatarUrl?: string
  title: string
  subtitle: string
  information: {
    phone: string
    email: string
    website: string
    location: string
  }
}

export function Heading({
  style,
  title,
  subtitle,
  avatarUrl,
  avatarSize = 100,
  information: { phone, email, website, location }
}: HeadingProps) {
  return (
    <Container style={style}>
      <View>
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
      </View>
      {avatarUrl && (
        <ImageContainer size={avatarSize}>
          <Image size={avatarSize} src={avatarUrl} />
        </ImageContainer>
      )}
    </Container>
  )
}
