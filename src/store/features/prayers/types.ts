import {FetchStatus, IPrayer} from '~types';

export interface IPrayersInitialState {
  prayers: IPrayer[];
  getPrayersFetchStatus: FetchStatus;
  addPrayerFetchStatus: FetchStatus;
  updatePrayerFetchStatus: FetchStatus;
  deletePrayerFetchStatus: FetchStatus;
  error: string;
}
