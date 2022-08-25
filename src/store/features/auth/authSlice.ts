import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '~types';

import {initialState} from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
