import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDeskScreen} from '~screens';
import {Header} from '~components/ui';
import Plus from '../assets/images/Plus.svg';
import SignOut from '../assets/images/SignOut.svg';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDesk"
        component={MyDeskScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header
              buttonLeft={<Plus />}
              buttonRight={<SignOut width={24} height={24} />}
              title="My Desk"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
