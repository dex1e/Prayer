import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SignOut} from '~components/icons';
import {AsyncStorageVariables} from '~types';

export const HomeScreen = () => {
  const signOut = AsyncStorage.removeItem(AsyncStorageVariables.USER);

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => signOut}>
        <SignOut />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
});
