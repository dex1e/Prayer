import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColumnScreen, MyDeskScreen} from '~screens';
import {ScreenName} from '~types';

export type MainStackParamList = {
  Column: {columnId: number};
  MyDesk: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.MYDESK}
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
    </Stack.Navigator>
  );
};
