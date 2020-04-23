import styled from 'styled-components'

interface PROPTYPES {
  theme: any
}

const Paragraph = styled.p`
  color: ${(props: PROPTYPES) => props.theme.primary};
  font-size: 17px;
  font-weight: 500;
  padding: 0 !important;
  margin: 0 !important;
  word-break: break-word;
  font-family: Raleway, sans-serif;
`

export default Paragraph
