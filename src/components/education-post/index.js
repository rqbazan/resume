import React from 'react'
import { View } from '@react-pdf/renderer'
import iconSources from '../../icon-sources'
import WorkPost from '../work-post'
import IconText from '../icon-text'

export default function EducationPost({
  style,
  title,
  almaMater,
  period,
  location,
  children
}) {
  return (
    <View style={style}>
      <WorkPost.Title>{title}</WorkPost.Title>
      <WorkPost.WorkPlace style={{ marginTop: 4, marginBottom: 4 }}>
        {almaMater}
      </WorkPost.WorkPlace>
      <IconText
        style={{ marginBottom: 4 }}
        iconSource={iconSources.calendar}
        text={period}
      />
      <IconText
        style={{ marginBottom: 4 }}
        iconSource={iconSources.location}
        text={location}
      />
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  )
}