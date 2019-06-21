import { call, put, select } from 'redux-saga/effects';
import { navigate } from '~/services/navigation';

import api from '~/services/api';

import { Creators as ProductSizeActions } from '~/store/ducks/ProductSize';
import { Creators as ShoppingCartActions } from '~/store/ducks/shoppingCart';

export function* getProductSizes() {
  try {
    const { id, product_id } = yield select(state => state.productType.productSelected);

    const { data } = yield call(api.get, `/product/${product_id}/types/${id}/sizes`);

    yield put(ProductSizeActions.productSizeSuccess(data));
  } catch (err) {
    yield put(ProductSizeActions.productSizeFailure());
  }
}

export function* addToCart(action) {
  try {
    const { data } = action.payload;

    const product = {
      title: data.productType.title,
      size: data.title,
      price: Number(data.price),
      image: data.productType.file.url,
    };

    yield put(ShoppingCartActions.shoppingCartAdd(product));
    navigate('ShoppingCart');
  } catch (err) {
    yield put(ProductSizeActions.productSizeFailure());
  }
}
