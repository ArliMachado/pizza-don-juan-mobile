import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { navigate } from '~/services/navigation';

import { Creators as AuthActions } from '~/store/ducks/auth';

export function* login(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.post, '/sessions', user);
    console.tron.log(`token: ${data.token}`);

    yield put(AuthActions.authSuccess());

    // navigate('Auth');
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}
