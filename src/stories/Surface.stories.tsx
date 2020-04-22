import React from 'react'
import FoodCard from '../components/Surface/FoodCard'
import RowGrid from '../components/Layout/RowGrid'

export default {
  title: 'Surfaces',
  component: RowGrid
}

const sampleCardProps = {
  name: 'Maestro A Restro Cafe',
  food_types: ['North Indian', 'Chinese', 'Beverages'],
  ratings: '4.2',
  isExlusive: false,
  delivery_time: '47 mins',
  price_for_two: 1200
}

export const SimpleCard = () => {
  return (
    <RowGrid min={'220px'} max={'1fr'}>
      <FoodCard {...sampleCardProps} />
      <FoodCard {...sampleCardProps} />
      <FoodCard {...sampleCardProps} />
      <FoodCard {...sampleCardProps} />
    </RowGrid>
  )
}
