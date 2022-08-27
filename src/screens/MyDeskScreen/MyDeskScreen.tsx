import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';
import Plus from '../../assets/images/Plus.svg';

export const MyDeskScreen = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>My Desk</Text>

        <View style={styles.icon}>
          <Plus />
        </View>
      </View>

      <View />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginBottom: 15,
  },

  title: {
    fontFamily: 'SF UI Text',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
    textAlign: 'center',
    paddingVertical: 22,
  },

  icon: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
});
