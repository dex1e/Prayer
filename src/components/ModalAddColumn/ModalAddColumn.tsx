import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {CloseIcon} from '~components/icons';
import {ButtonUI, Header, Input, ModalUi} from '~components/ui';
import {addColumn} from '~store/features/columns';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

interface ModalAddColumnProps {
  visible: boolean;
  onRequestClose: () => void;
}

interface ModalAddColumnValues {
  title: string;
  description: string;
}

export const ModalAddColumn: FC<ModalAddColumnProps> = ({
  visible,
  onRequestClose,
}) => {
  const addColumnFetchStatus = useAppSelector(
    state => state.columns.addColumnFetchStatus,
  );
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const isLoading = addColumnFetchStatus === FetchStatus.PENDING;

  const addNewColumn = (data: ModalAddColumnValues) => {
    dispatch(addColumn(data));

    onRequestClose();
  };

  return (
    <ModalUi visible={visible} onRequestClose={onRequestClose}>
      <View>
        <Header
          title="Add new Column"
          isDividerActive
          buttonRight={<CloseIcon fill={COLORS.lightBlue} />}
          onPressButtonRight={onRequestClose}
        />
        <View style={styles.modal}>
          <View style={styles.inputItem}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Title"
                />
              )}
              name="title"
            />

            {errors.title && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
          </View>

          <View style={styles.inputItem}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Description"
                />
              )}
              name="description"
            />

            {errors.description && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
          </View>

          <ButtonUI
            title="Add"
            isLoading={isLoading}
            onPress={handleSubmit(addNewColumn)}
          />
        </View>
      </View>
    </ModalUi>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 15,
    fontFamily: FONT_FAMILY.primary,
  },

  inputItem: {
    width: '100%',
    paddingBottom: 20,
  },

  errorText: {color: COLORS.red},
});
