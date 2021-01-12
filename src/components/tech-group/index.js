import React from 'react'
import { View } from '@react-pdf/renderer'
import { TagsContainer, Title, Tag, TagContainer } from './elements'

export default function TechGroup({ style, title, tags }) {
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
