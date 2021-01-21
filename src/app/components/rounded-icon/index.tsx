import React from 'react'
import { withTheme } from '@react-pdf/styled-components'
import Icon, { IconProps } from '../icon'
import { Container } from './elements'

function RoundedIcon({ style, ...props }: IconProps) {
  return (
    <Container style={style}>
      <Icon {...props} />
    </Container>
  )
}

export default withTheme(RoundedIcon)
