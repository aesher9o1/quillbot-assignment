import React, { useState } from 'react'
import BottomBarIcon from '../components/Button/BottomBarIcon'
import { useDispatch } from 'react-redux'
import { displayStates } from '../utils/Common'
import { showAllRestaurants, resetRestaurantsView } from '../redux/action'
import { animateScroll } from 'react-scroll'

const boxShadow = {
  boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)',
  width: '100%',
  backgroundColor: 'white'
}

interface PROPTYPES {
  setCardStates: Function
  cardState: string
}

type ActiveSection = 'popularBrands' | 'offersNearYou' | 'expressDelivery' | 'gourmet' | 'swiggyExclusive' | 'seeAll'

function BottomBar(props: PROPTYPES) {
  const [sectionActiveState, setSectionActiveState] = useState({
    popularBrands: true,
    offersNearYou: false,
    expressDelivery: false,
    gourmet: false,
    swiggyExclusive: false,
    seeAll: false
  })

  const dispatch = useDispatch()
  const toggleCardStates = () => {
    if (props.cardState === displayStates.DEFAULT) {
      animateScroll.scrollToTop()
      props.setCardStates(displayStates.SEEALL)
      dispatch(showAllRestaurants())
      handleSetActive('seeAll')
    } else if (props.cardState === displayStates.SEEALL) {
      animateScroll.scrollToTop()
      props.setCardStates(displayStates.DEFAULT)
      dispatch(resetRestaurantsView())
      setSectionActiveState({
        popularBrands: false,
        offersNearYou: false,
        expressDelivery: false,
        gourmet: false,
        swiggyExclusive: false,
        seeAll: false
      })
    }
  }

  const handleSetActive = (sectionName: ActiveSection) => {
    const newSectionState = {
      popularBrands: false,
      offersNearYou: false,
      expressDelivery: false,
      gourmet: false,
      swiggyExclusive: false,
      seeAll: false
    }

    newSectionState[sectionName] = true
    setSectionActiveState(newSectionState)
  }

  return (
    <nav className="navbar fixed-bottom d-md-none" style={boxShadow}>
      <div className="d-flex flex-row w-100">
        <BottomBarIcon
          text={'Popular'}
          iconClass={'fa fa-star'}
          isActive={sectionActiveState.popularBrands}
          offset={-25}
          to="popularBrands"
          onSetActive={() => handleSetActive('popularBrands')}
        />

        <BottomBarIcon
          text={'Offers'}
          iconClass={'fa fa-star'}
          isActive={sectionActiveState.offersNearYou}
          onSetActive={() => handleSetActive('offersNearYou')}
          to="offersNearYou"
        />

        <BottomBarIcon
          text={'Express'}
          iconClass={'fa fa-star'}
          isActive={sectionActiveState.expressDelivery}
          to="expressDelivery"
          onSetActive={() => handleSetActive('expressDelivery')}
        />

        <BottomBarIcon
          text={'Gourmet'}
          iconClass={'fa fa-star'}
          isActive={sectionActiveState.gourmet}
          to="gourmet"
          onSetActive={() => handleSetActive('gourmet')}
        />

        <BottomBarIcon
          text={'Exclusive'}
          iconClass={'fa fa-star'}
          isActive={sectionActiveState.swiggyExclusive}
          to="swiggyExclusive"
          onSetActive={() => handleSetActive('swiggyExclusive')}
        />

        <BottomBarIcon
          text={'Show All'}
          iconClass={'fa fa-star'}
          isActive={sectionActiveState.seeAll}
          onClick={toggleCardStates}
        />
      </div>
    </nav>
  )
}

export default BottomBar
