import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SF UI Text',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.black,
    textAlign: 'center',
  },
});
