import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColumnScreen, MyDeskScreen, PrayerScreen} from '~screens';
import {ScreenName} from '~types';

export type MainStackParamList = {
  Column: {columnId: number};
  MyDesk: undefined;
  MyPrayers: undefined;
  Prayer: {prayerId: number};
  Subscribed: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.MY_DESK}
        component={MyDeskScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ScreenName.COLUMN}
        component={ColumnScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ScreenName.PRAYER}
        component={PrayerScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
