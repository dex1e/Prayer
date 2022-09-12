import {API_URL} from '~constant';
import {ApiService} from '~services';

export const getColumnsApi = async () => {
  return ApiService.get(API_URL.GET_COLUMNS);
};

export const createNewColumn = async (title: string, description: string) => {
  return ApiService.post(API_URL.ADD_COLUMN, {title, description});
};

export const updateColumnApi = async (
  id: number,
  title: string,
  description: string,
) => {
  return ApiService.put(API_URL.UPDATE_COLUMN(id), {title, description});
};

export const deleteColumnApi = async (id: number) => {
  return ApiService.delete(API_URL.DELETE_COLUMN(id), {id});
};
