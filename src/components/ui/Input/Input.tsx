import React from 'react';
import {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {COLORS} from '~assets';

interface InputProps extends TextInputProps {
  placeholder: string;
}

export const Input: FC<InputProps> = ({placeholder, ...props}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
    padding: 15,
  },

  input: {
    width: '100%',
    color: COLORS.secondaryGray,
    fontSize: 17,
    lineHeight: 20,
  },
});
