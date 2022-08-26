import {API_URL} from '~constant';
import ApiService from './ApiService';

export const registerUser = async (
  email: string,
  name: string,
  password: string,
) => {
  console.log('REGISTER USER', email);

  return ApiService.post(API_URL.POST_SIGN_UP, {email, name, password});
};

export const loginUser = async (email: string, password: string) => {
  return ApiService.post(API_URL.POST_SIGN_IN, {email, password});
};
