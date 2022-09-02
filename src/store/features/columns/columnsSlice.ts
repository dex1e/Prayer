import {initialState} from './initialState';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IColumn} from '~types';

export const columnsSlice = createSlice({
  name: 'columnsData',
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

    updateColumn: (state, _action) => {
      state.updateColumnFetchStatus = FetchStatus.PENDING;
    },

    updateColumnSucces: (state, action: PayloadAction<IColumn>) => {
      const {id, title, description} = action.payload;

      state.columns = state.columns.map(column => {
        if (column.id === id) {
          column.title = title;
          column.description = description;
        }
        return column;
      });

      state.updateColumnFetchStatus = FetchStatus.FULFILLED;
    },

    updateColumnFailed: state => {
      state.updateColumnFetchStatus = FetchStatus.REJECTED;
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
  updateColumn,
  updateColumnSucces,
  updateColumnFailed,
} = columnsSlice.actions;

export default columnsSlice.reducer;
