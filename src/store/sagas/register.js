import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import api from '~/services/api';

import { navigate } from '~/services/navigation';

import { Creators as RegisterAction, Types as RegisterTypes } from '~/store/ducks/register';

export function addUser(action) {
  try {
    const { user } = action.payload;
    console.tron.log(user);
  } catch (err) {
    console.tron.log(err);
  }
}
