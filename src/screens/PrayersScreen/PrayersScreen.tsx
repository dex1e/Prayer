import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {COLORS} from '~assets';
import {MyPrayersScreen} from './MyPrayersScreen';
import {SubscribedScreen} from './SubscribedScreen';

interface PrayersScreenProps {
  isSettingsModalVisible: boolean;
  onCloseSettingsModalVisible: () => void;
}

const Tab = createMaterialTopTabNavigator();

export const PrayersScreen: FC<PrayersScreenProps> = ({
  isSettingsModalVisible,
  onCloseSettingsModalVisible,
}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.lightBlue,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarPressColor: 'transparent',
      }}>
      <Tab.Screen
        name="My Prayers"
        children={() => (
          <MyPrayersScreen
            isSettingsModalVisible={isSettingsModalVisible}
            onCloseSettingsModalVisible={onCloseSettingsModalVisible}
          />
        )}
      />
      <Tab.Screen name="Subscribed" component={SubscribedScreen} />
    </Tab.Navigator>
  );
};
