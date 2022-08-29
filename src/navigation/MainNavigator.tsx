import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDeskScreen} from '~screens';
import {Header} from '~components/ui';
import {PlusIcon, SignOut} from '~components/icons';
import {COLORS} from '~assets';

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
              buttonLeft={<PlusIcon />}
              buttonRight={
                <SignOut width={24} height={24} fill={COLORS.lightBlue} />
              }
              title="My Desk"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
