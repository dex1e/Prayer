export enum ScreenName {
  COLUMN = 'Column',
  MY_DESK = 'MyDesk',
  MY_PRAYERS = 'MyPrayers',
  SUBSCRIBED = 'Subscribed',
  PRAYER = 'Prayer',
}

export enum FetchStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export enum AsyncStorageVariables {
  USER = 'user',
}

export interface IUser {
  token: string;
  email: string;
  name: string;
  password: string;
}

export interface IColumn {
  id: number;
  title: string;
  description: string;
  userId: number;
}

export interface IPrayer {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: string[];
}

export interface IComment {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
}
