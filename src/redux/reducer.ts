import { InitialState } from '../types/store'
import {
  ActionTypes,
  SETUP_POPULAR_BRANDS,
  SETUP_OFFERS_NEAR_YOU,
  SETUP_SWIGGY_EXCLUSIVE,
  SETUP_EXPRESS_DELIVERY,
  SETUP_GOURMENT,
  SHOW_ALL_RESTAURANT,
  RESET_RESTAURANT_VIEW
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
    case SHOW_ALL_RESTAURANT: {
      return {
        popularBrands: {
          ...state.popularBrands,
          renderedOnScreen: state.popularBrands.restaurants.length
        },
        offersNearYou: {
          ...state.offersNearYou,
          renderedOnScreen: state.offersNearYou.restaurants.length
        },
        swiggyExclusive: {
          ...state.swiggyExclusive,
          renderedOnScreen: state.swiggyExclusive.restaurants.length
        },
        expressDelivery: {
          ...state.expressDelivery,
          renderedOnScreen: state.expressDelivery.restaurants.length
        },
        gourmet: {
          ...state.gourmet,
          renderedOnScreen: state.gourmet.restaurants.length
        }
      }
    }
    case RESET_RESTAURANT_VIEW: {
      return {
        popularBrands: {
          ...state.popularBrands,
          renderedOnScreen: 5
        },
        offersNearYou: {
          ...state.offersNearYou,
          renderedOnScreen: 5
        },
        swiggyExclusive: {
          ...state.swiggyExclusive,
          renderedOnScreen: 5
        },
        expressDelivery: {
          ...state.expressDelivery,
          renderedOnScreen: 5
        },
        gourmet: {
          ...state.gourmet,
          renderedOnScreen: 5
        }
      }
    }

    default:
      return state
  }
}

export default reducer
