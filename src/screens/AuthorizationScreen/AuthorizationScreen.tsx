import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {LoginScreen} from './LoginScreen';
import {RegistrationScreen} from './RegistrationScreen';
import {COLORS} from '~assets';

const Tab = createMaterialTopTabNavigator();

export const AuthorizationScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.lightBlue,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarPressColor: 'transparent',
      }}>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Registration" component={RegistrationScreen} />
    </Tab.Navigator>
  );
};
