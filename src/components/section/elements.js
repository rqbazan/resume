import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  padding-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 9px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.gray};
  font-family: Quicksand;
  font-weight: bold;
`

export const Separator = styled.View`
  height: 2px;
  background: ${props => props.theme.colors.gray};
  margin-top: 1px;
  margin-bottom: 12px;
`
