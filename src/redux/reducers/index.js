import { combineReducers } from 'redux'


import basket from './basketReducer';

export default combineReducers({
  basket,
  // Here you can registering another reducers.
})