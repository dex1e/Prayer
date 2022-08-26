export interface IUser {
  token: string;
  email: string;
  name: string;
  password: string;
}

export enum FetchStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}
