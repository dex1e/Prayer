import {FetchStatus, IComment} from '~types';

export interface ICommentsInitialState {
  comments: IComment[];
  getCommentsFetchStatus: FetchStatus;
  addCommentsFetchStatus: FetchStatus;
  error: string;
}
