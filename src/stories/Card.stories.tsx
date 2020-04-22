import React from 'react'
import FoodCard from '../components/Surface/FoodCard'
import Grid from '@material-ui/core/Grid'

export default {
  title: 'Card',
  component: FoodCard
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
    <Grid container>
      <Grid item xs={3}>
        <FoodCard {...sampleCardProps} />
      </Grid>
    </Grid>
  )
}
