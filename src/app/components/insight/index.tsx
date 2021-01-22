import * as React from 'react'
import type { Theme } from '@app'
import ReactPDF, { View } from '@react-pdf/renderer'
import { withTheme } from '@react-pdf/styled-components'
import { RoundedIcon } from '../rounded-icon'
import { Container, Title, Description } from './elements'

export interface InsightProps {
  style?: ReactPDF.Style
  iconName?: string
  theme: Theme
  title: string
  description: string
}

export const Insight = withTheme(function Insight({
  style,
  theme,
  title,
  description,
  iconName
}: InsightProps) {
  return (
    <Container style={style}>
      {iconName && (
        <RoundedIcon
          size={18}
          name={iconName}
          color={theme.colors.primary}
          style={{ marginRight: 6 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </View>
    </Container>
  )
})
