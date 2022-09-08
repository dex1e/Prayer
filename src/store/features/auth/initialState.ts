import {FetchStatus} from '~types';
import {IUserInitialState} from './types';

export const initialState: IUserInitialState = {
  user: {
    token: '',
    email: '',
    name: '',
    password: '',
  },

  registrationFetchStatus: FetchStatus.IDLE,
  loginFetchStatus: FetchStatus.IDLE,
  getTokenFetchStatus: FetchStatus.IDLE,
  signOutFetchStatus: FetchStatus.IDLE,
  error: '',
};
