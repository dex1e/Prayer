import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {MainStackParamList} from '~navigation/MainNavigator';
import {ScreenName} from '~types';

type PrayerScreenProps = NativeStackScreenProps<
  MainStackParamList,
  ScreenName.PRAYER
>;

export const PrayerScreen = ({route}: PrayerScreenProps) => {
  return (
    <View>
      <Text>{route?.params?.prayerId}</Text>
    </View>
  );
};
