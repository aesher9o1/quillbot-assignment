import { createStore, combineReducers } from 'redux'
import reducer from './reducer'

export const rootReducer = combineReducers({
  reducer
})

export const store = createStore(rootReducer)
export type AppState = ReturnType<typeof rootReducer>
