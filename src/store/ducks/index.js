import { combineReducers } from 'redux';

import auth from './auth';
import register from './register';
import product from './product';
import productType from './productType';
import productSize from './ProductSize';
import shoppingCart from './shoppingCart';
import order from './order';
import profile from './profile';

export default combineReducers({
  auth,
  register,
  product,
  productType,
  productSize,
  shoppingCart,
  order,
  profile,
});
