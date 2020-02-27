import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  font-family: OpenSans;
  font-size: 10px;
`

export const Score = styled.Text`
  font-family: OpenSans;
  font-size: 8px;
  color: ${props => props.theme.colors.text};
  margin-left: auto;
  margin-right: 5px;
`
