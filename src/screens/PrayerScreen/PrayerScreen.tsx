import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {COLORS} from '~assets';
import {ModalPrayerSettings} from '~components';
import {HeaderPrayer} from '~components/HeaderPrayer';
import {LeftArrowIcon, SettingsIcon} from '~components/icons';

import {MainStackParamList} from '~navigation/MainNavigator';
import {useAppSelector} from '~store/hooks';
import {ScreenName} from '~types';

type PrayerScreenProps = NativeStackScreenProps<
  MainStackParamList,
  ScreenName.PRAYER
>;

export const PrayerScreen = ({
  navigation,
  navigation: {goBack},
  route,
}: PrayerScreenProps) => {
  const prayers = useAppSelector(state => state.prayersData.prayers);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  const handleSettingsModalVisible = () => {
    setIsSettingsModalVisible(true);
  };

  const handleCloseSettingsModalVisible = () => {
    setIsSettingsModalVisible(false);
  };

  const currentPrayerId = route?.params?.prayerId;

  const currentPrayer = prayers.find(prayer => currentPrayerId === prayer?.id);
  return (
    <>
      <HeaderPrayer
        title={currentPrayer?.title}
        buttonLeft={<LeftArrowIcon fill={COLORS.white} />}
        buttonRight={<SettingsIcon fill={COLORS.white} />}
        onPressButtonLeft={() => goBack()}
        onPressButtonRight={handleSettingsModalVisible}
      />

      <ScrollView>
        <ModalPrayerSettings
          visible={isSettingsModalVisible}
          prayer={currentPrayer}
          onClose={handleCloseSettingsModalVisible}
          onNavigateToMyPrayers={() =>
            navigation.navigate(ScreenName.MYPRAYERS)
          }
        />
        <Text>addaad</Text>
      </ScrollView>
    </>
  );
};
