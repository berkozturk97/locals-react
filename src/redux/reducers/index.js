import { combineReducers } from 'redux';

import { basketReducer } from './basketReducer';
import { productReducer } from './productReducer';

export default combineReducers({
  basket: basketReducer,
  products: productReducer,
});
