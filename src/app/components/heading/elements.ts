import styled from '@react-pdf/styled-components'

export const Container = styled.View`
  position: relative;
  padding-bottom: 16px;
  flex-direction: row;
`

export const ImageContainer = styled.View`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  right: 0;
  top: -20px;
`

export const Image = styled.Image`
  border-radius: ${props => props.size / 2}px;
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
