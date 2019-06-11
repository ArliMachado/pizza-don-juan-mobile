import {
  call, put, select, apply,
} from 'redux-saga/effects';
import api from '~/services/api';

import { navigate } from '~/services/navigation';

import { Creators as RegisterAction, Types as RegisterTypes } from '~/store/ducks/register';

export function* addUser(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.post, '/users', user);

    console.tron.log(data);
  } catch (err) {
    console.tron.log(err);
  }
}
