import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {CloseIcon} from '~components/icons';
import {ButtonUI, Header, Input, ModalUi} from '~components/ui';
import {updateColumn} from '~store/features/columns';
import {useAppDispatch} from '~store/hooks';
import {IColumn} from '~types';

interface ModalSettingsProps {
  visible: boolean;
  column?: IColumn;
  onRequestClose: () => void;
}

interface ModalSettingsValues {
  title: string;
  description: string;
}

export const ModalSettings: FC<ModalSettingsProps> = ({
  visible,
  onRequestClose,
  column,
}) => {
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

  const onSubmit = ({title, description}: ModalSettingsValues) => {
    const id = column?.id;
    console.log(id, title, description);

    dispatch(updateColumn({id, title, description}));
    onRequestClose();
  };

  return (
    <ModalUi visible={visible} onRequestClose={onRequestClose}>
      <Header
        title="Settings"
        isDividerActive
        buttonRight={<CloseIcon fill={COLORS.lightBlue} />}
        onPressButtonRight={onRequestClose}
      />

      <View style={styles.container}>
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
          title="Update column"
          // isLoading={isLoading}
          onPress={handleSubmit(onSubmit)}
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

  inputItem: {
    width: '100%',
    paddingBottom: 20,
  },

  errorText: {color: COLORS.red},
});
