import styled from 'styled-components'

const RowGrid = styled.h1<{ min: string; max: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(props) => props.min}, ${(props) => props.max}));
  grid-gap: 1rem;
`

export default RowGrid
