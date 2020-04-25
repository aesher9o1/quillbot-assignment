import { Restaurants } from '../types/store'
import * as actions from '../types/actions'
import { Dispatch } from 'redux'
import axios from 'axios'
import APIS from '../utils/ApiStore'
import { ThunkAction } from 'redux-thunk'

export const setupPopularBrands = (popularBrands: Restaurants): actions.SetupPopularBrandsAction => {
  return {
    type: actions.SETUP_POPULAR_BRANDS,
    payload: popularBrands
  }
}

export const setupOffersNearYou = (offers: Restaurants): actions.SetupOffersNearYouAction => {
  return {
    type: actions.SETUP_OFFERS_NEAR_YOU,
    payload: offers
  }
}

export const setupSwiggyExclusive = (swiggyExclusive: Restaurants): actions.SetupSwiggyExclusiveAction => {
  return {
    type: actions.SETUP_SWIGGY_EXCLUSIVE,
    payload: swiggyExclusive
  }
}

export const setupExpressDelivery = (expressDelivery: Restaurants): actions.SetupExpressDeliveryAction => {
  return {
    type: actions.SETUP_EXPRESS_DELIVERY,
    payload: expressDelivery
  }
}

export const setupGourment = (gourment: Restaurants): actions.SetupGourmentAction => {
  return {
    type: actions.SETUP_GOURMENT,
    payload: gourment
  }
}

export const showAllRestaurants = (): actions.ShowAllRestaurantsAction => {
  return {
    type: actions.SHOW_ALL_RESTAURANT
  }
}

export const resetRestaurantsView = (): actions.ResetRestaurantsViewAction => {
  return {
    type: actions.RESET_RESTAURANT_VIEW
  }
}

export const showMorePopularBrands = (): actions.ShowMorePopularBrandsAction => {
  return {
    type: actions.SHOW_MORE_POPULAR_BRANDS
  }
}

export const showMoreOffers = (): actions.ShowMoreOffersAction => {
  return {
    type: actions.SHOW_MORE_OFFERS
  }
}

export const showMoreSwiggyExclusive = (): actions.ShowMoreSwiggyExclusiveAction => {
  return {
    type: actions.SHOW_MORE_SWIGGY_EXCLUSIVE
  }
}

export const showMoreExpressDelivery = (): actions.ShowMoreExpressDeliveryAction => {
  return {
    type: actions.SHOW_MORE_EXPRESS_DELIVERY
  }
}

export const showMoreGourment = (): actions.ShowMoreGourmentAction => {
  return {
    type: actions.SHOW_MORE_GOURMENT
  }
}

export const fetchPopularBrands = (): ThunkAction<void, any, null, actions.SetupPopularBrandsAction> => {
  return (dispatch: Dispatch) => {
    axios.get(APIS.GET_POPULAR_BRANDS).then((res) =>
      dispatch(
        setupPopularBrands({
          sectionName: 'Popular Brands',
          renderedOnScreen: 5,
          restaurants: res.data
        })
      )
    )
  }
}

export const fetchOffersNearYou = (): ThunkAction<void, any, null, actions.SetupOffersNearYouAction> => {
  return (dispatch: Dispatch) => {
    axios.get(APIS.GET_OFFERS_NEAR_YOU).then((res) =>
      dispatch(
        setupOffersNearYou({
          sectionName: 'Offers Near You',
          renderedOnScreen: 5,
          restaurants: res.data
        })
      )
    )
  }
}

export const fetchSwiggyExclusive = (): ThunkAction<void, any, null, actions.SetupSwiggyExclusiveAction> => {
  return (dispatch: Dispatch) => {
    axios.get(APIS.GET_SWIGGY_EXCLUSIVE).then((res) =>
      dispatch(
        setupSwiggyExclusive({
          sectionName: 'Only On Swiggy',
          renderedOnScreen: 5,
          restaurants: res.data
        })
      )
    )
  }
}

export const fetchExpressDelivery = (): ThunkAction<void, any, null, actions.SetupExpressDeliveryAction> => {
  return (dispatch: Dispatch) => {
    axios.get(APIS.GET_EXPRESS_DELIVERY).then((res) =>
      dispatch(
        setupExpressDelivery({
          sectionName: 'Express Delivery',
          renderedOnScreen: 5,
          restaurants: res.data
        })
      )
    )
  }
}

export const fetchGourment = (): ThunkAction<void, any, null, actions.SetupGourmentAction> => {
  return (dispatch: Dispatch) => {
    axios.get(APIS.GET_GOURMET).then((res) =>
      dispatch(
        setupGourment({
          sectionName: 'Gourmet',
          renderedOnScreen: 5,
          restaurants: res.data
        })
      )
    )
  }
}
