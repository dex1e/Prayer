import {initialState} from './initialState';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IColumn} from '~types';

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,

  reducers: {
    getColumns: state => {
      state.getColumnsFetchStatus = FetchStatus.PENDING;
    },

    getColumnsSucces: (state, action: PayloadAction<IColumn[]>) => {
      state.columns = action.payload;
      state.getColumnsFetchStatus = FetchStatus.FULFILLED;
    },

    getColumnsFailed: (state, _action) => {
      state.getColumnsFetchStatus = FetchStatus.REJECTED;
    },

    addColumn: (state, _action) => {
      state.addColumnFetchStatus = FetchStatus.PENDING;
    },

    addColumnSucces: (state, action: PayloadAction<IColumn>) => {
      state.columns = [...state.columns, action.payload];

      state.addColumnFetchStatus = FetchStatus.FULFILLED;
    },

    addColumnFailed: (state, _action) => {
      state.addColumnFetchStatus = FetchStatus.REJECTED;
    },
  },
});

export const {
  getColumns,
  getColumnsSucces,
  getColumnsFailed,
  addColumn,
  addColumnSucces,
  addColumnFailed,
} = columnsSlice.actions;

export default columnsSlice.reducer;
