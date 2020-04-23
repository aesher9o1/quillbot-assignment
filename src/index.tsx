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
  success: 'rgb(72, 196, 121)'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <div className="container-fluid">
        <App />
      </div>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
