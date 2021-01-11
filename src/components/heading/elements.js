import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  padding-bottom: 16px;
`

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  font-family: Quicksand;
  font-weight: bold;
`

export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.primary};
  margin-top: 4px;
  font-family: Quicksand;
  font-weight: bold;
`

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
`
