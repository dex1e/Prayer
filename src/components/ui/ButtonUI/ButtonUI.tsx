import React from 'react';
import {FC} from 'react';
import {Button, ButtonProps, StyleSheet, View} from 'react-native';

interface ButtonUIProps extends ButtonProps {
  title: string;
}

export const ButtonUI: FC<ButtonUIProps> = ({title, ...props}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button {...props} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
});
