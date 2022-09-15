import {initialState} from './initialState';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IComment} from '~types';

export const commentsSlice = createSlice({
  name: 'commentsData',
  initialState,

  reducers: {
    getComments: state => {
      state.getCommentsFetchStatus = FetchStatus.PENDING;
    },

    getCommentsSucces: (state, action: PayloadAction<IComment[]>) => {
      state.comments = action.payload;
      state.getCommentsFetchStatus = FetchStatus.FULFILLED;
    },

    getCommentsFailed: (state, _action) => {
      state.getCommentsFetchStatus = FetchStatus.REJECTED;
    },

    addComment: (state, _action) => {
      state.addCommentsFetchStatus = FetchStatus.PENDING;
    },

    addCommentSucces: (state, action: PayloadAction<IComment>) => {
      state.comments = [...state.comments, action.payload];

      state.addCommentsFetchStatus = FetchStatus.FULFILLED;
    },

    addCommentFailed: (state, _action) => {
      state.addCommentsFetchStatus = FetchStatus.REJECTED;
    },

    updateComment: (state, _action) => {
      state.updateCommentFetchStatus = FetchStatus.PENDING;
    },

    updateCommentSucces: (state, action: PayloadAction<IComment>) => {
      const {id, body} = action.payload;

      state.comments = state.comments.map(comment => {
        if (comment.id === id) {
          comment.body = body;
        }
        return comment;
      });

      state.updateCommentFetchStatus = FetchStatus.FULFILLED;
    },

    updateCommentFailed: (state, _action) => {
      state.updateCommentFetchStatus = FetchStatus.REJECTED;
    },

    deleteComment: (state, _action) => {
      state.deleteCommentFetchStatus = FetchStatus.PENDING;
    },

    deleteCommentSucces: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        comment => comment.id !== action.payload,
      );

      state.deleteCommentFetchStatus = FetchStatus.FULFILLED;
    },

    deleteCommentFailed: (state, _action) => {
      state.deleteCommentFetchStatus = FetchStatus.REJECTED;
    },
  },
});

export const {
  getComments,
  getCommentsSucces,
  getCommentsFailed,
  addComment,
  addCommentSucces,
  addCommentFailed,
  updateComment,
  updateCommentSucces,
  updateCommentFailed,
  deleteComment,
  deleteCommentSucces,
  deleteCommentFailed,
} = commentsSlice.actions;

export default commentsSlice.reducer;
