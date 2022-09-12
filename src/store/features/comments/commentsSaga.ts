import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorageService} from '~services';
import {IComment} from '~types';
import {
  createNewComment,
  deleteCommentApi,
  getCommentsApi,
  updateCommentApi,
} from './commentsApi';
import {
  addComment,
  addCommentFailed,
  addCommentSucces,
  deleteComment,
  deleteCommentFailed,
  deleteCommentSucces,
  getComments,
  getCommentsFailed,
  getCommentsSucces,
  updateComment,
  updateCommentFailed,
  updateCommentSucces,
} from './commentsSlice';

export function* commentsWatcherSaga() {
  yield takeLatest(getComments.type, handleGetComments);
  yield takeLatest(addComment.type, handleAddComment);
  yield takeLatest(updateComment.type, handleUpdateComment);
  yield takeLatest(deleteComment.type, handleDeleteComment);
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

export function* handleUpdateComment(action: PayloadAction<IComment>) {
  const {id, body} = action.payload;

  try {
    const {data} = yield call(() => updateCommentApi(id, body));

    yield put(updateCommentSucces(data));
  } catch (error) {
    yield put(updateCommentFailed(error));
  }
}

export function* handleDeleteComment(action: PayloadAction<number>) {
  try {
    const {status, response} = yield call(() =>
      deleteCommentApi(action.payload),
    );

    if (status === 200) {
      yield put(deleteCommentSucces(action.payload));
    } else {
      yield put(deleteCommentFailed(response.data.message));
    }
  } catch (error: any) {
    yield put(deleteCommentFailed(error.response.data.message));
  }
}
