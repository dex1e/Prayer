import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './features/auth';

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
