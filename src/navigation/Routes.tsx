import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

export const Routes = () => {
  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
