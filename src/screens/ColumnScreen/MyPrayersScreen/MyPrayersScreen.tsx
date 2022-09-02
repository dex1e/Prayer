import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';
import {InputWithIcon} from '~components/ui';

interface MyPrayersScreenProps {}

export const MyPrayersScreen: FC<MyPrayersScreenProps> = ({}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputItem}>
        <InputWithIcon placeholder="Add a prayer..." />
      </View>

      <View>
        <Text>sds</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.white,
  },

  inputItem: {
    paddingBottom: 15,
  },
});
