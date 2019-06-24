import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import cep from 'cep-promise';

import { Creators as OrderActions } from '~/store/ducks/order';

export function* getAddress(action) {
  try {
    const response = yield call(() => cep(action.payload.cep));
    yield put(OrderActions.cepResponse(response));
  } catch (err) {
    // yield put(OrderActions.productFailure());
  }
}
