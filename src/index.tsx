import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './GlobalStyle'

const theme = {
  primary: 'black',
  secondary: 'white',
  secondaryDark: '#686b78',
  accent: '#fc8019',
  success: 'rgb(72, 196, 121)',
  shadowOrange: 'rgba(251, 126, 24, 0.65)'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <div className="container">
        <App />
      </div>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
