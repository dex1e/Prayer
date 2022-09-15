import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

export const PrayerDescription = () => {
  return (
    <View style={styles.description}>
      <View style={styles.leftColumn}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>July 25 2017</Text>
          <Text style={styles.dateAdded}>Date Added</Text>
          <Text style={styles.dateOpened}>Opened for 4 days</Text>
        </View>

        <View style={styles.prayedByMeContainer}>
          <Text style={styles.countPrayed}>63</Text>
          <Text style={styles.textPrayed}>Times Prayed by Me</Text>
        </View>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.prayedTotalContainer}>
          <Text style={styles.countPrayed}>123</Text>
          <Text style={styles.textPrayed}>Times Prayed Total</Text>
        </View>

        <View style={styles.prayedOthersContainer}>
          <Text style={styles.countPrayed}>60</Text>
          <Text style={styles.textPrayed}>Times Prayed By Others</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    marginBottom: 20,
  },

  leftColumn: {
    borderRightWidth: 1,
    borderColor: COLORS.gray,
    width: '50%',
  },

  dateContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    paddingTop: 32,
    paddingBottom: 11,
    paddingLeft: 15,
  },

  date: {
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.gold,
    fontSize: 22,
    lineHeight: 26,
    paddingBottom: 6,
  },

  dateAdded: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.primary,
  },

  dateOpened: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.lightBlue,
  },

  prayedByMeContainer: {
    paddingTop: 26,
    paddingBottom: 27,
    paddingLeft: 15,
  },

  countPrayed: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 32,
    lineHeight: 38,
    color: COLORS.gold,
  },

  textPrayed: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.primary,
  },

  rightColumn: {
    width: '50%',
  },

  prayedTotalContainer: {
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 12,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
  },

  prayedOthersContainer: {
    paddingTop: 26,
    paddingLeft: 15,
    paddingBottom: 26,
  },
});
