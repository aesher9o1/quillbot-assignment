import React, { useState, useEffect } from 'react'
import FoodCard from './components/Surface/FoodCard'
import LoadMoreCard from './components/Surface/LoadMoreCard'
import Sidebar from './fragments/Sidebar'
import { useSelector } from 'react-redux'
import { RootState } from './types/store'
import Heading from './components/Typography/Heading'
import Image from './utils/images.json'
import { displayStates } from './utils/Common'

const cardClass = 'col-sm-4 mb-4'

function App() {
  const [cardState, setCardState] = useState(displayStates.DEFAULT)
  const [cards, setCards] = useState([])
  const golbalStoreState = useSelector((state: RootState) => state.storeReducer)

  const renderSectionHeader = (sectionName: string) => {
    return cardState === displayStates.DEFAULT ? (
      <div className="row mb-2 ml-3">
        <Heading varients={5}>{sectionName}</Heading>
      </div>
    ) : (
      <div></div>
    )
  }

  const renderSectionCards = (restaurants: any, renderedOnScreen: number) => {
    const cards = []
    for (let i = 0; i < renderedOnScreen; i++)
      cards.push(
        <FoodCard {...restaurants[i]} className={cardClass} key={i} imageURL={Image[Math.floor(Math.random() * 10)]} />
      )

    return cards
  }

  useEffect(() => {
    const cardSection: any = []

    Object.entries(golbalStoreState).forEach(([key, value]) => {
      if (value.sectionName !== 'Loading') {
        if (cardState === displayStates.DEFAULT) {
          const restaurantsLeft = value.restaurants.length - value.renderedOnScreen
          cardSection.push(
            <div className="container mb-4 border-bottom" key={value.sectionName}>
              <div className="row pl-3"> {renderSectionHeader(value.sectionName)}</div>
              <div className="row">
                {renderSectionCards(value.restaurants, value.renderedOnScreen)}
                {restaurantsLeft > 0 ? <LoadMoreCard className={cardClass} items={restaurantsLeft} /> : <div />}
              </div>
            </div>
          )
        } else {
          console.log('called')
          cardSection.push(renderSectionCards(value.restaurants, value.renderedOnScreen))
        }
      }
    })

    setCards(cardSection)
  }, [golbalStoreState, cardState])

  return (
    <div className="row mt-4">
      <div className="col-2">
        <Sidebar setCardStates={setCardState} cardState={cardState} />
      </div>
      <div className="col-10">
        <div className="row pr-5">{cards}</div>
      </div>
    </div>
  )
}
export default App
