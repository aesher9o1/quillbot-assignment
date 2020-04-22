import React from 'react'
import styled from 'styled-components'
import RandomImage from '../../utils/randomImage'
import Paragraph from '../Typography/Paragraph'

interface PROPTYPES {
  name: string
  food_types: string[]
  ratings: string
  isExlusive: boolean
  delivery_time: string
  price_for_two: number
}

const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 57px;
  border: 1px solid #fff;
  width: 100%;
  background: black;
  &:hover {
    border-color: #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
  }
`
const FoodImage = styled.div`
  height: 160px;
  width: '100%';
  background: url(${RandomImage()});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

// const FoodCard = styled.div<{
//   name: string
//   food_types: string[]
//   ratings: string
//   isExlusive: boolean
//   delivery_time: string
//   price_for_two: number
// }>`
//   font-family: 'Raleway', sans-serif;
//   font-weight: 900;
//   padding: 20px 20px 57px;
//   border: 1px solid #fff;
// `

function FoodCard(props: PROPTYPES) {
  return (
    <FoodWrapper>
      <FoodImage />
      <Paragraph>{props.name}</Paragraph>
      <div>Aashis</div>
    </FoodWrapper>
  )
}

export default FoodCard
