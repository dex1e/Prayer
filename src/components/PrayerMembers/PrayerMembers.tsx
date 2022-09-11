import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {PlusIcon} from '~components/icons';

export const PrayerMembers = () => {
  return (
    <View style={styles.members}>
      <Text style={styles.membersTitle}>Members</Text>
      <View style={styles.memberItem}>
        <Image
          style={styles.memberIcon}
          source={require('../../assets/images/member1.png')}
        />
        <Image
          style={styles.memberIcon}
          source={require('../../assets/images/member2.png')}
        />
        <View style={styles.buttonAddMember}>
          <PlusIcon fill={COLORS.white} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  members: {
    paddingHorizontal: 15,
    paddingBottom: 28,
  },

  membersTitle: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.lightBlue,
    textTransform: 'uppercase',
    paddingBottom: 13,
  },

  memberItem: {
    flexDirection: 'row',
  },

  memberIcon: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    marginRight: 6,
  },

  buttonAddMember: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
