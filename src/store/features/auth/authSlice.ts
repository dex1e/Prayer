import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IUser} from '~types';

import {initialState} from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    getToken: state => {
      state.getTokenFetchStatus = FetchStatus.PENDING;
    },

    getTokenSucces: (state, action: PayloadAction<string>) => {
      state.user.token = action.payload;
      state.getTokenFetchStatus = FetchStatus.FULFILLED;
    },

    getTokenFailed: state => {
      state.getTokenFetchStatus = FetchStatus.REJECTED;
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

    signOutUser: state => {
      state.signOutFetchStatus = FetchStatus.PENDING;
    },

    signOutUserSucces: state => {
      state.user = {token: '', email: '', name: '', password: ''};
      state.signOutFetchStatus = FetchStatus.FULFILLED;
    },

    signOutUserFailed: (state, _action) => {
      state.signOutFetchStatus = FetchStatus.REJECTED;
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
  signOutUser,
  signOutUserSucces,
  signOutUserFailed,
} = authSlice.actions;

export default authSlice.reducer;
