import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDeskScreen, PrayersScreen} from '~screens';
import {Header} from '~components/ui';
import {PlusIcon, SettingsIcon, SignOut} from '~components/icons';
import {COLORS} from '~assets';
import {useAppDispatch} from '~store/hooks';
import {signOutUser} from '~store/features/auth';
import {useState} from 'react';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const dispatch = useAppDispatch();
  const [isAddColumnModalVisible, setIsAddColumnModalVisible] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  const handleSignOut = () => dispatch(signOutUser());

  const handleAddColumnModalVisible = () => {
    setIsAddColumnModalVisible(true);
  };

  const handleCloseAddColumnModal = () => {
    setIsAddColumnModalVisible(false);
  };

  const handleSettingsModalVisible = () => {
    setIsSettingsModalVisible(true);
  };

  const handleCloseSettingsModalVisible = () => {
    setIsSettingsModalVisible(false);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDesk"
        children={() => (
          <MyDeskScreen
            isAddColumnModalVisible={isAddColumnModalVisible}
            onCloseAddColumnModal={handleCloseAddColumnModal}
          />
        )}
        options={{
          headerShown: true,
          header: () => (
            <Header
              title="My Desk"
              isDividerActive
              buttonLeft={<PlusIcon />}
              buttonRight={
                <SignOut width={24} height={24} fill={COLORS.lightBlue} />
              }
              onPressButtonRight={handleSignOut}
              onPressButtonLeft={handleAddColumnModalVisible}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Prayers"
        children={() => (
          <PrayersScreen
            isSettingsModalVisible={isSettingsModalVisible}
            onCloseSettingsModalVisible={handleCloseSettingsModalVisible}
          />
        )}
        options={{
          headerShown: true,
          header: ({route}: any) => (
            <Header
              buttonLeft={<SettingsIcon width={20} height={20} />}
              buttonRight={
                <SignOut width={24} height={24} fill={COLORS.lightBlue} />
              }
              title={route?.params?.headerTitle}
              onPressButtonRight={handleSignOut}
              onPressButtonLeft={handleSettingsModalVisible}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
