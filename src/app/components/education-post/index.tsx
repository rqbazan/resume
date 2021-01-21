import React from 'react'
import ReactPDF, { View } from '@react-pdf/renderer'
import WorkPost from '../work-post'
import IconText from '../icon-text'

export interface EducationPostProps {
  style?: ReactPDF.Style
  title: string
  almaMater: string
  period: string
  location: string
}

const EducationPost: React.FC<EducationPostProps> = ({
  style,
  title,
  almaMater,
  period,
  location,
  children
}) => {
  return (
    <View style={style}>
      <WorkPost.Title>{title}</WorkPost.Title>
      <WorkPost.WorkPlace style={{ marginTop: 4, marginBottom: 4 }}>
        {almaMater}
      </WorkPost.WorkPlace>
      <IconText style={{ marginBottom: 4 }} iconName="calendar" text={period} />
      <IconText
        style={{ marginBottom: 4 }}
        iconName="location"
        text={location}
      />
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  )
}

export default EducationPost
