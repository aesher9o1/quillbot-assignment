import { InitialState } from '../types/store'

export const isShowAll = (storeState: InitialState): boolean =>
  storeState.popularBrands.renderedOnScreen === storeState.popularBrands.restaurants.length &&
  storeState.offersNearYou.renderedOnScreen === storeState.offersNearYou.restaurants.length &&
  storeState.expressDelivery.renderedOnScreen === storeState.expressDelivery.restaurants.length &&
  storeState.gourmet.renderedOnScreen === storeState.gourmet.restaurants.length &&
  storeState.swiggyExclusive.renderedOnScreen === storeState.swiggyExclusive.restaurants.length
