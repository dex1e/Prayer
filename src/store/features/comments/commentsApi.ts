import {API_URL} from '~constant';
import {ApiService} from '~services';

export const getCommentsApi = async () => {
  return ApiService.get(API_URL.GET_COMMENTS);
};

export const createNewComment = async (body: string, id: number) => {
  return ApiService.post(API_URL.ADD_COMMENT(id), {body});
};

export const updateCommentApi = async (id: number, body: string) => {
  return ApiService.put(API_URL.UPDATE_COMMENT(id), {body});
};

export const deleteCommentApi = async (id: number) => {
  return ApiService.delete(API_URL.DELETE_COMMENT(id));
};
