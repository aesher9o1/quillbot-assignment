import React, { useState } from 'react'
import BottomBarIcon from '../components/Button/BottomBarIcon'
import { useDispatch } from 'react-redux'
import { displayStates } from '../utils/Common'
import { showAllRestaurants, resetRestaurantsView } from '../redux/action'
import { Link, animateScroll } from 'react-scroll'

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
      setSectionActiveState({
        popularBrands: false,
        offersNearYou: false,
        expressDelivery: false,
        gourmet: false,
        swiggyExclusive: false,
        seeAll: true
      })
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
        <Link
          to="popularBrands"
          smooth={true}
          offset={-25}
          duration={500}
          spy={true}
          className="flex-fill"
          onSetActive={() => handleSetActive('popularBrands')}
        >
          <BottomBarIcon text={'Popular'} iconClass={'fa fa-star'} isActive={sectionActiveState.popularBrands} />
        </Link>

        <Link
          to="offersNearYou"
          smooth={true}
          offset={-25}
          duration={500}
          spy={true}
          className="flex-fill"
          onSetActive={() => handleSetActive('offersNearYou')}
        >
          <BottomBarIcon text={'Offers'} iconClass={'fa fa-star'} isActive={sectionActiveState.offersNearYou} />
        </Link>

        <Link
          to="expressDelivery"
          smooth={true}
          offset={-25}
          duration={500}
          spy={true}
          className="flex-fill"
          onSetActive={() => handleSetActive('expressDelivery')}
        >
          <BottomBarIcon text={'Express'} iconClass={'fa fa-star'} isActive={sectionActiveState.expressDelivery} />
        </Link>

        <Link
          to="gourmet"
          smooth={true}
          offset={-25}
          duration={500}
          spy={true}
          className="flex-fill"
          onSetActive={() => handleSetActive('gourmet')}
        >
          <BottomBarIcon text={'Gourmet'} iconClass={'fa fa-star'} isActive={sectionActiveState.gourmet} />
        </Link>
        <Link
          to="swiggyExclusive"
          smooth={true}
          offset={-25}
          duration={500}
          spy={true}
          className="flex-fill"
          onSetActive={() => handleSetActive('swiggyExclusive')}
        >
          <BottomBarIcon text={'Exclusive'} iconClass={'fa fa-star'} isActive={sectionActiveState.swiggyExclusive} />
        </Link>
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
