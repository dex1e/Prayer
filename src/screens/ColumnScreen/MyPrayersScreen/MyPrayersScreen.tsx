import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';
import {MyPrayerItem} from '~components';
import {ButtonUI, InputWithIcon} from '~components/ui';
import {MainStackParamList} from '~navigation/MainNavigator';

import {
  addPrayer,
  deletePrayer,
  getPrayers,
  updatePrayer,
} from '~store/features/prayers';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, ScreenName} from '~types';

type MyPrayersNavigationProps = StackNavigationProp<
  MainStackParamList,
  ScreenName.MYPRAYERS
>;

interface MyPrayersScreenProps {
  columnId?: number;
}

interface MyPrayersValues {
  title: string;
  description: string;
}

export const MyPrayersScreen: FC<MyPrayersScreenProps> = ({columnId}) => {
  const [isOpenedCheckedPrayers, setIsOpenedCheckedPrayers] = useState(false);
  const prayers = useAppSelector(state => state.prayersData.prayers);
  const getPrayerFetchStatus = useAppSelector(
    state => state.prayersData.getPrayersFetchStatus,
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MyPrayersNavigationProps>();

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const isLoading = getPrayerFetchStatus === FetchStatus.PENDING;

  const filtredPrayers = useMemo(() => {
    return prayers.filter(prayer => prayer?.columnId === columnId);
  }, [prayers, columnId]);

  const unCheckedPrayers = useMemo(() => {
    return filtredPrayers.filter(prayer => !prayer.checked);
  }, [filtredPrayers]);

  const checkedPrayers = useMemo(() => {
    return filtredPrayers.filter(prayer => prayer.checked);
  }, [filtredPrayers]);

  const addNewPrayer = ({title, description}: MyPrayersValues) => {
    const id = columnId;

    dispatch(addPrayer({title, description, id}));
  };

  const onSubmit = () => {
    handleSubmit(addNewPrayer)();
    reset();
  };

  const handleDeletePrayer = (id: number) => {
    dispatch(deletePrayer(id));
  };

  const handleCheckPrayer = (id: number, checked: boolean) => {
    dispatch(updatePrayer({id, checked}));
  };

  useEffect(() => {
    dispatch(getPrayers());
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputItem}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputWithIcon
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Add a prayer..."
              onPress={onSubmit}
              isLoading={isLoading}
            />
          )}
          name="title"
        />
      </View>
      {filtredPrayers.length ? (
        <>
          <View style={styles.prayerItem}>
            {unCheckedPrayers?.map(prayer => {
              return (
                <MyPrayerItem
                  key={prayer?.id}
                  prayer={prayer}
                  onDeletePrayer={handleDeletePrayer}
                  onCheckPrayer={handleCheckPrayer}
                  onNavigate={() =>
                    navigation.navigate({
                      name: ScreenName.PRAYER,
                      params: {prayerId: prayer?.id},
                    })
                  }
                />
              );
            })}
          </View>

          <View style={styles.button}>
            {checkedPrayers.length ? (
              <ButtonUI
                title={
                  isOpenedCheckedPrayers
                    ? 'Hide Answered Prayers'
                    : 'Show Answered Prayers'
                }
                onPress={() =>
                  setIsOpenedCheckedPrayers(prevState => !prevState)
                }
              />
            ) : null}
          </View>

          <View style={styles.prayerItem}>
            {isOpenedCheckedPrayers &&
              checkedPrayers.map(checkedPrayer => {
                return (
                  <MyPrayerItem
                    key={checkedPrayer?.id}
                    prayer={checkedPrayer}
                    onDeletePrayer={handleDeletePrayer}
                    onCheckPrayer={handleCheckPrayer}
                    onNavigate={() =>
                      navigation.navigate({
                        name: ScreenName.PRAYER,
                        params: {prayerId: checkedPrayer?.id},
                      })
                    }
                  />
                );
              })}
          </View>
        </>
      ) : (
        <Text style={styles.emptyPrayers}>NO PRAYERS</Text>
      )}
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

  prayerItem: {
    paddingBottom: 21,
  },

  button: {
    alignSelf: 'center',
  },

  errorText: {
    color: COLORS.red,
  },

  emptyPrayers: {
    alignSelf: 'center',
  },
});
