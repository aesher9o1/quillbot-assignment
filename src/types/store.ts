export interface Restaurants {
  name: String
  food_types: String[]
  ratings: String
  isExlusive: Boolean
  delivery_time: String
  price_for_two: Number
}

export interface InitialState {
  popularBrands: Restaurants[]
  offersNearYou: Restaurants[]
  swiggyExclusive: Restaurants[]
  expressDelivery: Restaurants[]
  gourmet: Restaurants[]
}
