import React from 'react'
import FoodCard from './components/Surface/FoodCard'

const sampleCardProps = {
  name: 'Maestro A Restro Cafe',
  food_types: ['North Indian', 'Chinese', 'Beverages'],
  ratings: '4.2',
  isExlusive: false,
  delivery_time: '47 mins',
  price_for_two: 1200
}

function App() {
  return (
    <div className="row">
      <div className="col-2">asdas</div>
      <div className="col-10">
        <div className="row">
          <FoodCard {...sampleCardProps} className="col-sm-4" />
          <FoodCard {...sampleCardProps} className="col-sm-4" />
          <FoodCard {...sampleCardProps} className="col-sm-4" />
        </div>
      </div>
    </div>
  )
}
export default App
