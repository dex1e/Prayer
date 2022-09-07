import React, {FC} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {PlusIcon} from '~components/icons';

interface InputWithIconProps extends TextInputProps {
  placeholder: string;
  isLoading?: boolean;
  onPress?: () => void;
}

export const InputWithIcon: FC<InputWithIconProps> = ({
  placeholder,
  isLoading,
  onPress,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.buttonIcon} onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.lightBlue} />
        ) : (
          <PlusIcon width={24} height={24} fill={COLORS.lightBlue} />
        )}
      </TouchableOpacity>
      <TextInput {...props} style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
  },

  buttonIcon: {
    marginHorizontal: 14,
    marginVertical: 13,
  },

  input: {
    overflow: 'hidden',
    width: 293,
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    paddingRight: 14,
  },
});
