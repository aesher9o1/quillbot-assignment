import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './GlobalStyle'
import {
  fetchGourment,
  fetchExpressDelivery,
  fetchSwiggyExclusive,
  fetchOffersNearYou,
  fetchPopularBrands
} from './redux/action'
import { batch } from 'react-redux'

const theme = {
  primary: 'black',
  secondary: 'white',
  secondaryDark: '#686b78',
  accent: '#fc8019',
  success: 'rgb(72, 196, 121)',
  shadowOrange: 'rgba(251, 126, 24, 0.65)'
}

const store = configureStore()
batch(() => {
  store.dispatch(fetchPopularBrands() as any)
  store.dispatch(fetchOffersNearYou() as any)
  store.dispatch(fetchExpressDelivery() as any)
  store.dispatch(fetchGourment() as any)
  store.dispatch(fetchSwiggyExclusive() as any)
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <div className="container-fluid">
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
