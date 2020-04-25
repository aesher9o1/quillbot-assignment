import React from 'react'
import styled, { withTheme } from 'styled-components'
import Heading from '../Typography/Heading'
import SmallText from '../Typography/SmallText'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  heading: string
  subheading: string
  isActive?: boolean
  theme: any
}

const Wrapper = styled.div<{ isActive?: boolean }>`
  background-color: ${(props) => (props.isActive ? props.theme.accent : 'white')};
  width: 100%;
  padding: 15px;
  transition: all 0.5s ease;
  cursor: pointer;
  .heading {
    color: ${(props) => (props.isActive ? 'white' : props.theme.primary)};
  }

  &:hover {
    .heading {
      color: ${(props) => (props.isActive ? 'white' : props.theme.accent)};
    }
  }
`

function SidebarButton(props: PROPTYPES) {
  return (
    <Wrapper isActive={props.isActive} onClick={props.onClick}>
      <Heading varients={5} className={'heading'}>
        {props.heading}
      </Heading>
      <SmallText className={'heading mt-n4'}>{props.subheading}</SmallText>
    </Wrapper>
  )
}

export default withTheme(SidebarButton)
