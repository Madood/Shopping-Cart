// reducers.js
import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, cartReducer } from './ProductReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer, // Include the cartReducer
});

export default reducers;
