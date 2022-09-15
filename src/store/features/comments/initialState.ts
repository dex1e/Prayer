import {FetchStatus} from '~types';
import {ICommentsInitialState} from './types';

export const initialState: ICommentsInitialState = {
  comments: [],
  getCommentsFetchStatus: FetchStatus.IDLE,
  addCommentsFetchStatus: FetchStatus.IDLE,
  updateCommentFetchStatus: FetchStatus.IDLE,
  deleteCommentFetchStatus: FetchStatus.IDLE,
  error: '',
};
