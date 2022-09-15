import {FetchStatus, IPrayer} from '~types';

export interface IPrayersInitialState {
  prayers: IPrayer[];
  getPrayersFetchStatus: FetchStatus;
  addPrayerFetchStatus: FetchStatus;
  updatePrayerCheckedFetchStatus: FetchStatus;
  updatePrayerTitleFetchStatus: FetchStatus;
  deletePrayerFetchStatus: FetchStatus;
  error: string;
}
