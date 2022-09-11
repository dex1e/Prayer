import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorageService} from '~services';
import {IComment} from '~types';
import {createNewComment, getCommentsApi} from './commentsApi';
import {
  addComment,
  addCommentFailed,
  addCommentSucces,
  getComments,
  getCommentsFailed,
  getCommentsSucces,
} from './commentsSlice';

export function* commentsWatcherSaga() {
  yield takeLatest(getComments.type, handleGetComments);
  yield takeLatest(addComment.type, handleAddComment);
}

export function* handleGetComments() {
  try {
    const {data} = yield call(() => getCommentsApi());
    yield put(getCommentsSucces(data));

    AsyncStorageService.setData('comments', data);
  } catch (error) {
    yield put(getCommentsFailed(error));
  }
}

export function* handleAddComment(action: PayloadAction<IComment>) {
  const {body, id} = action.payload;
  try {
    const {data} = yield call(() => createNewComment(body, id));
    yield put(addCommentSucces(data));
  } catch (error) {
    yield put(addCommentFailed(error));
  }
}
