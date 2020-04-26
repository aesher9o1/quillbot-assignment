import React from 'react'
import { withTheme } from 'styled-components'
import SmallText from '../Typography/SmallText'
import styled from 'styled-components'
import { Link } from 'react-scroll'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  text: string
  iconClass: string
  isActive?: boolean
  theme: any
  onSetActive?: any
  to?: any
  offset?: number
}

const FontAwesomeIcon = styled.i<{ isActive?: boolean }>`
  font-size: 22px;
  color: ${(props) => (props.isActive ? props.theme.accent : props.theme.primary)};
`

function BottomBarIcon(props: PROPTYPES) {
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
      <div className="text-center" onClick={props.onClick}>
        <FontAwesomeIcon className={props.iconClass} isActive={props.isActive} />
        <SmallText color={props.isActive ? props.theme.accent : props.theme.primary} style={{ fontSize: '9px' }}>
          {props.text}
        </SmallText>
      </div>
    </Link>
  )
}

export default withTheme(BottomBarIcon)
