import React from 'react'

import StoreCards from './fragments/StoreCards'
import Menu from './fragments/Menu'

function App() {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <Menu />
        <div className="col">
          <StoreCards />
        </div>
      </div>
    </div>
  )
}
export default App
