import { all, takeLatest } from 'redux-saga/effects';

import { Types as RegisterTypes } from '~/store/ducks/register';
import { Types as AuthTypes } from '~/store/ducks/auth';
import { Types as ProductTypes } from '~/store/ducks/product';
import { Types as ProductTypeTypes } from '~/store/ducks/productType';
import { Types as ProductSizes } from '~/store/ducks/ProductSize';
import { Types as ShoppingCartTypes } from '~/store/ducks/shoppingCart';
import { Types as OrderTypes } from '~/store/ducks/order';
import { Types as ProfileTypes } from '~/store/ducks/profile';

import { addUser } from './register';
import { login } from './auth';
import { getProducts } from './product';
import { getProductTypes } from './productType';
import { getProductSizes, addToCart } from './productSize';
import { addToOrder } from './shoppingCart';
import { getAddress, createOrder } from './order';
import { getOrders } from './profile';

export default function* rootSaga() {
  return yield all([
    takeLatest(RegisterTypes.REQUEST, addUser),

    takeLatest(AuthTypes.REQUEST, login),

    takeLatest(ProductTypes.REQUEST, getProducts),

    takeLatest(ProductTypeTypes.REQUEST, getProductTypes),

    takeLatest(ProductSizes.REQUEST, getProductSizes),

    takeLatest(ProductSizes.SELECTED, addToCart),

    takeLatest(ShoppingCartTypes.ADD_TO_ORDER, addToOrder),

    takeLatest(OrderTypes.CEP_REQUEST, getAddress),

    takeLatest(OrderTypes.REQUEST, createOrder),

    takeLatest(ProfileTypes.REQUEST, getOrders),
  ]);
}
