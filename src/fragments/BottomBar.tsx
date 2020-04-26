import React from 'react'
import BottomBarIcon from '../components/Button/BottomBarIcon'
import { displayStates } from '../utils/Common'

const boxShadow = {
  boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)',
  width: '100%',
  backgroundColor: 'white'
}

interface PROPTYPES {
  setCardStates: Function
  cardState: string
  sectionActiveState: {
    popularBrands: boolean
    offersNearYou: boolean
    expressDelivery: boolean
    gourmet: boolean
    swiggyExclusive: boolean
    seeAll: boolean
  }
  setSectionActiveState: Function
  toggleCardStates: any
  handleSetActive: Function
}

function BottomBar(props: PROPTYPES) {
  return (
    <nav className="navbar fixed-bottom d-md-none" style={boxShadow}>
      <div className="d-flex flex-row w-100">
        <BottomBarIcon
          text={'Popular'}
          iconClass={'fa fa-star'}
          isActive={props.sectionActiveState.popularBrands}
          offset={-25}
          to="popularBrands"
          onSetActive={() => props.handleSetActive('popularBrands')}
        />

        <BottomBarIcon
          text={'Offers'}
          iconClass={'fa fa-star'}
          isActive={props.sectionActiveState.offersNearYou}
          onSetActive={() => props.handleSetActive('offersNearYou')}
          to="offersNearYou"
        />

        <BottomBarIcon
          text={'Express'}
          iconClass={'fa fa-star'}
          isActive={props.sectionActiveState.expressDelivery}
          to="expressDelivery"
          onSetActive={() => props.handleSetActive('expressDelivery')}
        />

        <BottomBarIcon
          text={'Gourmet'}
          iconClass={'fa fa-star'}
          isActive={props.sectionActiveState.gourmet}
          to="gourmet"
          onSetActive={() => props.handleSetActive('gourmet')}
        />

        <BottomBarIcon
          text={'Exclusive'}
          iconClass={'fa fa-star'}
          isActive={props.sectionActiveState.swiggyExclusive}
          to="swiggyExclusive"
          onSetActive={() => props.handleSetActive('swiggyExclusive')}
        />

        <BottomBarIcon
          text={'Show All'}
          iconClass={'fa fa-star'}
          isActive={props.cardState === displayStates.SEEALL}
          onClick={props.toggleCardStates}
        />
      </div>
    </nav>
  )
}

export default BottomBar
