import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  padding: 8px;
  flex-direction: row;
  border-radius: 99999;
  background-color: ${props => props.theme.colors.ligthGray};
`
