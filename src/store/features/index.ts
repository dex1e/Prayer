import {all} from 'redux-saga/effects';
import {userWatcherSaga} from './auth/authSaga';
import {columnsWatcherSaga} from './columns/columnsSaga';
import {prayersWatcherSaga} from './prayers/prayersSaga';

export function* rootWatcher() {
  yield all([userWatcherSaga(), columnsWatcherSaga(), prayersWatcherSaga()]);
}
