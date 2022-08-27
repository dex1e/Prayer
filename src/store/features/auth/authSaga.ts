import {PayloadAction} from '@reduxjs/toolkit';
import {put, call, takeLatest} from 'redux-saga/effects';
import {IUser} from '~types';
import {signIn, signUp} from './authApi';
import {
  loginUser,
  loginUserFailed,
  loginUserSucces,
  registerUser,
  registerUserFailed,
  registerUserSucces,
} from './authSlice';

export function* watcherSaga() {
  yield takeLatest(registerUser.type, handleRegisterUser);
  yield takeLatest(loginUser.type, handleLoginUser);
}

export function* handleRegisterUser(action: PayloadAction<IUser>) {
  const {email, name, password} = action.payload;

  try {
    const {data} = yield call(() => signUp(email, name, password));
    yield put(registerUserSucces(data));
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}

export function* handleLoginUser(action: PayloadAction<IUser>) {
  const {email, password} = action.payload;

  try {
    const {data} = yield call(() => signIn(email, password));
    yield put(loginUserSucces(data));
  } catch (error) {
    yield put(loginUserFailed(error));
  }
}
