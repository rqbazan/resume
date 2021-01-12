import React from 'react'
import { View } from '@react-pdf/renderer'
import IconText from '../icon-text'
import { Title, MetaInfoContainer, WorkPlace, Description } from './elements'

export default function WorkPost({
  style,
  title,
  companyName,
  location,
  period,
  description,
  children
}) {
  return (
    <View style={style}>
      <Title>{title}</Title>
      <MetaInfoContainer>
        {companyName && <WorkPlace>{companyName}</WorkPlace>}
        <IconText
          style={{ marginLeft: companyName ? 'auto' : 0, marginRight: 16 }}
          text={period}
          iconName="calendar"
        />
        <IconText text={location} iconName="location" />
      </MetaInfoContainer>
      {description && <Description>{description}</Description>}
      <View style={{ marginTop: 10 }}>{children}</View>
    </View>
  )
}

WorkPost.Title = Title
WorkPost.WorkPlace = WorkPlace
