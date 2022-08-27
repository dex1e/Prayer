import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';
import {ButtonUI, Input} from '~components/ui';
import {loginUser} from '~store/features/auth';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

export const LoginScreen = () => {
  const loginFetchStatus = useAppSelector(state => state.auth.loginFetchStatus);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = loginFetchStatus === FetchStatus.PENDING;

  const isError = loginFetchStatus === FetchStatus.REJECTED;

  const onSubmit = (data: any) => {
    dispatch(loginUser(data));
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
        title="Login"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />

      {isError && <Text style={styles.errorText}>Error with submit form</Text>}
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
