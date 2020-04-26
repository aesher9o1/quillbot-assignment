import React from 'react'
import SidebarButton from '../components/Button/SidebarButton'
import { useSelector } from 'react-redux'
import { RootState } from '../types/store'
import { displayStates } from '../utils/Common'

const boxShadow = {
  boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)',
  padding: 0
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

function Sidebar(props: PROPTYPES) {
  const globalStoreState = useSelector((state: RootState) => state.storeReducer)

  return (
    <div style={boxShadow} className="sticky-top">
      <SidebarButton
        heading={globalStoreState.popularBrands.sectionName}
        subheading={`${globalStoreState.popularBrands.restaurants.length} Restaurants`}
        isActive={props.sectionActiveState.popularBrands}
        offset={-25}
        to="popularBrands"
        onSetActive={() => props.handleSetActive('popularBrands')}
      />

      <SidebarButton
        heading={globalStoreState.offersNearYou.sectionName}
        subheading={`${globalStoreState.offersNearYou.restaurants.length} Restaurants`}
        isActive={props.sectionActiveState.offersNearYou}
        to="offersNearYou"
        onSetActive={() => props.handleSetActive('offersNearYou')}
      />

      <SidebarButton
        heading={globalStoreState.expressDelivery.sectionName}
        subheading={`${globalStoreState.expressDelivery.restaurants.length} Restaurants`}
        isActive={props.sectionActiveState.expressDelivery}
        to="expressDelivery"
        onSetActive={() => props.handleSetActive('expressDelivery')}
      />

      <SidebarButton
        heading={globalStoreState.gourmet.sectionName}
        subheading={`${globalStoreState.gourmet.restaurants.length} Restaurants`}
        isActive={props.sectionActiveState.gourmet}
        to="gourmet"
        onSetActive={() => props.handleSetActive('gourmet')}
      />

      <SidebarButton
        heading={globalStoreState.swiggyExclusive.sectionName}
        subheading={`${globalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
        isActive={props.sectionActiveState.swiggyExclusive}
        to="swiggyExclusive"
        onSetActive={() => props.handleSetActive('swiggyExclusive')}
      />

      <SidebarButton
        heading={props.cardState}
        onClick={props.toggleCardStates}
        subheading={`${globalStoreState.popularBrands.restaurants.length +
          globalStoreState.offersNearYou.restaurants.length +
          globalStoreState.expressDelivery.restaurants.length +
          globalStoreState.gourmet.restaurants.length +
          globalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
        isActive={props.cardState === displayStates.SEEALL}
      />
    </div>
  )
}

export default Sidebar
