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
  },
});

export const {
  getComments,
  getCommentsSucces,
  getCommentsFailed,
  addComment,
  addCommentSucces,
  addCommentFailed,
} = commentsSlice.actions;

export default commentsSlice.reducer;
