import {API_URL} from '~constant';
import {ApiService} from '~services';

export const signUp = async (email: string, name: string, password: string) => {
  return ApiService.post(API_URL.SIGN_UP, {email, name, password});
};

export const loginUser = async (email: string, password: string) => {
  return ApiService.post(API_URL.SIGN_IN, {email, password});
};
