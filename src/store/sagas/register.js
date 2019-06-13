import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { navigate } from '~/services/navigation';

import { Creators as RegisterAction } from '~/store/ducks/register';

export function* addUser(action) {
  try {
    const { user } = action.payload;

    yield call(api.post, '/users', user);

    yield put(RegisterAction.registerSuccess());

    navigate('SignIn');
  } catch (err) {
    console.tron.log(err);
  }
}
