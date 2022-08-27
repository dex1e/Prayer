import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDeskScreen} from '~screens';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDesk"
        component={MyDeskScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
