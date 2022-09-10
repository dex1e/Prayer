import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {COLORS, FONT_FAMILY} from '~assets';
import {Line, UserIcon} from '~components/icons';
import {CheckBox} from '~components/ui';
import {IPrayer} from '~types';

const PRAYER_ITEM_HEIGHT = 68;
const {width: screenWidth} = Dimensions.get('window');
const TRANSLATE_X_DELETE = -screenWidth * 0.25;

interface MyPrayerItemProps {
  prayer: IPrayer;
  onDeletePrayer: (id: number) => void;
  onCheckPrayer: (id: number, checked: boolean) => void;
  onNavigationToPrayer: () => void;
}

export const MyPrayerItem: FC<MyPrayerItemProps> = ({
  prayer,
  onDeletePrayer,
  onCheckPrayer,
  onNavigationToPrayer,
}) => {
  const translateX = useSharedValue(0);
  const prayerHeight = useSharedValue(PRAYER_ITEM_HEIGHT);
  const paddingVertical = useSharedValue(23);
  const opacityHidden = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_DELETE;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-screenWidth);
        prayerHeight.value = withTiming(0);
        paddingVertical.value = withTiming(0);
        opacityHidden.value = withTiming(0, undefined, isFinished => {
          if (isFinished) {
            runOnJS(onDeletePrayer)(prayer.id);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: prayerHeight.value,
      paddingVertical: paddingVertical.value,
      opacity: opacityHidden.value,
    };
  });

  const animatedDeleteStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < TRANSLATE_X_DELETE ? 1 : 0);

    return {opacity};
  });

  const animatedPrayer = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <GestureHandlerRootView>
      <Animated.View style={[styles.container, animatedContainerStyle]}>
        <Animated.View style={[styles.deleteContainer, animatedDeleteStyle]}>
          <Text style={styles.textDelete}>Delete</Text>
        </Animated.View>

        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={[styles.prayer, animatedPrayer]}>
            <TouchableOpacity
              style={styles.prayer}
              onPress={onNavigationToPrayer}>
              <View style={styles.line}>
                <Line height={24} />
              </View>

              <CheckBox
                checked={prayer?.checked}
                onPress={() => onCheckPrayer(prayer.id, !prayer.checked)}
              />

              <Text
                style={prayer.checked ? styles.checkedTitle : styles.title}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {prayer?.title}
              </Text>

              <View style={styles.userIcon}>
                <UserIcon width={24} height={24} fill={COLORS.lightBlue} />
              </View>

              <Text style={styles.countComments}>
                {prayer?.commentsIds?.length || 0}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    paddingVertical: 23,
  },

  prayer: {
    flexDirection: 'row',
    height: PRAYER_ITEM_HEIGHT,
    fontFamily: FONT_FAMILY.primary,
  },

  title: {
    fontSize: 17,
    lineHeight: 20,
    width: 255,
    overflow: 'hidden',
    marginRight: 5,
    color: COLORS.primary,
  },

  checkedTitle: {
    fontSize: 17,
    lineHeight: 20,
    width: 255,
    overflow: 'hidden',
    marginRight: 5,
    color: COLORS.primary,
    textDecorationLine: 'line-through',
  },

  line: {
    marginRight: 15,
  },

  userIcon: {
    marginRight: 5,
  },

  countComments: {
    fontSize: 14,
    lineHeiht: 14,
    color: COLORS.primary,
  },

  deleteContainer: {
    backgroundColor: COLORS.lightRed,
    height: PRAYER_ITEM_HEIGHT,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 25,
    position: 'absolute',
    right: 0,
  },

  textDelete: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.white,
  },
});
