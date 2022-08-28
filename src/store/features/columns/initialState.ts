import {FetchStatus} from '~types';
import {IColumnsInitialState} from './types';

export const initialState: IColumnsInitialState = {
  columns: [
    {
      id: null,
      title: '',
      description: '',
      userId: null,
    },
  ],
  getColumnsFetchStatus: FetchStatus.IDLE,
  error: '',
};
