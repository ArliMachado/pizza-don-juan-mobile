import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';
import cepApi from 'cep-promise';
import { navigate } from '~/services/navigation';

import { Creators as OrderActions } from '~/store/ducks/order';
import { Creators as ShoppingCartActions } from '~/store/ducks/shoppingCart';

export function* getAddress(action) {
  try {
    const { street, city, cep } = yield call(() => cepApi(action.payload.cep));
    yield put(OrderActions.cepResponse({ street, city, cep }));
  } catch (err) {
    yield put(OrderActions.orderFailure('CEP não encontrado'));
  }
}

export function* createOrder() {
  try {
    const { address, observation, totalValue } = yield select(state => state.order);
    const { items } = yield select(state => state.shoppingCart);

    yield call(api.post, '/orders', {
      observation,
      address,
      products: items,
      total_value: totalValue,
    });

    yield put(ShoppingCartActions.cleanCart());

    yield put(OrderActions.orderResponse());

    navigate('Product');
  } catch (err) {
    yield put(OrderActions.orderFailure('Houve um erro ao tentar finalizar o pedido'));
  }
}
