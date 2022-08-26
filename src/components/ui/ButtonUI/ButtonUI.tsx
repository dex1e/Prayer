import React from 'react';
import {FC} from 'react';
import {ButtonProps, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '~assets';

interface ButtonUIProps extends ButtonProps {
  title: string;
}

export const ButtonUI: FC<ButtonUIProps> = ({title, ...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 15,
    fontFamily: 'SF UI Text',
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
