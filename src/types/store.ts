export interface RestaurantsDetails {
  name: String
  food_types: String[]
  ratings: String
  isExlusive: Boolean
  delivery_time: String
  price_for_two: Number
}

export interface Restaurants {
  sectionName: string
  renderedOnScreen: number
  restaurants: Restaurants[]
}

export interface InitialState {
  popularBrands: Restaurants
  offersNearYou: Restaurants
  swiggyExclusive: Restaurants
  expressDelivery: Restaurants
  gourmet: Restaurants
}

export interface RootState {
  storeReducer: InitialState
}
