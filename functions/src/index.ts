import * as functions from 'firebase-functions'
import * as data from './data.json'
const cors = require('cors')({
  origin: true
})

export const getPopularBrands = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=7200')
    response.send(data[0].restaurantList)
  })
})

export const getOffersNearYou = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=7200')
    response.send(data[1].restaurantList)
  })
})

export const getExpressDelivery = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=7200')
    response.send(data[2].restaurantList)
  })
})

export const getGourmet = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=7200')
    response.send(data[3].restaurantList)
  })
})

export const getSwiggyExclusive = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=7200')
    const exclusiveRestaurants: any = []

    data.forEach((restaurants: any) => {
      restaurants.restaurantList.forEach((restaurant: any) => {
        if (restaurant.isExlusive) exclusiveRestaurants.push(restaurant)
      })
    })

    response.send(exclusiveRestaurants)
  })
})
