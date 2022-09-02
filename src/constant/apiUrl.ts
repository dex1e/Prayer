export const API_URL = {
  SIGN_UP: 'auth/sign-up',
  SIGN_IN: 'auth/sign-in',
  GET_COLUMNS: 'columns',
  ADD_COLUMN: 'columns',
  UPDATE_COLUMN: (id: number) => `columns/${id}`,
};
