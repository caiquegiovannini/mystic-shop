import { combineReducers } from 'redux';

import productsReducer from './products';
import lightboxReducer from './lightbox';
import cartReducer from './cart';

const appReducers = combineReducers({
  products: productsReducer,
  lightbox: lightboxReducer,
  cart: cartReducer,
});

export default appReducers;