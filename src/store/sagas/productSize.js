import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as ProductSizeActions } from '~/store/ducks/ProductSize';

export function* getProductSizes() {
  try {
    const { id, product_id } = yield select(state => state.productType.productSelected);

    const { data } = yield call(api.get, `/product/${product_id}/types/${id}/sizes`);

    yield put(ProductSizeActions.productSizeSuccess(data));
  } catch (err) {
    yield put(ProductSizeActions.productSizeFailure());
  }
}
