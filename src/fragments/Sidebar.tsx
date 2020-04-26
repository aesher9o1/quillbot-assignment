import React, { useState } from 'react'
import SidebarButton from '../components/Button/SidebarButton'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../types/store'
import { displayStates } from '../utils/Common'
import { showAllRestaurants, resetRestaurantsView } from '../redux/action'
import { animateScroll } from 'react-scroll'

const boxShadow = {
  boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)',
  padding: 0
}

interface PROPTYPES {
  setCardStates: Function
  cardState: string
}

type ActiveSection = 'popularBrands' | 'offersNearYou' | 'expressDelivery' | 'gourmet' | 'swiggyExclusive' | 'seeAll'

function Sidebar(props: PROPTYPES) {
  const globalStoreState = useSelector((state: RootState) => state.storeReducer)
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
    <div style={boxShadow} className="sticky-top">
      <SidebarButton
        heading={globalStoreState.popularBrands.sectionName}
        subheading={`${globalStoreState.popularBrands.restaurants.length} Restaurants`}
        isActive={sectionActiveState.popularBrands}
        offset={-25}
        to="popularBrands"
        onSetActive={() => handleSetActive('popularBrands')}
      />

      <SidebarButton
        heading={globalStoreState.offersNearYou.sectionName}
        subheading={`${globalStoreState.offersNearYou.restaurants.length} Restaurants`}
        isActive={sectionActiveState.offersNearYou}
        to="offersNearYou"
        onSetActive={() => handleSetActive('offersNearYou')}
      />

      <SidebarButton
        heading={globalStoreState.expressDelivery.sectionName}
        subheading={`${globalStoreState.expressDelivery.restaurants.length} Restaurants`}
        isActive={sectionActiveState.expressDelivery}
        to="expressDelivery"
        onSetActive={() => handleSetActive('expressDelivery')}
      />

      <SidebarButton
        heading={globalStoreState.gourmet.sectionName}
        subheading={`${globalStoreState.gourmet.restaurants.length} Restaurants`}
        isActive={sectionActiveState.gourmet}
        to="gourmet"
        onSetActive={() => handleSetActive('gourmet')}
      />

      <SidebarButton
        heading={globalStoreState.swiggyExclusive.sectionName}
        subheading={`${globalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
        isActive={sectionActiveState.swiggyExclusive}
        to="swiggyExclusive"
        onSetActive={() => handleSetActive('swiggyExclusive')}
      />

      <SidebarButton
        heading={props.cardState}
        onClick={toggleCardStates}
        subheading={`${globalStoreState.popularBrands.restaurants.length +
          globalStoreState.offersNearYou.restaurants.length +
          globalStoreState.expressDelivery.restaurants.length +
          globalStoreState.gourmet.restaurants.length +
          globalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
        isActive={sectionActiveState.seeAll}
      />
    </div>
  )
}

export default Sidebar
