import {API_URL} from '~constant';
import {ApiService} from '~services';

export const getPrayersApi = async () => {
  return ApiService.get(API_URL.GET_PRAYERS);
};

export const createNewPrayer = async (
  title: string,
  description: string,
  columnId: number,
) => {
  return ApiService.post(
    API_URL.ADD_PRAYER(columnId),
    {title, description},
    {columnId},
  );
};

export const updatePrayerCheckedApi = async (id: number, checked: boolean) => {
  return ApiService.put(API_URL.UPDATE_PRAYER(id), {checked});
};

export const updatePrayerTitleApi = async (id: number, title: string) => {
  return ApiService.put(API_URL.UPDATE_PRAYER(id), {title});
};

export const deletePrayersApi = async (id: number) => {
  return ApiService.delete(API_URL.DELETE_PRAYER(id));
};
