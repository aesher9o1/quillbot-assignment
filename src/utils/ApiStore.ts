const server = 'https://us-central1-quillboto1.cloudfunctions.net'

const APIS = {
  GET_EXPRESS_DELIVERY: `${server}/getExpressDelivery`,
  GET_GOURMET: `${server}/getGourmet`,
  GET_OFFERS_NEAR_YOU: `${server}/getOffersNearYou`,
  GET_POPULAR_BRANDS: `${server}/getPopularBrands`,
  GET_SWIGGY_EXCLUSIVE: `${server}/getSwiggyExclusive`
}

export default APIS
