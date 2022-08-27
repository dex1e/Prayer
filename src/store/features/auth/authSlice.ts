import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setData} from '~services';
import {FetchStatus, IUser} from '~types';

import {initialState} from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    registerUser: (state, _action) => {
      state.registrationFetchStatus = FetchStatus.PENDING;
    },

    registerUserSucces: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.registrationFetchStatus = FetchStatus.FULFILLED;

      setData('user', state.user);
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

      setData('user', state.user);
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
} = authSlice.actions;

export default authSlice.reducer;
