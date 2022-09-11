import {API_URL} from '~constant';
import {ApiService} from '~services';

export const getCommentsApi = async () => {
  return ApiService.get(API_URL.GET_COMMENTS);
};

export const createNewComment = async (body: string, id: number) => {
  return ApiService.post(API_URL.ADD_COMMENT(id), {body}, {id});
};
