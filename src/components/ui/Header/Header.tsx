import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

interface HeaderProps {
  title: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
  onPressButtonRight?: () => void;
  onPressButtonLeft?: any;
}

export const Header: FC<HeaderProps> = ({
  title,
  buttonLeft,
  buttonRight,
  onPressButtonRight,
  onPressButtonLeft,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLeft} onPress={onPressButtonLeft}>
        {buttonLeft}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.buttonRight} onPress={onPressButtonRight}>
        {buttonRight}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 22,
    paddingBottom: 22,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },

  buttonLeft: {
    marginTop: 2,
    marginLeft: 15,
  },
  buttonRight: {
    marginRight: 15,
  },

  title: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
  },
});
