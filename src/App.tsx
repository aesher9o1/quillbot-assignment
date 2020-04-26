import React, { useState } from 'react'
import Sidebar from './fragments/Sidebar'
import { displayStates } from './utils/Common'
import BottomBar from './fragments/BottomBar'
import StoreCards from './fragments/StoreCards'

function App() {
  const [cardState, setCardState] = useState(displayStates.DEFAULT)

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-2 d-none d-md-block">
          <Sidebar setCardStates={setCardState} cardState={cardState} />
        </div>
        <div className="col-md-10">
          <StoreCards setCardStates={setCardState} cardState={cardState} />
        </div>
      </div>
      <BottomBar setCardStates={setCardState} cardState={cardState} />
    </div>
  )
}
export default App
