import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '~assets';
import {CheckboxIcon} from '~components/icons';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

export const CheckBox: FC<CheckboxProps> = ({checked, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.checkbox} onPress={onPress}>
        {checked && <CheckboxIcon width={12} height={11} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.primary,
    padding: 5,
    marginRight: 20,
  },
});
