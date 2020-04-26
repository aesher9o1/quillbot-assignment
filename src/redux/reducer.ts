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
  SHOW_MORE_POPULAR_BRANDS,
  SHOW_MORE_SWIGGY_EXCLUSIVE,
  SHOW_MORE_OFFERS,
  SHOW_MORE_EXPRESS_DELIVERY,
  SHOW_MORE_GOURMENT,
  CHANGE_ACTIVE_SECTION
} from '../types/actions'

const initialRestaurantData = {
  sectionName: 'Loading',
  renderedOnScreen: 0,
  restaurants: [],
  isActive: false
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
          isActive: false,
          renderedOnScreen: state.popularBrands.restaurants.length
        },
        offersNearYou: {
          ...state.offersNearYou,
          isActive: false,
          renderedOnScreen: state.offersNearYou.restaurants.length
        },
        swiggyExclusive: {
          ...state.swiggyExclusive,
          isActive: false,
          renderedOnScreen: state.swiggyExclusive.restaurants.length
        },
        expressDelivery: {
          ...state.expressDelivery,
          isActive: false,
          renderedOnScreen: state.expressDelivery.restaurants.length
        },
        gourmet: {
          ...state.gourmet,
          isActive: false,
          renderedOnScreen: state.gourmet.restaurants.length
        }
      }
    }
    case RESET_RESTAURANT_VIEW: {
      return {
        ...state,
        popularBrands: {
          ...state.popularBrands,
          renderedOnScreen: 5,
          isActive: true
        },
        offersNearYou: {
          ...state.offersNearYou,
          renderedOnScreen: 5,
          isActive: false
        },
        swiggyExclusive: {
          ...state.swiggyExclusive,
          renderedOnScreen: 5,
          isActive: false
        },
        expressDelivery: {
          ...state.expressDelivery,
          renderedOnScreen: 5,
          isActive: false
        },
        gourmet: {
          ...state.gourmet,
          renderedOnScreen: 5,
          isActive: false
        }
      }
    }
    case SHOW_MORE_POPULAR_BRANDS: {
      return {
        ...state,
        popularBrands: {
          ...state.popularBrands,
          renderedOnScreen: getBounds(state.popularBrands.restaurants.length, state.popularBrands.renderedOnScreen + 5)
        }
      }
    }
    case SHOW_MORE_OFFERS: {
      return {
        ...state,
        offersNearYou: {
          ...state.offersNearYou,
          renderedOnScreen: getBounds(state.offersNearYou.restaurants.length, state.offersNearYou.renderedOnScreen + 5)
        }
      }
    }
    case SHOW_MORE_SWIGGY_EXCLUSIVE: {
      return {
        ...state,
        swiggyExclusive: {
          ...state.swiggyExclusive,
          renderedOnScreen: getBounds(
            state.swiggyExclusive.restaurants.length,
            state.swiggyExclusive.renderedOnScreen + 5
          )
        }
      }
    }
    case SHOW_MORE_EXPRESS_DELIVERY: {
      return {
        ...state,
        expressDelivery: {
          ...state.expressDelivery,
          renderedOnScreen: getBounds(
            state.expressDelivery.restaurants.length,
            state.expressDelivery.renderedOnScreen + 5
          )
        }
      }
    }
    case SHOW_MORE_GOURMENT: {
      return {
        ...state,
        gourmet: {
          ...state.gourmet,
          renderedOnScreen: getBounds(state.gourmet.restaurants.length, state.gourmet.renderedOnScreen + 5)
        }
      }
    }

    case CHANGE_ACTIVE_SECTION: {
      const newState = {
        ...state,
        popularBrands: {
          ...state.popularBrands,
          isActive: false
        },
        offersNearYou: {
          ...state.offersNearYou,
          isActive: false
        },
        swiggyExclusive: {
          ...state.swiggyExclusive,
          isActive: false
        },
        expressDelivery: {
          ...state.expressDelivery,
          isActive: false
        },
        gourmet: {
          ...state.gourmet,
          isActive: false
        }
      }
      newState[action.payload].isActive = true
      return newState
    }

    default:
      return state
  }
}

export default reducer
