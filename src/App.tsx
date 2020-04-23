import React from 'react'
import FoodCard from './components/Surface/FoodCard'
import LoadMoreCard from './components/Surface/LoadMoreCard'
import SidebarButton from './components/Button/SidebarButton'

const sampleCardProps = {
  name: 'Maestro A Restro Cafe',
  food_types: ['North Indian', 'Chinese', 'Beverages'],
  ratings: '4.2',
  isExlusive: false,
  delivery_time: '47 mins',
  price_for_two: 1200
}

const boxShadow = {
  boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)',
  padding: 0
}

function App() {
  return (
    <div className="row mt-4">
      <div className="col-2" style={boxShadow}>
        <SidebarButton heading={'easter'} subheading={'this is easter'} />
      </div>
      <div className="col-10">
        <div className="row">
          <FoodCard {...sampleCardProps} className="col-sm-4" />
          <FoodCard {...sampleCardProps} className="col-sm-4" />
          <LoadMoreCard className="col-sm-4" items={4} />
        </div>
      </div>
    </div>
  )
}
export default App
