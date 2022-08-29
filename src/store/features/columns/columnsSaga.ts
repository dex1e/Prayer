import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorageService} from '~services';
import {getColumnsApi} from './columnsApi';

import {getColumns, getColumnsFailed, getColumnsSucces} from './columnsSlice';

export function* columnsWatcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
}

export function* handleGetColumns() {
  try {
    const {data} = yield call(() => getColumnsApi());
    yield put(getColumnsSucces(data));

    AsyncStorageService.setData('columns', data);
  } catch (error) {
    yield put(getColumnsFailed(error));
  }
}

// export function* handleLoginUser(action: PayloadAction<IUser>) {
//   const {email, password} = action.payload;

//   try {
//     const {data} = yield call(() => signIn(email, password));
//     yield put(loginUserSucces(data));
//   } catch (error) {
//     yield put(loginUserFailed(error));
//   }
// }
