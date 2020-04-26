import React, { useState } from 'react'
import BottomBar from './BottomBar'
import { displayStates } from '../utils/Common'
import { animateScroll } from 'react-scroll'
import { useDispatch } from 'react-redux'
import { showAllRestaurants, resetRestaurantsView } from '../redux/action'
import Sidebar from './Sidebar'

interface PROPTYPES {
  setCardStates: Function
  cardState: string
}

type ActiveSection = 'popularBrands' | 'offersNearYou' | 'expressDelivery' | 'gourmet' | 'swiggyExclusive' | 'seeAll'
const isMobile = window.matchMedia('(max-width: 768px)').matches
function Menu(props: PROPTYPES) {
  const dispatch = useDispatch()
  const [sectionActiveState, setSectionActiveState] = useState({
    popularBrands: true,
    offersNearYou: false,
    expressDelivery: false,
    gourmet: false,
    swiggyExclusive: false,
    seeAll: false
  })
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

  const BarProps = {
    setCardStates: props.setCardStates,
    cardState: props.cardState,
    sectionActiveState,
    setSectionActiveState,
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
