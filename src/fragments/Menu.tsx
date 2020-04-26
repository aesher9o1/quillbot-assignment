import React, { useState } from 'react'
import BottomBar from './BottomBar'
import { animateScroll } from 'react-scroll'
import { useDispatch } from 'react-redux'
import { showAllRestaurants, resetRestaurantsView } from '../redux/action'
import Sidebar from './Sidebar'

type ActiveSection = 'popularBrands' | 'offersNearYou' | 'expressDelivery' | 'gourmet' | 'swiggyExclusive' | 'seeAll'
const isMobile = window.matchMedia('(max-width: 768px)').matches
const initialViewState = {
  popularBrands: true,
  offersNearYou: false,
  expressDelivery: false,
  gourmet: false,
  swiggyExclusive: false,
  seeAll: false
}

function Menu() {
  const dispatch = useDispatch()
  const [sectionActiveState, setSectionActiveState] = useState(initialViewState)
  const toggleCardStates = () => {
    animateScroll.scrollToTop()

    if (!sectionActiveState.seeAll) {
      dispatch(showAllRestaurants())
      handleSetActive('seeAll')
    } else {
      dispatch(resetRestaurantsView())
      setSectionActiveState(initialViewState)
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

  const BarProps = {
    sectionActiveState,
    toggleCardStates,
    handleSetActive
  }

  return isMobile ? (
    <BottomBar {...BarProps} />
  ) : (
    <div className="col-2 d-none d-md-block">
      <Sidebar {...BarProps} />
    </div>
  )
}

export default Menu
