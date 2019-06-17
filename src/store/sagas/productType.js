import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as ProductTypeActions } from '~/store/ducks/productType';

export function* getProductTypes() {
  try {
    const { id } = yield select(state => state.product.productSelected);

    const response = yield call(api.get, `/product/${id}/types`);

    yield put(ProductTypeActions.productTypeSuccess(response));
  } catch (err) {
    yield put(ProductTypeActions.productypeFailure());
  }
}
