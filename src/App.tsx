import React from 'react'
import FoodCard from './components/Surface/FoodCard'
import RowGrid from './components/Layout/RowGrid'
import Grid from '@material-ui/core/Grid'

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
    <Grid container spacing={3}>
      <Grid item xs={3}>
        asdas
      </Grid>
      <Grid item xs>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <FoodCard {...sampleCardProps} />
          </Grid>
          <Grid item sm={4}>
            <FoodCard {...sampleCardProps} />
          </Grid>
          <Grid item sm={4}>
            <FoodCard {...sampleCardProps} />
          </Grid>
        </Grid>
        {/* <RowGrid min={'220px'} max={'1fr'}>
          <FoodCard {...sampleCardProps} />
          <FoodCard {...sampleCardProps} />
          <FoodCard {...sampleCardProps} />
          <FoodCard {...sampleCardProps} />
        </RowGrid> */}
      </Grid>
    </Grid>
  )
}

export default App
