import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorageService} from '~services';
import {IColumn} from '~types';
import {getColumnsApi, createNewColumn} from './columnsApi';

import {
  addColumn,
  addColumnFailed,
  addColumnSucces,
  getColumns,
  getColumnsFailed,
  getColumnsSucces,
} from './columnsSlice';

export function* columnsWatcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
  yield takeLatest(addColumn.type, handleAddColumn);
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

export function* handleAddColumn(action: PayloadAction<IColumn>) {
  const {title, description} = action.payload;

  try {
    const {data} = yield call(() => createNewColumn(title, description));

    yield put(addColumnSucces(data));
  } catch (error) {
    yield put(addColumnFailed(error));
  }
}
