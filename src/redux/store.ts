import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  storeReducer: reducer
})

const configureStore = () => {
  const middlewares = applyMiddleware(thunkMiddleware)
  const enhancers = composeWithDevTools(middlewares)

  const store = createStore(rootReducer, enhancers)

  return store
}

export type AppState = ReturnType<typeof rootReducer>
export default configureStore
