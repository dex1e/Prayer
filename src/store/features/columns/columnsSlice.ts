import {initialState} from './initialState';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {setData} from '~services';
import {FetchStatus, IColumn} from '~types';
import {setData} from '~services';

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,

  reducers: {
    getColumns: (state, _action) => {
      state.getColumnsFetchStatus === FetchStatus.PENDING;
    },

    getColumnsSucces: (state, action: PayloadAction<IColumn[]>) => {
      state.columns = action.payload;

      state.getColumnsFetchStatus = FetchStatus.FULFILLED;

      setData('columns', state.columns);
    },

    getColumnsFailed: (state, _action) => {
      state.getColumnsFetchStatus = FetchStatus.REJECTED;
    },
  },
});

export const {getColumns, getColumnsSucces, getColumnsFailed} =
  columnsSlice.actions;

export default columnsSlice.reducer;