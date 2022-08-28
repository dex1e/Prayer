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
  id: number | null;
  title: string;
  description: string;
  userId: number | null;
}
