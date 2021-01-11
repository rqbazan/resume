import React from 'react'
import { withTheme } from '@react-pdf/styled-components'
import Icon from '../icon'
import { Container } from './elements'

function RoundedIcon({ style, ...props }) {
  return (
    <Container style={style}>
      <Icon {...props} />
    </Container>
  )
}

export default withTheme(RoundedIcon)
