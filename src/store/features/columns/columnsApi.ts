import {API_URL} from '~constant';
import {ApiService} from '~services';

export const getColumnsApi = async () => {
  return ApiService.get(API_URL.GET_COLUMNS);
};

export const addColumn = async (
  title: string,
  description: string,
  prayerId: number,
) => {
  return ApiService.post(API_URL.ADD_COLUMN, {title, description, prayerId});
};
