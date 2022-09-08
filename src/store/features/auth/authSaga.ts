import {PayloadAction} from '@reduxjs/toolkit';
import {put, call, takeLatest} from 'redux-saga/effects';
import {AsyncStorageVariables, IUser} from '~types';
import {signIn, signUp} from './authApi';
import {
  getToken,
  getTokenFailed,
  getTokenSucces,
  loginUser,
  loginUserFailed,
  loginUserSucces,
  registerUser,
  registerUserFailed,
  registerUserSucces,
  signOutUser,
  signOutUserFailed,
  signOutUserSucces,
} from './authSlice';
import {AsyncStorageService} from '~services';

export function* userWatcherSaga() {
  yield takeLatest(registerUser.type, handleRegisterUser);
  yield takeLatest(loginUser.type, handleLoginUser);
  yield takeLatest(getToken.type, handleGetToken);
  yield takeLatest(signOutUser.type, handleSignOutUser);
}

export function* handleGetToken() {
  try {
    const {token} = yield call(
      AsyncStorageService.getData,
      AsyncStorageVariables.USER,
    );

    if (token) {
      yield put(getTokenSucces(token));
    } else {
      yield put(getTokenFailed());
    }
  } catch (error) {
    yield put(getTokenFailed());
  }
}

export function* handleRegisterUser(action: PayloadAction<IUser>) {
  const {email, name, password} = action.payload;

  try {
    const {data} = yield call(() => signUp(email, name, password));
    yield put(registerUserSucces(data));

    AsyncStorageService.setData(AsyncStorageVariables.USER, data);
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}

export function* handleLoginUser(action: PayloadAction<IUser>) {
  const {email, password} = action.payload;

  try {
    const {data} = yield call(() => signIn(email, password));
    yield put(loginUserSucces(data));

    AsyncStorageService.setData(AsyncStorageVariables.USER, data);
  } catch (error) {
    yield put(loginUserFailed(error));
  }
}

export function* handleSignOutUser() {
  try {
    yield call(AsyncStorageService.removeData, AsyncStorageVariables.USER);

    yield put(signOutUserSucces());
  } catch (error) {
    yield put(signOutUserFailed(error));
  }
}
