import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as ProductActions } from '~/store/ducks/product';

export function* getProducts() {
  try {
    const { data } = yield call(api.get, '/products');
    yield put(ProductActions.productSuccess(data));
  } catch (err) {
    yield put(ProductActions.productFailure());
  }
}
