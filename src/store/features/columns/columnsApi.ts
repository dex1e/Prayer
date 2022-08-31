import {API_URL} from '~constant';
import {ApiService} from '~services';

export const getColumnsApi = async () => {
  return ApiService.get(API_URL.GET_COLUMNS);
};

export const setNewColumn = async (title: string, description: string) => {
  return ApiService.post(API_URL.ADD_COLUMN, {title, description});
};
