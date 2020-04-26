import React, { useState, useEffect } from 'react'
import LoadMoreCard from '../components/Surface/LoadMoreCard'
import FoodCard from '../components/Surface/FoodCard'
import Heading from '../components/Typography/Heading'
import { useSelector, useDispatch } from 'react-redux'
import { isShowAll } from '../utils/Common'
import { RootState } from '../types/store'
import {
  showMorePopularBrands,
  showMoreOffers,
  showMoreSwiggyExclusive,
  showMoreGourment,
  showMoreExpressDelivery
} from '../redux/action'
import Image from '../utils/images.json'

const cardClass = 'col-sm-4 mb-4'

function StoreCards() {
  const [restaurantCard, setRestaurantCards] = useState([])
  const golbalStoreState = useSelector((state: RootState) => state.storeReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const isShowAllActive = isShowAll(golbalStoreState)
    const cardSection: any = []
    const renderSectionHeader = (sectionName: string) => {
      return !isShowAllActive ? (
        <div className="row mb-2 ml-3">
          <Heading varients={5}>{sectionName}</Heading>
        </div>
      ) : (
        <div />
      )
    }

    const renderSectionCards = (restaurants: any, renderedOnScreen: number) => {
      const cards = []
      for (let i = 0; i < renderedOnScreen; i++)
        cards.push(
          <FoodCard
            {...restaurants[i]}
            className={cardClass}
            key={i}
            imageURL={Image[Math.floor(Math.random() * 10)]}
          />
        )

      return cards
    }

    const handleLoadMore = (key: string) => {
      switch (key) {
        case 'popularBrands':
          dispatch(showMorePopularBrands())
          break
        case 'offersNearYou':
          dispatch(showMoreOffers())
          break
        case 'swiggyExclusive':
          dispatch(showMoreSwiggyExclusive())
          break
        case 'expressDelivery':
          dispatch(showMoreExpressDelivery())
          break
        case 'gourmet':
          dispatch(showMoreGourment())
          break
      }
    }

    Object.entries(golbalStoreState).forEach(([key, value]) => {
      if (value.sectionName !== 'Loading') {
        if (!isShowAllActive) {
          const restaurantsLeft = value.restaurants.length - value.renderedOnScreen
          cardSection.push(
            <div className="container mb-4 border-bottom" key={value.sectionName}>
              <div className="row pl-3" id={key}>
                {renderSectionHeader(value.sectionName)}
              </div>
              <div className="row">
                {renderSectionCards(value.restaurants, value.renderedOnScreen)}
                {restaurantsLeft > 0 ? (
                  <LoadMoreCard className={cardClass} items={restaurantsLeft} onClick={() => handleLoadMore(key)} />
                ) : (
                  <div />
                )}
              </div>
            </div>
          )
        } else cardSection.push(renderSectionCards(value.restaurants, value.renderedOnScreen))
      }
    })
    setRestaurantCards(cardSection)
  }, [golbalStoreState, dispatch])

  return <div className="row">{restaurantCard}</div>
}

export default StoreCards
