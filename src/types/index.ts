export enum FetchStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export enum AsyncStorageVariables {
  USER = 'user',
}

export type Maybe<T> = T | null;

export interface IUser {
  token: string;
  email: string;
  name: string;
  password: string;
}

export interface IColumn {
  id: Maybe<number>;
  title: string;
  description: string;
  userId: Maybe<number>;
}
