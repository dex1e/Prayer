import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonUI, Input} from '~components/ui';
import {useForm, Controller} from 'react-hook-form';
import {COLORS} from '~assets';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {registerUser} from '~store/features/auth';
import {FetchStatus} from '~types';

interface RegistrationFormValues {
  email: string;
  name: string;
  password: string;
}

export const RegistrationScreen = () => {
  const registrationFetchStatus = useAppSelector(
    state => state.auth.registrationFetchStatus,
  );
  const dispatch = useAppDispatch();

  const isLoading = registrationFetchStatus === FetchStatus.PENDING;

  const isError = registrationFetchStatus === FetchStatus.REJECTED;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    dispatch(registerUser(data));
  };

  return (
    <ScrollView style={styles.container}>
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
              placeholder="Email"
            />
          )}
          name="email"
        />

        {errors.email && (
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
              placeholder="Name"
            />
          )}
          name="name"
        />

        {errors.name && (
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
              secureTextEntry={true}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Password"
            />
          )}
          name="password"
        />

        {errors.password && (
          <Text style={styles.errorText}>This field is required.</Text>
        )}
      </View>

      <ButtonUI
        title="Registration"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />

      {isError && <Text>Error with submit form</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },

  inputItem: {
    width: '100%',
    paddingBottom: 20,
  },

  errorText: {
    color: COLORS.red,
  },
});
