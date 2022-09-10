import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {CloseIcon} from '~components/icons';
import {ButtonUI, Header, Input, ModalUi} from '~components/ui';
import {deletePrayer} from '~store/features/prayers';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, IPrayer} from '~types';

interface ModalPrayerSettingsProps {
  visible: boolean;
  prayer?: IPrayer;
  onClose: () => void;
  onNavigationToMyPrayers: () => void;
}

export const ModalPrayerSettings: FC<ModalPrayerSettingsProps> = ({
  visible,
  prayer,
  onClose,
  onNavigationToMyPrayers,
}) => {
  const updatePrayerFetchStatus = useAppSelector(
    state => state.prayersData.updatePrayerFetchStatus,
  );
  const deletePrayerFetchStatus = useAppSelector(
    state => state.prayersData.deletePrayerFetchStatus,
  );
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
    },
  });
  const isLoadingUpdate = updatePrayerFetchStatus === FetchStatus.PENDING;
  const isLoadingDelete = deletePrayerFetchStatus === FetchStatus.PENDING;

  const handleDeletePrayer = () => {
    const id = prayer?.id;

    dispatch(deletePrayer(id));
    onClose();
    onNavigationToMyPrayers();
  };

  return (
    <ModalUi visible={visible} onRequestClose={onClose}>
      <Header
        title="Settings"
        isDividerActive
        buttonRight={<CloseIcon fill={COLORS.lightBlue} />}
        onPressButtonRight={onClose}
      />

      <View style={styles.container}>
        <Text style={styles.inputTitle}>Title</Text>

        <View style={styles.inputItem}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                defaultValue={prayer?.title}
                placeholder="Title"
              />
            )}
            name="title"
          />

          {errors.title && (
            <Text style={styles.errorText}>This field is required.</Text>
          )}
        </View>

        <View style={styles.buttonUpdate}>
          <ButtonUI
            title="Update prayer"
            isLoading={isLoadingUpdate}
            // onPress={handleSubmit(onSubmit)}
          />
        </View>

        <ButtonUI
          title="Delete prayer"
          isRed
          onPress={handleDeletePrayer}
          isLoading={isLoadingDelete}
        />
      </View>
    </ModalUi>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    fontFamily: FONT_FAMILY.primary,
  },

  inputTitle: {
    fontSize: 17,
    marginBottom: 5,
  },

  inputItem: {
    width: '100%',
    paddingBottom: 20,
  },

  errorText: {color: COLORS.red},

  buttonUpdate: {
    marginBottom: 10,
  },
});
