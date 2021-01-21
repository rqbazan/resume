import styled from '@react-pdf/styled-components'

export const Name = styled.Text`
  font-family: OpenSans;
  font-size: 10px;
`

export const Username = styled.Text`
  font-family: OpenSans;
  font-size: 8px;
  color: ${props => props.theme.colors.text};
  margin-top: 2px;
`
