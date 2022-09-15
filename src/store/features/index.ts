import {all} from 'redux-saga/effects';
import {userWatcherSaga} from './auth/authSaga';
import {columnsWatcherSaga} from './columns/columnsSaga';
import {commentsWatcherSaga} from './comments/commentsSaga';
import {prayersWatcherSaga} from './prayers/prayersSaga';

export function* rootWatcher() {
  yield all([
    userWatcherSaga(),
    columnsWatcherSaga(),
    prayersWatcherSaga(),
    commentsWatcherSaga(),
  ]);
}
