import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {COLORS} from '~assets';
import {ModalSettings} from '~components';
import {SettingsIcon, SignOut} from '~components/icons';
import {Header} from '~components/ui';
import {MainStackParamList} from '~navigation/MainNavigator';
import {signOutUser} from '~store/features/auth';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {ScreenName} from '~types';
import {MyPrayersScreen} from './MyPrayersScreen';
import {SubscribedScreen} from './SubscribedScreen';

type ColumnScreenProps = NativeStackScreenProps<
  MainStackParamList,
  ScreenName.COLUMN
>;

const Tab = createMaterialTopTabNavigator();

export const ColumnScreen = ({route}: ColumnScreenProps) => {
  const columns = useAppSelector(state => state.columnsData.columns);
  const dispatch = useAppDispatch();
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  const currentColumnId = route?.params?.columnId;
  const currentColumn = columns.find(column => currentColumnId === column?.id);

  const handleSettingsModalVisible = () => {
    setIsSettingsModalVisible(true);
  };

  const handleCloseSettingsModalVisible = () => {
    setIsSettingsModalVisible(false);
  };

  const handleSignOut = () => dispatch(signOutUser());

  return (
    <>
      <Header
        buttonLeft={<SettingsIcon width={20} height={20} />}
        buttonRight={<SignOut width={24} height={24} fill={COLORS.lightBlue} />}
        title={currentColumn?.title}
        onPressButtonRight={handleSignOut}
        onPressButtonLeft={handleSettingsModalVisible}
      />

      <ModalSettings
        visible={isSettingsModalVisible}
        column={currentColumn}
        onRequestClose={handleCloseSettingsModalVisible}
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
    </>
  );
};
