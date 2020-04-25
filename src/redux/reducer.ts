import { InitialState } from '../types/store'
import {
  ActionTypes,
  SETUP_POPULAR_BRANDS,
  SETUP_OFFERS_NEAR_YOU,
  SETUP_SWIGGY_EXCLUSIVE,
  SETUP_EXPRESS_DELIVERY,
  SETUP_GOURMENT
} from '../types/actions'

const initialRestaurantData = {
  sectionName: 'Loading',
  renderedOnScreen: 0,
  restaurants: []
}

const initialState: InitialState = {
  popularBrands: initialRestaurantData,
  offersNearYou: initialRestaurantData,
  swiggyExclusive: initialRestaurantData,
  expressDelivery: initialRestaurantData,
  gourmet: initialRestaurantData
}

function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case SETUP_POPULAR_BRANDS:
      return {
        ...state,
        popularBrands: { ...action.payload }
      }
    case SETUP_OFFERS_NEAR_YOU:
      return {
        ...state,
        offersNearYou: { ...action.payload }
      }
    case SETUP_SWIGGY_EXCLUSIVE:
      return {
        ...state,
        swiggyExclusive: { ...action.payload }
      }
    case SETUP_EXPRESS_DELIVERY:
      return {
        ...state,
        expressDelivery: { ...action.payload }
      }
    case SETUP_GOURMENT:
      return {
        ...state,
        gourmet: { ...action.payload }
      }
    default:
      return state
  }
}

export default reducer
