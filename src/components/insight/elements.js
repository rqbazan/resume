import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  flex-direction: row;
`

export const Title = styled.Text`
  font-family: OpenSans;
  font-size: 10px;
`

export const Description = styled.Text`
  font-family: OpenSans;
  font-size: 8px;
  color: ${props => props.theme.colors.text};
  margin-top: 2px;
`
