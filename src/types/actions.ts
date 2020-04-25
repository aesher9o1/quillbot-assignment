import { Restaurants } from './store'

export const SETUP_POPULAR_BRANDS = 'SETUP_POPULAR_BRANDS'
export const SETUP_OFFERS_NEAR_YOU = 'SETUP_OFFERS_NEAR_YOU'
export const SETUP_SWIGGY_EXCLUSIVE = 'SETUP_SWIGGY_EXCLUSIVE'
export const SETUP_EXPRESS_DELIVERY = 'SETUP_EXPRESS_DELIVERY'
export const SETUP_GOURMENT = 'SETUP_GOURMET'
export const SHOW_ALL_RESTAURANT = 'SHOW_ALL_RESTAURANT'
export const RESET_RESTAURANT_VIEW = 'RESET_RESTAURANT_VIEW'

export interface SetupPopularBrandsAction {
  type: typeof SETUP_POPULAR_BRANDS
  payload: Restaurants
}

export interface SetupOffersNearYouAction {
  type: typeof SETUP_OFFERS_NEAR_YOU
  payload: Restaurants
}

export interface SetupSwiggyExclusiveAction {
  type: typeof SETUP_SWIGGY_EXCLUSIVE
  payload: Restaurants
}

export interface SetupExpressDeliveryAction {
  type: typeof SETUP_EXPRESS_DELIVERY
  payload: Restaurants
}

export interface SetupGourmentAction {
  type: typeof SETUP_GOURMENT
  payload: Restaurants
}

export interface ShowAllRestaurantsAction {
  type: typeof SHOW_ALL_RESTAURANT
}

export interface ResetRestaurantsViewAction {
  type: typeof RESET_RESTAURANT_VIEW
}

export type ActionTypes =
  | SetupPopularBrandsAction
  | SetupOffersNearYouAction
  | SetupSwiggyExclusiveAction
  | SetupExpressDeliveryAction
  | SetupGourmentAction
  | ShowAllRestaurantsAction
  | ResetRestaurantsViewAction
