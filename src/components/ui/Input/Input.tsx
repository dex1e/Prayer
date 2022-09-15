import React from 'react';
import {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

interface InputProps extends TextInputProps {
  placeholder: string;
}

export const Input: FC<InputProps> = ({placeholder, ...props}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondaryGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
    paddingHorizontal: 15,
  },

  input: {
    width: '100%',
    color: COLORS.primary,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.primary,
  },
});
