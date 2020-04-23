import styled from 'styled-components'

interface PROPTYPES {
  varients: number
  color?: string
  theme: any
}

const getFontSizeBasedOnVarient = (varients: number) => {
  switch (varients) {
    case 1:
      return '5rem'
    case 2:
      return '4rem'
    case 3:
      return '3rem'
    case 4:
      return '2rem'
    default:
      return '1rem'
  }
}

const Heading = styled.h1<{ varients: number }>`
  color: ${(props: PROPTYPES) => props.color || props.theme.primary};
  font-size: ${(props: PROPTYPES) => getFontSizeBasedOnVarient(props.varients)};
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  margin: 0 !important;
  padding: 0 !important;
`

export default Heading
