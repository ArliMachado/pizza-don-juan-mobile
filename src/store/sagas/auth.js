import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { navigate } from '~/services/navigation';
import { OnSignIn } from '~/services/auth';

import { Creators as AuthActions } from '~/store/ducks/auth';

export function* login(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.post, '/sessions', user);
    OnSignIn(data.token.token);

    yield put(AuthActions.authSuccess());

    navigate('Product');
  } catch ({ response: { data } }) {
    yield put(AuthActions.authFailure(data[0].message));
  }
}
