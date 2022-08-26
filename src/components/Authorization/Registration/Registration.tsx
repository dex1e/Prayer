import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonUI, Input} from '~components/ui';
import {useForm, Controller} from 'react-hook-form';
import {COLORS} from '~assets';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {registerUser} from '~store/features/auth';
// import {FetchStatus} from '~types';

export const Registration = () => {
  const {user} = useAppSelector(state => state.auth);

  // const isLoading = registrationFetchStatus === FetchStatus.PENDING;

  // const isError = registrationFetchStatus === FetchStatus.REJECTED;

  const dispatch = useAppDispatch();

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

  const onSubmit = (data: any) => {
    dispatch(registerUser(data));
  };

  console.log(user, 'USER REGISTRATION');

  return (
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

      <ButtonUI title="Registration" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  inputItem: {
    width: '100%',
    paddingBottom: 20,
  },

  errorText: {
    color: COLORS.red,
  },
});
