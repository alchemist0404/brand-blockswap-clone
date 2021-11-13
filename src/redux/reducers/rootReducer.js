// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth';

const rootReducer = combineReducers({
  auth
})

export default rootReducer
