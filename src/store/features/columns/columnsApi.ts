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
  console.log(id, title, description, 'API = id, title, description');
  return ApiService.put(
    API_URL.UPDATE_COLUMN(String(id)),
    {title, description},
    {id},
  );
};
