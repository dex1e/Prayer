import {all} from 'redux-saga/effects';
import {userWatcherSaga} from './auth/authSaga';
import {columnsWatcherSaga} from './columns/columnsSaga';

export function* rootWatcher() {
  yield all([userWatcherSaga(), columnsWatcherSaga()]);
}
