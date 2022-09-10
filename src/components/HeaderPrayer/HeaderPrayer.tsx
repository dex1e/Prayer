import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

interface HeaderPrayerProps {
  title?: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
  onPressButtonRight?: () => void;
  onPressButtonLeft?: () => void;
}

export const HeaderPrayer: FC<HeaderPrayerProps> = ({
  title,
  buttonLeft,
  buttonRight,
  onPressButtonRight,
  onPressButtonLeft,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonIcons}>
        <TouchableOpacity onPress={onPressButtonLeft}>
          {buttonLeft}
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressButtonRight}>
          {buttonRight}
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: COLORS.gold,
  },

  buttonIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  title: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 27,
    color: COLORS.white,
  },

  divider: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
});
