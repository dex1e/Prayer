import React from 'react';
import {View} from 'react-native';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

export const Routes = () => {
  const isAuth = false;

  return <View>{isAuth ? <MainNavigator /> : <AuthNavigator />}</View>;
};
