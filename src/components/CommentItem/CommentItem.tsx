import dayjs from 'dayjs';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {UserIcon} from '~components/icons';
import {ModalCommentSettings} from '~components';
import {useAppSelector} from '~store/hooks';
import {IComment} from '~types';

interface CommentItemProps {
  comment: IComment;
}

export const CommentItem: FC<CommentItemProps> = ({comment}) => {
  const [isSettingsCommentModalVisible, setIsSettingsCommentModalVisible] =
    useState(false);

  const username = useAppSelector(state => state.auth.user.name);
  const differenceInDays = dayjs().diff(dayjs(comment?.created), 'day');

  const createdDate = () => {
    if (differenceInDays === 0) {
      return 'Today';
    } else if (differenceInDays > 0 && differenceInDays < 4) {
      return `${differenceInDays} days ago`;
    } else {
      return dayjs(comment?.created).format('DD-MM-YYYY');
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.commentItem}
        onPress={() => setIsSettingsCommentModalVisible(true)}>
        <View style={styles.commentAvatar}>
          <UserIcon fill={COLORS.lightBlue} />
        </View>

        <View style={styles.commentItemText}>
          <View style={styles.topCommentText}>
            <Text style={styles.commentUserName}>{username}</Text>
            <Text style={styles.daysAgo}>{createdDate()}</Text>
          </View>

          <Text style={styles.commentText}>{comment?.body}</Text>
        </View>
      </TouchableOpacity>

      <ModalCommentSettings
        comment={comment}
        visible={isSettingsCommentModalVisible}
        onClose={() => setIsSettingsCommentModalVisible(false)}
      />
    </>
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
    width: '100%',
  },

  topCommentText: {
    flexDirection: 'row',
  },

  commentUserName: {
    fontFamily: FONT_FAMILY.primary,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
    paddingRight: 6,
  },

  daysAgo: {
    alignSelf: 'flex-start',
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.secondaryGray,
  },

  commentText: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
  },
});
