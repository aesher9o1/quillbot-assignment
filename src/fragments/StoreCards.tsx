import React, { useState, useEffect } from 'react'
import LoadMoreCard from '../components/Surface/LoadMoreCard'
import FoodCard from '../components/Surface/FoodCard'
import Heading from '../components/Typography/Heading'
import Image from '../utils/images.json'
import { useSelector, useDispatch } from 'react-redux'
import { isShowAll } from '../utils/Common'
import { RootState } from '../types/store'
import { showMoreRestaurant } from '../redux/action'
import { SectionNames } from '../types/actions'

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
                  <LoadMoreCard
                    className={cardClass}
                    items={restaurantsLeft}
                    onClick={() => dispatch(showMoreRestaurant(key as SectionNames))}
                  />
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
