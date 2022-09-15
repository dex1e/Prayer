import {FetchStatus, IColumn} from '~types';

export interface IColumnsInitialState {
  columns: IColumn[];
  getColumnsFetchStatus: FetchStatus;
  addColumnFetchStatus: FetchStatus;
  updateColumnFetchStatus: FetchStatus;
  deleteColumnFetchStatus: FetchStatus;
  error: string;
}
