import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorageService} from '~services';
import {IPrayer} from '~types';
import {addColumnFailed} from '../columns';
import {
  createNewPrayer,
  deletePrayersApi,
  getPrayersApi,
  updatePrayerApi,
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
  updatePrayerSucces,
  updatePrayerFailed,
  updatePrayer,
} from './prayersSlice';

export function* prayersWatcherSaga() {
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(addPrayer.type, handleAddPrayer);
  yield takeLatest(deletePrayer.type, handleDeletePrayer);
  yield takeLatest(updatePrayer.type, handleUpdatePrayer);
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
  const {title, description, id} = action.payload;
  try {
    const {data} = yield call(() => createNewPrayer(title, description, id));
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
    console.log(error.response.data.message);
  }
}

export function* handleUpdatePrayer(action: PayloadAction<IPrayer>) {
  const {id, checked} = action.payload;

  try {
    const {data} = yield call(() => updatePrayerApi(id, checked));

    yield put(updatePrayerSucces(data));
  } catch (error) {
    yield put(updatePrayerFailed());
    console.log(error);
  }
}
