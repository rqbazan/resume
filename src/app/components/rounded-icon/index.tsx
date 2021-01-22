import React from 'react'
import { withTheme } from '@react-pdf/styled-components'
import { Icon, IconProps } from '../icon'
import { Container } from './elements'

export const RoundedIcon = withTheme(function RoundedIcon({
  style,
  ...props
}: IconProps) {
  return (
    <Container style={style}>
      <Icon {...props} />
    </Container>
  )
})
