import { combineReducers } from 'redux';

import auth from './auth';
import register from './register';
import product from './product';
import productType from './productType';

export default combineReducers({
  auth,
  register,
  product,
  productType,
});
