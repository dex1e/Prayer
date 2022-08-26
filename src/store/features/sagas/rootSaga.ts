import {takeLeading} from 'redux-saga/effects';
// import {takeLatest} from 'redux-saga/effects';
import {setUser} from '../auth';
import {handleGetUser} from './authSaga';

export function* watcherSaga() {
  // yield takeLatest(setUser.type, handleGetUser);
  yield takeLeading(setUser.type, handleGetUser);
}
