import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
`

export const Text = styled.Text`
  font-size: 8px;
  font-family: OpenSans;
  flex: 1;
  color: ${props => props.theme.colors.text};
`
