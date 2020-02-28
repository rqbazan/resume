import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  font-family: Quicksand;
  font-size: 8px;
  color: ${props => props.theme.colors.text};
  margin-left: 4px;
`
