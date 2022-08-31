import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputWithIcon} from '~components/ui';

export const MyPrayersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputItem}>
        <InputWithIcon placeholder="Add a prayer..." />
      </View>

      <View>
        <Text>sds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  inputItem: {
    paddingBottom: 15,
  },
});
