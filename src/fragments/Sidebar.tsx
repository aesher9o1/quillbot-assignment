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
}

function Sidebar(props: PROPTYPES) {
  const golbalStoreState = useSelector((state: RootState) => state.storeReducer)

  const toggleCardStates = () => {
    console.log('clicked')
    props.setCardStates(props.cardState === displayStates.DEFAULT ? displayStates.SEEALL : displayStates.DEFAULT)
  }

  return (
    <div style={boxShadow} className="sticky-top">
      <SidebarButton
        heading={golbalStoreState.popularBrands.sectionName}
        subheading={`${golbalStoreState.popularBrands.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={golbalStoreState.offersNearYou.sectionName}
        subheading={`${golbalStoreState.offersNearYou.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={golbalStoreState.expressDelivery.sectionName}
        subheading={`${golbalStoreState.expressDelivery.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={golbalStoreState.gourmet.sectionName}
        subheading={`${golbalStoreState.gourmet.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={golbalStoreState.swiggyExclusive.sectionName}
        subheading={`${golbalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
      />
      <SidebarButton
        heading={props.cardState}
        onClick={toggleCardStates}
        subheading={`${golbalStoreState.popularBrands.restaurants.length +
          golbalStoreState.offersNearYou.restaurants.length +
          golbalStoreState.expressDelivery.restaurants.length +
          golbalStoreState.gourmet.restaurants.length +
          golbalStoreState.swiggyExclusive.restaurants.length} Restaurants`}
      />
    </div>
  )
}

export default Sidebar
