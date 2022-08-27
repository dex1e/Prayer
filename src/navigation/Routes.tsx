import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {getData} from '~services';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

export const Routes = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await getData('user');

    if (data) {
      setToken(data?.token);
    }
  };

  return (
    <NavigationContainer>
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
