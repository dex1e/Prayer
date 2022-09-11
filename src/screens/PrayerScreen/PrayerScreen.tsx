import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useMemo, useState} from 'react';

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {
  AddCommentItem,
  CommentItem,
  ModalPrayerSettings,
  PrayerDescription,
  PrayerMembers,
} from '~components';
import {HeaderPrayer} from '~components/HeaderPrayer';
import {LeftArrowIcon, Line, SettingsIcon} from '~components/icons';

import {MainStackParamList} from '~navigation/MainNavigator';
import {getComments} from '~store/features/comments';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, ScreenName} from '~types';

type PrayerScreenProps = NativeStackScreenProps<
  MainStackParamList,
  ScreenName.PRAYER
>;

export const PrayerScreen = ({
  navigation,
  navigation: {goBack},
  route,
}: PrayerScreenProps) => {
  const prayers = useAppSelector(state => state.prayersData.prayers);
  const comments = useAppSelector(state => state.commentsData.comments);
  const getCommentsFetchStatus = useAppSelector(
    state => state.commentsData.getCommentsFetchStatus,
  );

  const dispatch = useAppDispatch();

  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  const handleSettingsModalVisible = () => {
    setIsSettingsModalVisible(true);
  };
  const handleCloseSettingsModalVisible = () => {
    setIsSettingsModalVisible(false);
  };

  const currentPrayerId = route?.params?.prayerId;
  const currentPrayer = prayers.find(prayer => currentPrayerId === prayer?.id);

  const filtredComments = useMemo(() => {
    return comments.filter(comment => comment?.prayerId === currentPrayer?.id);
  }, [comments, currentPrayer?.id]);

  const isLoadingGetComments = getCommentsFetchStatus === FetchStatus.PENDING;

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (isLoadingGetComments) {
    return (
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={COLORS.primary}
      />
    );
  }

  return (
    <View style={styles.container}>
      <HeaderPrayer
        title={currentPrayer?.title}
        buttonLeft={<LeftArrowIcon fill={COLORS.white} />}
        buttonRight={<SettingsIcon fill={COLORS.white} />}
        onPressButtonLeft={() => goBack()}
        onPressButtonRight={handleSettingsModalVisible}
      />

      <ScrollView style={styles.body}>
        <ModalPrayerSettings
          visible={isSettingsModalVisible}
          prayer={currentPrayer}
          onClose={handleCloseSettingsModalVisible}
          onNavigateToMyPrayers={() =>
            navigation.navigate(ScreenName.MYPRAYERS)
          }
        />

        <View style={styles.lastPrayed}>
          <View style={styles.lineIcon}>
            <Line height={24} />
          </View>

          <Text style={styles.lastPrayedText}>Last prayed 8 min ago</Text>
        </View>

        <PrayerDescription />
        <PrayerMembers />
        <>
          <Text style={styles.commentsTitle}>Comments</Text>
          {filtredComments.length ? (
            <View style={styles.commentsContainer}>
              {filtredComments.map(comment => {
                return <CommentItem key={comment.id} comment={comment} />;
              })}
            </View>
          ) : (
            <Text style={styles.emptyComments}>NO COMMENTS</Text>
          )}
        </>
      </ScrollView>

      <AddCommentItem prayerId={currentPrayer?.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    width: '100%',
    backgroundColor: COLORS.white,
  },

  lastPrayed: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },

  lineIcon: {
    marginRight: 10,
  },

  lastPrayedText: {
    color: COLORS.primary,
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
  },

  commentsTitle: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.lightBlue,
    textTransform: 'uppercase',
    paddingBottom: 15,
    paddingLeft: 15,
  },

  commentsContainer: {
    paddingBottom: 15,
  },

  emptyComments: {
    alignSelf: 'center',
  },

  loading: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
