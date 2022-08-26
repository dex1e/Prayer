import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
    },

    registerUserFailed: (state, _action) => {
      state.registrationFetchStatus = FetchStatus.REJECTED;
    },
  },
});

export const {registerUser, registerUserSucces, registerUserFailed} =
  authSlice.actions;

export default authSlice.reducer;
