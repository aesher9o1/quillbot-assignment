import React from 'react'
import styled, { withTheme } from 'styled-components'
import Heading from '../Typography/Heading'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  items: number
  theme: any
}

const LoadMoreDiv = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
  .heading {
    color: ${(props) => props.theme.accent};
  }
  &:hover {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.primary}!important;
    border: none;
    .heading {
      color: ${(props) => props.theme.secondary};
    }
  }
`

function LoadMoreCard(props: PROPTYPES) {
  return (
    <LoadMoreDiv className={props.className}>
      <Heading varients={4} style={{ fontWeight: 500 }} className="heading">
        +{props.items} More
      </Heading>
    </LoadMoreDiv>
  )
}

export default withTheme(LoadMoreCard)
