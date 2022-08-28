import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IUser} from '~types';

import {initialState} from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    getToken: state => {
      state.getUserFetchStatus = FetchStatus.PENDING;
    },

    getTokenSucces: (state, action: PayloadAction<string>) => {
      state.user.token = action.payload;
      state.getUserFetchStatus = FetchStatus.FULFILLED;
    },

    getTokenFailed: (state, _action) => {
      state.getUserFetchStatus = FetchStatus.REJECTED;
    },

    registerUser: (state, _action) => {
      state.registrationFetchStatus = FetchStatus.PENDING;
    },

    registerUserSucces: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.registrationFetchStatus = FetchStatus.FULFILLED;
    },

    registerUserFailed: (state, _action) => {
      state.registrationFetchStatus = FetchStatus.REJECTED;
    },

    loginUser: (state, _action) => {
      state.loginFetchStatus = FetchStatus.PENDING;
    },

    loginUserSucces: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.loginFetchStatus = FetchStatus.FULFILLED;
    },

    loginUserFailed: (state, _action) => {
      state.loginFetchStatus = FetchStatus.REJECTED;
    },
  },
});

export const {
  registerUser,
  registerUserSucces,
  registerUserFailed,
  loginUser,
  loginUserSucces,
  loginUserFailed,
  getToken,
  getTokenSucces,
  getTokenFailed,
} = authSlice.actions;

export default authSlice.reducer;
