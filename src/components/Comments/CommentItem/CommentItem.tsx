import dayjs from 'dayjs';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {UserIcon} from '~components/icons';
import {IComment} from '~types';

interface CommentItemProps {
  comment: IComment;
}

export const CommentItem: FC<CommentItemProps> = ({comment}) => {
  const differenceInDays = dayjs().diff(dayjs(comment?.created), 'day');

  const createdDate = () => {
    if (differenceInDays === 0) {
      return 'Today';
    } else if (differenceInDays < 4 && differenceInDays > 0) {
      return `${differenceInDays} days ago`;
    } else {
      return dayjs(comment?.created).format('DD-MM-YYYY');
    }
  };

  return (
    <View style={styles.commentItem}>
      <View style={styles.commentAvatar}>
        <UserIcon fill={COLORS.lightBlue} />
      </View>

      <View style={styles.commentItemText}>
        <Text style={styles.commentUserName}>Username</Text>
        <Text style={styles.commentText}>{comment?.body}</Text>
      </View>

      <Text style={styles.daysAgo}>{createdDate()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    padding: 15,
  },

  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  commentItemText: {
    paddingRight: 6,
  },

  commentUserName: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
  },

  commentText: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
  },

  daysAgo: {
    alignSelf: 'flex-start',
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.secondaryGray,
  },
});
