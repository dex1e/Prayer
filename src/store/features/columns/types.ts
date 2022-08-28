import {FetchStatus, IColumn} from '~types';

export interface IColumnsInitialState {
  columns: IColumn[];
  getColumnsFetchStatus: FetchStatus;
  error: string;
}