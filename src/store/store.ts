import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './features/auth';
import columnsReducer from './features/columns';
import prayersReducer from './features/prayers';
import {rootWatcher} from './features';

const reducers = combineReducers({
  auth: authReducer,
  columnsData: columnsReducer,
  prayersData: prayersReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
