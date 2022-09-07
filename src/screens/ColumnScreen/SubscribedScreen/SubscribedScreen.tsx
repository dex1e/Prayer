import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {COLORS} from '~assets';

export const SubscribedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>SubscribedScreen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.white,
  },
});
