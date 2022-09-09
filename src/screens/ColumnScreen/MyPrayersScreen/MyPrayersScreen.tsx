import React, {FC, useEffect, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '~assets';
import {MyPrayerItem} from '~components';
import {ButtonUI, InputWithIcon} from '~components/ui';
import {
  addPrayer,
  deletePrayer,
  getPrayers,
  updatePrayer,
} from '~store/features/prayers';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

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
  const getPrayersFetchStatus = useAppSelector(
    state => state.prayersData.getPrayersFetchStatus,
  );
  const addPrayerFetchStatus = useAppSelector(
    state => state.prayersData.addPrayerFetchStatus,
  );
  const dispatch = useAppDispatch();

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const isLoadingAddPrayer = addPrayerFetchStatus === FetchStatus.PENDING;
  const isLoadingGetPrayers = getPrayersFetchStatus === FetchStatus.PENDING;

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

  function handleDeletePrayer(id: number) {
    dispatch(deletePrayer(id));
  }

  const handleCheckPrayer = (id: number, checked: boolean) => {
    dispatch(updatePrayer({id, checked}));
  };

  useEffect(() => {
    dispatch(getPrayers());
  }, [dispatch]);

  if (isLoadingGetPrayers) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

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
              isLoading={isLoadingAddPrayer}
              onPress={onSubmit}
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
                  key={prayer.id}
                  prayer={prayer}
                  onDeletePrayer={handleDeletePrayer}
                  onCheckPrayer={handleCheckPrayer}
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
