import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {COLORS} from '~assets';
import {MyPrayersScreen} from './MyPrayersScreen';
import {SubscribedScreen} from './SubscribedScreen';

const Tab = createMaterialTopTabNavigator();

export const PrayersScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.lightBlue,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarPressColor: 'transparent',
      }}>
      <Tab.Screen name="My Prayers" component={MyPrayersScreen} />
      <Tab.Screen name="Subscribed" component={SubscribedScreen} />
    </Tab.Navigator>
  );
};
