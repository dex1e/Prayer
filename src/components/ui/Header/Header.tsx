import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

interface HeaderProps {
  title?: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
  isDividerActive?: boolean;
  onPressButtonRight?: () => void;
  onPressButtonLeft?: () => void;
}

export const Header: FC<HeaderProps> = ({
  title,
  buttonLeft,
  buttonRight,
  onPressButtonRight,
  onPressButtonLeft,
  isDividerActive,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLeft} onPress={onPressButtonLeft}>
        {buttonLeft}
      </TouchableOpacity>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <TouchableOpacity style={styles.buttonRight} onPress={onPressButtonRight}>
        {buttonRight}
      </TouchableOpacity>

      {isDividerActive && <View style={styles.divider} />}
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
  },

  buttonLeft: {
    marginTop: 2,
    marginLeft: 15,
    marginRight: 5,
  },

  buttonRight: {
    marginRight: 20,
  },

  title: {
    width: '83%',
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
    paddingRight: 5,
    textAlign: 'center',
  },

  divider: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
});
