import React from 'react'
import styled from 'styled-components'
import RandomImage from '../../utils/randomImage'
import Paragraph from '../Typography/Paragraph'
import SmallText from '../Typography/SmallText'
import ClearButton from '../Button/ClearButton'

interface PROPTYPES {
  name: string
  food_types: string[]
  ratings: string
  isExlusive: boolean
  delivery_time: string
  price_for_two: number
  className: string
}

const FoodWrapper = styled.div`
  flex-direction: column;
  border: 1px solid #fff;
  width: 100%;
  padding: 20px 20px 10px 20px;
  box-shadow: none;

  .view {
    visibility: hidden;
  }

  &:hover {
    border-color: #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
    .view {
      visibility: visible;
    }
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

const Rating = styled.div`
  background-color: ${(props) => props.theme.success};
  width: 43px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  height: 20px;
  flex-direction: row;
`

function FoodCard(props: PROPTYPES) {
  return (
    <div className={props.className}>
      <FoodWrapper>
        <FoodImage />
        <Paragraph>{props.name}</Paragraph>
        <SmallText>{props.food_types.join(', ')}</SmallText>
        <div className="d-flex flex-row mt-4">
          <div className="flex-fill">
            <Rating>
              <i className="fa fa-star mr-1 my-auto" style={{ color: 'white', fontSize: '12px' }}></i>
              <SmallText color="white">{props.ratings}</SmallText>
            </Rating>
          </div>
          <div className="flex-fill">
            <SmallText>.</SmallText>
          </div>
          <div className="flex-fill">
            <SmallText>{props.delivery_time}</SmallText>
          </div>
          <div className="flex-fill">
            <SmallText>.</SmallText>
          </div>
          <div className="flex-fill">
            <SmallText style={{ textAlign: 'right' }}>₹{props.price_for_two} FOR TWO</SmallText>
          </div>
        </div>
        <div className="mt-3 border-top py-2 text-center view">
          <ClearButton>QUICK VIEW</ClearButton>
        </div>
      </FoodWrapper>
    </div>
  )
}

export default FoodCard
