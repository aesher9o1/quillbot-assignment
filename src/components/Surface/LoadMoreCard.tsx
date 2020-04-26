import React from 'react'
import styled, { withTheme } from 'styled-components'
import Heading from '../Typography/Heading'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  items: number
  theme: any
}

const LoadMoreDiv = styled.div`
  width: 100%;
  padding: 20px;
  cursor: pointer;
  min-height: 330px;
  transition: all 0.25s ease;

  .wrapper {
    border: 2px solid ${(props) => props.theme.accent};
    height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .heading {
    color: ${(props) => props.theme.accent};
  }
  &:hover {
    color: ${(props) => props.theme.primary}!important;
    .wrapper {
      border: none;
      background: ${(props) => props.theme.accent};
    }

    .heading {
      color: ${(props) => props.theme.secondary};
    }
  }
`

function LoadMoreCard(props: PROPTYPES) {
  return (
    <LoadMoreDiv className={props.className} onClick={props.onClick}>
      <div className="wrapper">
        <Heading varients={4} style={{ fontWeight: 500 }} className="heading">
          +{props.items} More
        </Heading>
      </div>
    </LoadMoreDiv>
  )
}

export default withTheme(LoadMoreCard)
