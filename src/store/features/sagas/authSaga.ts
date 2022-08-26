import {put, call} from 'redux-saga/effects';
import {registerUser} from '~services';
import {setUser} from '../auth';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* handleGetUser(action: any) {
  const {payload} = action;

  console.log('payload', payload);

  const {email, name, password} = payload;

  try {
    const response: ResponseGenerator = yield call(
      registerUser,
      email,
      name,
      password,
    );
    console.log('!!!RESPONSE!!!', response);

    console.log('YIELD CALL REgister user', email, name, password);

    yield put(setUser(response.data));
  } catch (error) {
    console.log(error);

    console.log('problem here CATCH');
  }
}
