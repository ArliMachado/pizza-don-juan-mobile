import { all, takeLatest } from 'redux-saga/effects';

import { Types as RegisterTypes } from '~/store/ducks/register';
import { Types as AuthTypes } from '~/store/ducks/auth';
import { addUser } from './register';
import { login } from './auth';

export default function* rootSaga() {
  return yield all([
    takeLatest(RegisterTypes.REQUEST, addUser),
    takeLatest(AuthTypes.REQUEST, login),
  ]);
}
