import React from 'react';
import {FC} from 'react';
import {
  ActivityIndicator,
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

interface ButtonUIProps extends ButtonProps {
  title: string;
  isRed?: boolean;
  isLoading?: boolean;
}

export const ButtonUI: FC<ButtonUIProps> = ({
  title,
  isLoading,
  isRed,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={isRed ? styles.redButton : styles.button}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 15,
    fontFamily: FONT_FAMILY.primary,
  },

  redButton: {
    width: '100%',
    backgroundColor: COLORS.lightRed,
    borderRadius: 15,
    fontFamily: FONT_FAMILY.primary,
  },

  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 14,
    paddingVertical: 8,
    paddingHorizontal: 23,
    textTransform: 'uppercase',
  },
});
