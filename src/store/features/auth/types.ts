import {FetchStatus, IUser} from '~types';

export interface IUserInitialState {
  user: IUser;
  registrationFetchStatus: FetchStatus;
  loginFetchStatus: FetchStatus;
  error: string;
  isAuth: boolean;
}
