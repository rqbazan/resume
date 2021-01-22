import React from 'react'
import ReactPDF, { View } from '@react-pdf/renderer'
import { useStrings } from '../../hooks/use-strings'
import { formatDateRange } from '../../utils/format-date-range'
import { WorkPost } from '../work-post'
import { IconText } from '../icon-text'

export interface EducationPostProps {
  style?: ReactPDF.Style
  endAt?: string
  startAt: string
  title: string
  almaMater: string
  location: string
}

export const EducationPost: React.FC<EducationPostProps> = ({
  style,
  title,
  almaMater,
  startAt,
  endAt,
  location,
  children
}) => {
  const s = useStrings()

  return (
    <View style={style}>
      <WorkPost.Title>{title}</WorkPost.Title>
      <WorkPost.WorkPlace style={{ marginTop: 4, marginBottom: 4 }}>
        {almaMater}
      </WorkPost.WorkPlace>
      <IconText
        style={{ marginBottom: 4 }}
        iconName="calendar"
        text={formatDateRange(startAt, endAt, {
          fallbackEndAt: s['placeholder.endAt']
        })}
      />
      <IconText
        style={{ marginBottom: 4 }}
        iconName="location"
        text={location}
      />
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  )
}
