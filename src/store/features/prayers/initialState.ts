import {FetchStatus} from '~types';
import {IPrayersInitialState} from './types';

export const initialState: IPrayersInitialState = {
  prayers: [],
  getPrayersFetchStatus: FetchStatus.IDLE,
  addPrayerFetchStatus: FetchStatus.IDLE,
  updatePrayerFetchStatus: FetchStatus.IDLE,
  deletePrayerFetchStatus: FetchStatus.IDLE,
  error: '',
};
