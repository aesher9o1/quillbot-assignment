import styled from 'styled-components'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  theme: any
  color?: string
}

const SmallText = styled.p`
  color: ${(props: PROPTYPES) => props.color || props.theme.secondaryDark};
  font-size: 13px;
  font-weight: 500;
  margin: 0 !important;
  padding: 0 !important;
  word-break: break-word;
  font-family: Raleway, sans-serif;
`

export default SmallText
