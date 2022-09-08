import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '~assets';
import {getToken} from '~store/features/auth';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

export const Routes = () => {
  const getTokenFetchStatus = useAppSelector(
    state => state.auth.getTokenFetchStatus,
  );

  const token = useAppSelector(state => state?.auth?.user?.token);
  const isLoading = getTokenFetchStatus === FetchStatus.PENDING;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

  return (
    <NavigationContainer>
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
