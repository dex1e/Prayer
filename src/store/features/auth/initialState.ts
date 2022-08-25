import {IUserInitialState} from './types';

export const initialState: IUserInitialState = {
  user: {
    token: '',
    email: '',
    name: '',
    password: '',
  },
};
