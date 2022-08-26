import {PayloadAction} from '@reduxjs/toolkit';
import {put, call, takeLeading} from 'redux-saga/effects';
import {IUser} from '~types';
import {signUp} from './authApi';
import {
  registerUser,
  registerUserFailed,
  registerUserSucces,
} from './authSlice';

export function* watcherSaga() {
  // yield takeLatest(setUser.type, handleGetUser);
  yield takeLeading(registerUser.type, handleRegisterUser);
}

export function* handleRegisterUser(action: PayloadAction<IUser>) {
  const {email, name, password} = action.payload;
  console.log(action, 'handleRegisterUser');

  try {
    const {data} = yield call(() => signUp(email, name, password));
    yield put(registerUserSucces(data));
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}
