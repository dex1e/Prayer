import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {COLORS} from '~assets';
import {ModalSettings} from '~components';
import {SettingsIcon, SignOut} from '~components/icons';
import {Header} from '~components/ui';
import {IColumn} from '~types';
import {MyPrayersScreen} from './MyPrayersScreen';
import {SubscribedScreen} from './SubscribedScreen';

interface PrayersScreenProps {
  isSettingsModalVisible: boolean;
  column: IColumn;
  onPressButtonRight?: () => void;
  onPressButtonLeft?: () => void;
  onCloseSettingsModalVisible: () => void;
}

const Tab = createMaterialTopTabNavigator();

export const PrayersScreen: FC<PrayersScreenProps> = ({
  isSettingsModalVisible,
  column,
  onCloseSettingsModalVisible,
  onPressButtonRight,
  onPressButtonLeft,
}) => {
  return (
    <>
      <Header
        buttonLeft={<SettingsIcon width={20} height={20} />}
        buttonRight={<SignOut width={24} height={24} fill={COLORS.lightBlue} />}
        title={column.title}
        onPressButtonRight={onPressButtonRight}
        onPressButtonLeft={onPressButtonLeft}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.lightBlue,
          tabBarInactiveTintColor: COLORS.lightGray,
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen name="My Prayers" children={() => <MyPrayersScreen />} />
        <Tab.Screen name="Subscribed" component={SubscribedScreen} />
      </Tab.Navigator>
      <ModalSettings
        visible={isSettingsModalVisible}
        column={column}
        onRequestClose={onCloseSettingsModalVisible}
      />
    </>
  );
};
