import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizationScreen} from '~screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Authorization" component={AuthorizationScreen} />
    </Stack.Navigator>
  );
};
