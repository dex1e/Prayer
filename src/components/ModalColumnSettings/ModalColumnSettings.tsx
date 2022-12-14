import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {CloseIcon} from '~components/icons';
import {ButtonUI, Header, Input, ModalUi} from '~components/ui';
import {deleteColumn, updateColumn} from '~store/features/columns';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, IColumn} from '~types';

interface ModalColumnSettingsProps {
  visible: boolean;
  column?: IColumn;
  onClose: () => void;
  onNavigateToMyDesk: () => void;
}

interface ModalColumnSettingsValues {
  title: string;
  description: string;
}

export const ModalColumnSettings: FC<ModalColumnSettingsProps> = ({
  visible,
  onClose,
  column,
  onNavigateToMyDesk,
}) => {
  const updateColumnFetchStatus = useAppSelector(
    state => state.columnsData.updateColumnFetchStatus,
  );
  const deleteColumnFetchStatus = useAppSelector(
    state => state.columnsData.deleteColumnFetchStatus,
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

  const isLoadingUpdate = updateColumnFetchStatus === FetchStatus.PENDING;
  const isLoadingDelete = deleteColumnFetchStatus === FetchStatus.PENDING;

  const onSubmit = ({title, description}: ModalColumnSettingsValues) => {
    const id = column?.id;

    dispatch(updateColumn({id, title, description}));
    onClose();
  };

  const handleDeleteColumn = () => {
    const id = column?.id;

    dispatch(deleteColumn(id));
    onClose();
    onNavigateToMyDesk();
  };

  return (
    <ModalUi visible={visible} onClose={onClose}>
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
                defaultValue={column?.title}
                placeholder="Title"
              />
            )}
            name="title"
          />

          {errors.title && (
            <Text style={styles.errorText}>This field is required.</Text>
          )}
        </View>

        <Text style={styles.inputTitle}>Description</Text>

        <View style={styles.inputItem}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                defaultValue={column?.description}
                placeholder="Description"
              />
            )}
            name="description"
          />

          {errors.description && (
            <Text style={styles.errorText}>This field is required.</Text>
          )}
        </View>

        <View style={styles.buttonUpdate}>
          <ButtonUI
            title="Update column"
            isLoading={isLoadingUpdate}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <ButtonUI
          title="Delete column"
          isRed
          onPress={handleDeleteColumn}
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
