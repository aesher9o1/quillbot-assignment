import React from 'react'
import SidebarButton from '../components/Button/SidebarButton'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../types/store'
import { displayStates } from '../utils/Common'
import { showAllRestaurants, resetRestaurantsView } from '../redux/action'

const boxShadow = {
  boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)',
  padding: 0
}

interface PROPTYPES {
  setCardStates: Function
  cardState: string
}

function Sidebar(props: PROPTYPES) {
  const globalStoreState = useSelector((state: RootState) => state.storeReducer)
  const dispatch = useDispatch()
  const toggleCardStates = () => {
    if (props.cardState === displayStates.DEFAULT) {
      props.setCardStates(displayStates.SEEALL)
      dispatch(showAllRestaurants())
    } else if (props.cardState === displayStates.SEEALL) {
      props.setCardStates(displayStates.DEFAULT)
      dispatch(resetRestaurantsView())
    }
  }

  return (
    <div style={boxShadow} className="sticky-top">
      <SidebarButton
        heading={globalStoreState.popularBrands.sectionName}
        subheading={`${globalStoreState.popularBrands.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={globalStoreState.offersNearYou.sectionName}
        subheading={`${globalStoreState.offersNearYou.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={globalStoreState.expressDelivery.sectionName}
        subheading={`${globalStoreState.expressDelivery.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={globalStoreState.gourmet.sectionName}
        subheading={`${globalStoreState.gourmet.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={globalStoreState.swiggyExclusive.sectionName}
        subheading={`${globalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={props.cardState}
        onClick={toggleCardStates}
        subheading={`${globalStoreState.popularBrands.restaurants.length +
          globalStoreState.offersNearYou.restaurants.length +
          globalStoreState.expressDelivery.restaurants.length +
          globalStoreState.gourmet.restaurants.length +
          globalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
      />
    </div>
  )
}

export default Sidebar
