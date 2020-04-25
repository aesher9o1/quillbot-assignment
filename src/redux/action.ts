import { Restaurants } from '../types/store'
import * as actions from '../types/actions'

export const setupPopularBrands = (popularBrands: Restaurants[]): actions.SetupPopularBrandsAction => {
  return {
    type: actions.SETUP_POPULAR_BRANDS,
    payload: popularBrands
  }
}

export const setupOffersNearYou = (offers: Restaurants[]): actions.SetupOffersNearYouAction => {
  return {
    type: actions.SETUP_OFFERS_NEAR_YOU,
    payload: offers
  }
}

export const setupSwiggyExclusive = (swiggyExclusive: Restaurants[]): actions.SetupSwiggyExclusiveAction => {
  return {
    type: actions.SETUP_SWIGGY_EXCLUSIVE,
    payload: swiggyExclusive
  }
}

export const setupExpressDelivery = (expressDelivery: Restaurants[]): actions.SetupExpressDeliveryAction => {
  return {
    type: actions.SETUP_EXPRESS_DELIVERY,
    payload: expressDelivery
  }
}

export const setupGourment = (gourment: Restaurants[]): actions.SetupGourmentAction => {
  return {
    type: actions.SETUP_GOURMENT,
    payload: gourment
  }
}
