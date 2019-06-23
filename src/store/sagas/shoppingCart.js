import { put, select } from 'redux-saga/effects';

import { Creators as OrderActions } from '~/store/ducks/order';

import { navigate } from '~/services/navigation';

export function* addToOrder() {
  const { items } = yield select(state => state.shoppingCart);
  yield put(OrderActions.setItems(items));
  navigate('PlaceOrder');
}
