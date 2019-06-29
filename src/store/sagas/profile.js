import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { Creators as ProfileActions } from '~/store/ducks/profile';

export function* getOrders() {
  try {
    const { data } = yield call(api.get, 'orders/getByUser');

    yield put(ProfileActions.responseOrders(data));
  } catch (erro) {
    yield put(ProfileActions.failure());
  }
}
