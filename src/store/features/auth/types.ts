import {FetchStatus, IUser} from '~types';

export interface IUserInitialState {
  user: IUser;
  registrationFetchStatus: FetchStatus;
  error: string;
}
