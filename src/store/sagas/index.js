import { all, takeLatest } from 'redux-saga/effects';

import { Types as RegisterTypes } from '~/store/ducks/register';
import { addUser } from './register';

export default function* rootSaga() {
  return yield all([takeLatest(RegisterTypes.REQUEST, addUser)]);
}
