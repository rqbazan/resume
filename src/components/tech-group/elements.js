import styled from '@react-pdf/styled-components'

export const Title = styled.Text`
  font-size: 12px;
  font-family: Quicksand;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 4px;
`

export const Tag = styled.Text`
  font-size: 9px;
  font-family: OpenSans;
`

export const TagContainer = styled.View`
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 4px;
  margin-right: 6px;
  margin-bottom: 6px;
`

export const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
