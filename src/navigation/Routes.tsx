import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '~assets';
import {getUser} from '~store/features/auth';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

export const Routes = () => {
  const getUserFetchStatus = useAppSelector(
    state => state.auth.getUserFetchStatus,
  );

  const token = useAppSelector(state => state.auth.user.token);
  const isLoading = getUserFetchStatus === FetchStatus.PENDING;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={COLORS.primary}
      />
    );
  }

  return (
    <NavigationContainer>
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
