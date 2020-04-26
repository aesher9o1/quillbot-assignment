import { InitialState } from '../types/store'
import {
  ActionTypes,
  SETUP_POPULAR_BRANDS,
  SETUP_OFFERS_NEAR_YOU,
  SETUP_SWIGGY_EXCLUSIVE,
  SETUP_EXPRESS_DELIVERY,
  SETUP_GOURMENT,
  SHOW_ALL_RESTAURANT,
  RESET_RESTAURANT_VIEW,
  SHOW_MORE_RESTAURANT
} from '../types/actions'

const initialRestaurantData = {
  sectionName: 'Loading',
  renderedOnScreen: 0,
  restaurants: []
}

const initialState: InitialState = {
  popularBrands: initialRestaurantData,
  offersNearYou: initialRestaurantData,
  expressDelivery: initialRestaurantData,
  gourmet: initialRestaurantData,
  swiggyExclusive: initialRestaurantData
}

const getBounds = (total: number, newNumber: number): number => (newNumber > total ? total : newNumber)

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
        expressDelivery: {
          ...state.expressDelivery,
          renderedOnScreen: state.expressDelivery.restaurants.length
        },
        gourmet: {
          ...state.gourmet,

          renderedOnScreen: state.gourmet.restaurants.length
        },
        swiggyExclusive: {
          ...state.swiggyExclusive,
          renderedOnScreen: state.swiggyExclusive.restaurants.length
        }
      }
    }
    case RESET_RESTAURANT_VIEW: {
      return {
        ...state,
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
    case SHOW_MORE_RESTAURANT: {
      const newState = { ...state }
      newState[action.payload].renderedOnScreen = getBounds(
        state[action.payload].restaurants.length,
        state[action.payload].renderedOnScreen + 5
      )
      return newState
    }

    default:
      return state
  }
}

export default reducer
