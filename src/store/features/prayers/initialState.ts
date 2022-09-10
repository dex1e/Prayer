import {FetchStatus} from '~types';
import {IPrayersInitialState} from './types';

export const initialState: IPrayersInitialState = {
  prayers: [],
  getPrayersFetchStatus: FetchStatus.IDLE,
  addPrayerFetchStatus: FetchStatus.IDLE,
  updatePrayerCheckedFetchStatus: FetchStatus.IDLE,
  updatePrayerTitleFetchStatus: FetchStatus.IDLE,
  deletePrayerFetchStatus: FetchStatus.IDLE,
  error: '',
};
