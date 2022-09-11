import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IUser} from '~types';

import {initialState} from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    getUser: state => {
      state.getUserFetchStatus = FetchStatus.PENDING;
    },

    getUserSucces: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.getUserFetchStatus = FetchStatus.FULFILLED;
    },

    getUserFailed: state => {
      state.getUserFetchStatus = FetchStatus.REJECTED;
    },

    registerUser: (state, _action) => {
      state.registrationFetchStatus = FetchStatus.PENDING;
    },

    registerUserSucces: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.registrationFetchStatus = FetchStatus.FULFILLED;
    },

    registerUserFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;

      state.registrationFetchStatus = FetchStatus.REJECTED;
    },

    loginUser: (state, _action) => {
      state.loginFetchStatus = FetchStatus.PENDING;
    },

    loginUserSucces: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.loginFetchStatus = FetchStatus.FULFILLED;
    },

    loginUserFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
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
  signOutUser,
  signOutUserSucces,
  signOutUserFailed,
  getUser,
  getUserSucces,
  getUserFailed,
} = authSlice.actions;

export default authSlice.reducer;
