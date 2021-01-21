import React from 'react'
import ReactPDF, { View } from '@react-pdf/renderer'
import { TagsContainer, Title, Tag, TagContainer } from './elements'

export interface TechGroupProps {
  style?: ReactPDF.Style
  title: string
  tags: string[]
}

export default function TechGroup({ style, title, tags }: TechGroupProps) {
  return (
    <View style={style}>
      <Title>{title}</Title>
      <TagsContainer>
        {tags.map(tag => (
          <TagContainer key={tag}>
            <Tag>{tag}</Tag>
          </TagContainer>
        ))}
      </TagsContainer>
    </View>
  )
}
