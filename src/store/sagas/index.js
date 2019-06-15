import { all, takeLatest } from 'redux-saga/effects';

import { Types as RegisterTypes } from '~/store/ducks/register';
import { Types as AuthTypes } from '~/store/ducks/auth';
import { Types as ProductTypes } from '~/store/ducks/product';
import { addUser } from './register';
import { login } from './auth';
import { getProducts } from './product';

export default function* rootSaga() {
  return yield all([
    takeLatest(RegisterTypes.REQUEST, addUser),

    takeLatest(AuthTypes.REQUEST, login),

    takeLatest(ProductTypes.REQUEST, getProducts),
  ]);
}
