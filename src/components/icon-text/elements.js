import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  font-family: Quicksand;
  font-size: 8px;
  color: ${props => props.theme.colors.text};
`

export const Image = styled.Image`
  height: 10px;
  width: 10px;
  margin-right: 4px;
`
