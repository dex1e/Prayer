import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

interface InputWithoutBorderProps extends TextInputProps {
  placeholder: string;
}

export const InputWithoutBorder: FC<InputWithoutBorderProps> = ({
  placeholder,
  ...props
}) => {
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
    // paddingHorizontal: 15,
  },

  input: {
    width: '100%',
    color: COLORS.primary,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.primary,
  },
});
