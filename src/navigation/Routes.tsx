import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {getToken} from '~store/features/auth';
import {useAppDispatch, useAppSelector} from '~store/hooks';

import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

export const Routes = () => {
  const token = useAppSelector(state => state.auth.user.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
