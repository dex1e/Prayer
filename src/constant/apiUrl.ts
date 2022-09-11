export const API_URL = {
  SIGN_UP: 'auth/sign-up',
  SIGN_IN: 'auth/sign-in',
  GET_COLUMNS: 'columns',
  ADD_COLUMN: 'columns',
  UPDATE_COLUMN: (id: number) => `columns/${id}`,
  DELETE_COLUMN: (id: number) => `columns/${id}`,
  GET_PRAYERS: 'prayers',
  ADD_PRAYER: (columnId: number) => `columns/${columnId}/prayers`,
  DELETE_PRAYER: (id: number) => `prayers/${id}`,
  UPDATE_PRAYER: (id: number) => `prayers/${id}`,
  GET_COMMENTS: 'comments',
  ADD_COMMENT: (id: number) => `prayers/${id}/comments`,
};
