import {initialState} from './initialState';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FetchStatus, IPrayer} from '~types';

export const prayersSlice = createSlice({
  name: 'prayersData',
  initialState,

  reducers: {
    getPrayers: state => {
      state.getPrayersFetchStatus = FetchStatus.PENDING;
    },

    getPrayersSucces: (state, action: PayloadAction<IPrayer[]>) => {
      state.prayers = action.payload;
      state.getPrayersFetchStatus = FetchStatus.FULFILLED;
    },

    getPrayersFailed: (state, _action) => {
      state.getPrayersFetchStatus = FetchStatus.REJECTED;
    },

    addPrayer: (state, _action) => {
      state.addPrayerFetchStatus = FetchStatus.PENDING;
    },

    addPrayerSucces: (state, action: PayloadAction<IPrayer>) => {
      state.prayers = [...state.prayers, action.payload];

      state.addPrayerFetchStatus = FetchStatus.FULFILLED;
    },

    addPrayerFailed: (state, _action) => {
      state.addPrayerFetchStatus = FetchStatus.REJECTED;
    },

    deletePrayer: (state, _action) => {
      state.deletePrayerFetchStatus = FetchStatus.PENDING;
    },

    deletePrayerSucces: (state, action: PayloadAction<number>) => {
      state.prayers = state.prayers.filter(
        prayer => prayer.id !== action.payload,
      );

      state.deletePrayerFetchStatus = FetchStatus.FULFILLED;
    },

    deletePrayerFailed: state => {
      state.deletePrayerFetchStatus = FetchStatus.REJECTED;
    },

    updatePrayer: (state, _action) => {
      state.updatePrayerFetchStatus = FetchStatus.PENDING;
    },

    updatePrayerSucces: (state, action: PayloadAction<IPrayer>) => {
      const {id, checked} = action.payload;

      state.prayers = state.prayers.map(prayer => {
        if (prayer.id === id) {
          prayer.checked = checked;
        }
        return prayer;
      });

      state.updatePrayerFetchStatus = FetchStatus.FULFILLED;
    },

    updatePrayerFailed: state => {
      state.updatePrayerFetchStatus = FetchStatus.REJECTED;
    },
  },
});

export const {
  getPrayers,
  getPrayersSucces,
  getPrayersFailed,
  addPrayer,
  addPrayerSucces,
  addPrayerFailed,
  deletePrayer,
  deletePrayerSucces,
  deletePrayerFailed,
  updatePrayer,
  updatePrayerSucces,
  updatePrayerFailed,
} = prayersSlice.actions;

export default prayersSlice.reducer;
