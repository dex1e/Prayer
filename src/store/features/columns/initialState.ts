import {FetchStatus} from '~types';
import {IColumnsInitialState} from './types';

export const initialState: IColumnsInitialState = {
  columns: [],
  getColumnsFetchStatus: FetchStatus.IDLE,
  addColumnFetchStatus: FetchStatus.IDLE,
  updateColumnFetchStatus: FetchStatus.IDLE,
  deleteColumnFetchStatus: FetchStatus.IDLE,
  error: '',
};
