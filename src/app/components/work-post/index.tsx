import React from 'react'
import ReactPDF, { View } from '@react-pdf/renderer'
import { useStrings } from '../../hooks/use-strings'
import { formatDateRange } from '../../utils/format-date-range'
import IconText from '../icon-text'
import { Title, MetaInfoContainer, WorkPlace, Description } from './elements'

export interface WorkPostProps {
  style?: ReactPDF.Style
  endAt?: string
  startAt: string
  title: string
  companyName: string
  location: string
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
  startAt,
  endAt,
  description,
  children
}) => {
  const s = useStrings()

  return (
    <View style={style}>
      <Title>{title}</Title>
      <MetaInfoContainer>
        {companyName && <WorkPlace>{companyName}</WorkPlace>}
        <IconText
          style={{ marginLeft: companyName ? 'auto' : 0, marginRight: 16 }}
          text={formatDateRange(startAt, endAt, {
            fallbackEndAt: s['placeholder.endAt']
          })}
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
