import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorageService} from '~services';
import {IPrayer} from '~types';
import {addColumnFailed} from '../columns';
import {
  createNewPrayer,
  deletePrayersApi,
  getPrayersApi,
  updatePrayerCheckedApi,
  updatePrayerTitleApi,
} from './prayersApi';

import {
  getPrayers,
  getPrayersSucces,
  getPrayersFailed,
  addPrayer,
  addPrayerSucces,
  deletePrayerSucces,
  deletePrayerFailed,
  deletePrayer,
  updatePrayerChecked,
  updatePrayerCheckedSucces,
  updatePrayerCheckedFailed,
  updatePrayerTitleSucces,
  updatePrayerTitleFailed,
  updatePrayerTitle,
} from './prayersSlice';

export function* prayersWatcherSaga() {
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(addPrayer.type, handleAddPrayer);
  yield takeLatest(deletePrayer.type, handleDeletePrayer);
  yield takeLatest(updatePrayerChecked.type, handleUpdateCheckedPrayer);
  yield takeLatest(updatePrayerTitle.type, handleUpdateTitlePrayer);
}

export function* handleGetPrayers() {
  try {
    const {data} = yield call(() => getPrayersApi());
    yield put(getPrayersSucces(data));

    AsyncStorageService.setData('prayers', data);
  } catch (error) {
    yield put(getPrayersFailed(error));
  }
}

export function* handleAddPrayer(action: PayloadAction<IPrayer>) {
  const {title, description, columnId} = action.payload;

  try {
    const {data} = yield call(() =>
      createNewPrayer(title, description, columnId),
    );

    yield put(addPrayerSucces(data));
  } catch (error) {
    yield put(addColumnFailed(error));
  }
}

export function* handleDeletePrayer(action: PayloadAction<number>) {
  try {
    const {status, response} = yield call(() =>
      deletePrayersApi(action.payload),
    );

    if (status === 200) {
      yield put(deletePrayerSucces(action.payload));
    } else {
      yield put(deletePrayerFailed(response.data.message));
    }
  } catch (error: any) {
    yield put(deletePrayerFailed(error.response.data.message));
  }
}

export function* handleUpdateCheckedPrayer(action: PayloadAction<IPrayer>) {
  const {id, checked} = action.payload;

  try {
    const {data} = yield call(() => updatePrayerCheckedApi(id, checked));

    yield put(updatePrayerCheckedSucces(data));
  } catch (error) {
    yield put(updatePrayerCheckedFailed(error));
  }
}

export function* handleUpdateTitlePrayer(action: PayloadAction<IPrayer>) {
  const {id, title} = action.payload;

  try {
    const {data} = yield call(() => updatePrayerTitleApi(id, title));

    yield put(updatePrayerTitleSucces(data));
  } catch (error) {
    yield put(updatePrayerTitleFailed(error));
  }
}
