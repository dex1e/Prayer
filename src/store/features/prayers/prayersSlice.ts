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
      const newPrayer = {...action.payload, commentsIds: []};

      state.prayers = [...state.prayers, newPrayer];

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

    deletePrayerFailed: (state, _action) => {
      state.deletePrayerFetchStatus = FetchStatus.REJECTED;
    },

    updatePrayerChecked: (state, _action) => {
      state.updatePrayerCheckedFetchStatus = FetchStatus.PENDING;
    },

    updatePrayerCheckedSucces: (state, action: PayloadAction<IPrayer>) => {
      const {id, checked} = action.payload;

      state.prayers = state.prayers.map(prayer => {
        if (prayer.id === id) {
          prayer.checked = checked;
        }
        return prayer;
      });

      state.updatePrayerCheckedFetchStatus = FetchStatus.FULFILLED;
    },

    updatePrayerCheckedFailed: (state, _action) => {
      state.updatePrayerCheckedFetchStatus = FetchStatus.REJECTED;
    },

    updatePrayerTitle: (state, _action) => {
      state.updatePrayerTitleFetchStatus = FetchStatus.PENDING;
    },

    updatePrayerTitleSucces: (state, action: PayloadAction<IPrayer>) => {
      const {id, title} = action.payload;

      state.prayers = state.prayers.map(prayer => {
        if (prayer.id === id) {
          prayer.title = title;
        }
        return prayer;
      });

      state.updatePrayerTitleFetchStatus = FetchStatus.FULFILLED;
    },

    updatePrayerTitleFailed: (state, _action) => {
      state.updatePrayerTitleFetchStatus = FetchStatus.REJECTED;
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
  updatePrayerChecked,
  updatePrayerCheckedSucces,
  updatePrayerCheckedFailed,
  updatePrayerTitle,
  updatePrayerTitleSucces,
  updatePrayerTitleFailed,
} = prayersSlice.actions;

export default prayersSlice.reducer;
