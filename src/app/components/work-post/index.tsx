import React from 'react'
import ReactPDF, { View } from '@react-pdf/renderer'
import IconText from '../icon-text'
import { Title, MetaInfoContainer, WorkPlace, Description } from './elements'

export interface WorkPostProps {
  style?: ReactPDF.Style
  children?: unknown
  title: string
  companyName: string
  location: string
  period: string
  description: string
}

type StaticProps = {
  Title: typeof Title
  WorkPlace: typeof WorkPlace
}

const WorkPost: React.FC<WorkPostProps> & StaticProps = ({
  style,
  title,
  companyName,
  location,
  period,
  description,
  children
}) => {
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
      {children && <View style={{ marginTop: 10 }}>{children}</View>}
    </View>
  )
}

WorkPost.Title = Title

WorkPost.WorkPlace = WorkPlace

export default WorkPost
