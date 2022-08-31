import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDeskScreen} from '~screens';
import {Header} from '~components/ui';
import {PlusIcon, SignOut} from '~components/icons';
import {COLORS} from '~assets';
import {useAppDispatch} from '~store/hooks';
import {signOutUser} from '~store/features/auth';
import {useState} from 'react';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const dispatch = useAppDispatch();
  const [isAddColumnModalVisible, setIsAddColumnModalVisible] = useState(false);

  const handleSignOut = () => dispatch(signOutUser());

  const handleAddColumnModalVisible = () => {
    setIsAddColumnModalVisible(true);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDesk"
        children={() => (
          <MyDeskScreen
            isAddColumnModalVisible={isAddColumnModalVisible}
            setIsAddColumnModalVisible={setIsAddColumnModalVisible}
          />
        )}
        options={{
          headerShown: true,
          header: () => (
            <Header
              buttonLeft={<PlusIcon />}
              buttonRight={
                <SignOut width={24} height={24} fill={COLORS.lightBlue} />
              }
              title="My Desk"
              onPressButtonRight={handleSignOut}
              onPressButtonLeft={handleAddColumnModalVisible}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
