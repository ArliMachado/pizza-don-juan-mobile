import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import { navigate } from '~/services/navigation';
import { Creators as RegisterAction, Types as RegisterTypes } from '~/store/ducks/register';

function register(action) {
  try {
    const { user } = action.payload;
    console.tron.log(user);
  } catch (err) {
    console.tron.log(err);
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(RegisterTypes.REQUEST, register)]);
}
