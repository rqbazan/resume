import * as React from 'react'
import { Style, View } from '~/react-pdf'
import { WorkPost } from '../work-post'
import { IconText } from '../icon-text'
import { DateRange } from '../date-range'

export interface EducationPostProps {
  style?: Style
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
  children,
}) => {
  return (
    <View style={style}>
      <WorkPost.Title>{title}</WorkPost.Title>
      <WorkPost.WorkPlace style={{ marginTop: 4, marginBottom: 4 }}>
        {almaMater}
      </WorkPost.WorkPlace>
      <DateRange style={{ marginBottom: 4 }} startAt={startAt} endAt={endAt} />
      <IconText
        style={{ marginBottom: 4 }}
        iconName="location"
        text={location}
      />
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  )
}
