import React, { useState } from 'react'
import Sidebar from './fragments/Sidebar'
import { displayStates } from './utils/Common'
import BottomBar from './fragments/BottomBar'
import StoreCards from './fragments/StoreCards'
import Menu from './fragments/Menu'

function App() {
  const [cardState, setCardState] = useState(displayStates.DEFAULT)

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <Menu cardState={cardState} setCardStates={setCardState} />
        <div className="col">
          <StoreCards setCardStates={setCardState} cardState={cardState} />
        </div>
      </div>
    </div>
  )
}
export default App
