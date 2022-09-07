export const API_URL = {
  SIGN_UP: 'auth/sign-up',
  SIGN_IN: 'auth/sign-in',
  GET_COLUMNS: 'columns',
  ADD_COLUMN: 'columns',
  UPDATE_COLUMN: (id: number) => `columns/${id}`,
  DELETE_COLUMN: (id: number) => `columns/${id}`,
  GET_PRAYERS: 'prayers',
  ADD_PRAYER: (id: number) => `columns/${id}/prayers`,
  DELETE_PRAYER: (id: number) => `prayers/${id}`,
  UPDATE_PRAYER: (id: number) => `prayers/${id}`,
};
