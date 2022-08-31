import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizationScreen} from '~screens';
import {Header} from '~components/ui';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Authorization"
        component={AuthorizationScreen}
        options={{
          headerTitle: props => <Header title="Authorization" {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};
