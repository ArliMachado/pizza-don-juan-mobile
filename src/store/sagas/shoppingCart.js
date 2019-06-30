import { put, select } from 'redux-saga/effects';

import { Creators as OrderActions } from '~/store/ducks/order';

import { navigate } from '~/services/navigation';

export function* addToOrder(action) {
  const { items } = yield select(state => state.shoppingCart);
  console.tron.log(`total: ${JSON.stringify(action.payload.data)}`);
  yield put(OrderActions.setOrder({ products: items, totalValue: action.payload.data }));
  navigate('Order');
}
