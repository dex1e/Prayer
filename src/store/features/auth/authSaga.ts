import {PayloadAction} from '@reduxjs/toolkit';
import {put, call, takeLatest} from 'redux-saga/effects';
import {AsyncStorageVariables, IUser} from '~types';
import {signIn, signUp} from './authApi';
import {
  getUser,
  getUserFailed,
  getUserSucces,
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
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(signOutUser.type, handleSignOutUser);
}

export function* handleGetUser() {
  try {
    const user: IUser = yield call(
      AsyncStorageService.getData,
      AsyncStorageVariables.USER,
    );

    if (user) {
      yield put(getUserSucces(user));
    } else {
      yield put(getUserFailed());
    }
  } catch (error) {
    yield put(getUserFailed());
  }
}

export function* handleRegisterUser(action: PayloadAction<IUser>) {
  const {email, name, password} = action.payload;

  try {
    const {data} = yield call(() => signUp(email, name, password));

    if (data.id) {
      yield put(registerUserSucces(data));
      AsyncStorageService.setData(AsyncStorageVariables.USER, data);
    } else if (data.message) {
      yield put(registerUserFailed(data.message));
    } else {
      yield put(registerUserFailed('Authentification error'));
    }
  } catch (error) {
    yield put(registerUserFailed(JSON.stringify(error)));
  }
}

export function* handleLoginUser(action: PayloadAction<IUser>) {
  const {email, password} = action.payload;

  try {
    const {data} = yield call(() => signIn(email, password));

    if (data.id) {
      yield put(loginUserSucces(data));
      AsyncStorageService.setData(AsyncStorageVariables.USER, data);
    } else if (data.message) {
      yield put(loginUserFailed(data.message));
    } else {
      yield put(loginUserFailed('Authentification error'));
    }
  } catch (error) {
    yield put(loginUserFailed(JSON.stringify(error)));
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
