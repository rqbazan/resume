import styled from '@react-pdf/styled-components'

export const Title = styled.Text`
  font-size: 12px;
  font-family: Quicksand;
  font-weight: bold;
`

export const MetaInfoContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
  align-items: center;
`

export const WorkPlace = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 10px;
  font-family: Quicksand;
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 8px;
  font-family: OpenSans;
  color: ${props => props.theme.colors.text};
  margin-top: 4px;
`
