import React from 'react'
import styled, { withTheme } from 'styled-components'
import Heading from '../Typography/Heading'
import SmallText from '../Typography/SmallText'
import { Link } from 'react-scroll'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  heading: string
  subheading: string
  isActive?: boolean
  theme: any
  onSetActive?: any
  to?: any
  offset?: number
}

const Wrapper = styled.div<{ isActive?: boolean }>`
  background-color: ${(props) => (props.isActive ? props.theme.accent : 'white')};
  width: 100%;
  padding: 15px;
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
    <Link
      to={props.to || 'nothing'}
      smooth={true}
      offset={props.offset ? props.offset : -20}
      duration={500}
      spy={true}
      className={props.className ? props.className : 'flex-fill'}
      onSetActive={props.onSetActive}
    >
      <Wrapper isActive={props.isActive} onClick={props.onClick}>
        <Heading varients={5} className={'heading'}>
          {props.heading}
        </Heading>
        <SmallText className={'heading mt-n4'}>{props.subheading}</SmallText>
      </Wrapper>
    </Link>
  )
}

export default withTheme(SidebarButton)
