import React from 'react'
import { withTheme } from 'styled-components'
import SmallText from '../Typography/SmallText'
import styled from 'styled-components'

interface PROPTYPES extends React.HTMLAttributes<HTMLElement> {
  text: string
  iconClass: string
  isActive?: boolean
  theme: any
}

const FontAwesomeIcon = styled.i<{ isActive?: boolean }>`
  font-size: 22px;
  color: ${(props) => (props.isActive ? props.theme.accent : props.theme.primary)};
`

function BottomBarIcon(props: PROPTYPES) {
  return (
    <div className={`${props.className} text-center`} onClick={props.onClick}>
      <FontAwesomeIcon className={props.iconClass} isActive={props.isActive} />
      <SmallText color={props.isActive ? props.theme.accent : props.theme.primary} style={{ fontSize: '9px' }}>
        {props.text}
      </SmallText>
    </div>
  )
}

export default withTheme(BottomBarIcon)
