import { combineReducers } from 'redux'
import slides from './slides'
import sidebar from './sidebar'

const rootReducer = combineReducers({
  slides,
  sidebar
})

export default rootReducer
