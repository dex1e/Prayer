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
  error: '',
};
