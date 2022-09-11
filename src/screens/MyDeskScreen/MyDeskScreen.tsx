import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {ModalAddColumn, MyDeskItem} from '~components';
import {PlusIcon, SignOut} from '~components/icons';
import {Header} from '~components/ui';
import {MainStackParamList} from '~navigation/MainNavigator';
import {signOutUser} from '~store/features/auth';
import {getColumns} from '~store/features/columns';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, ScreenName} from '~types';

type MyDeskScreenProps = NativeStackScreenProps<
  MainStackParamList,
  ScreenName.MYDESK
>;

export const MyDeskScreen = ({navigation}: MyDeskScreenProps) => {
  const columns = useAppSelector(state => state.columnsData.columns);
  const getColumnsFetchStatus = useAppSelector(
    state => state.columnsData.getColumnsFetchStatus,
  );
  const [isAddColumnModalVisible, setIsAddColumnModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddColumnModalVisible = () => {
    setIsAddColumnModalVisible(true);
  };
  const handleCloseAddColumnModal = () => {
    setIsAddColumnModalVisible(false);
  };

  const handleSignOut = () => dispatch(signOutUser());

  const isLoading = getColumnsFetchStatus === FetchStatus.PENDING;

  useEffect(() => {
    dispatch(getColumns());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={COLORS.primary}
      />
    );
  }

  return (
    <>
      <Header
        title={ScreenName.MYDESK}
        isDividerActive
        buttonLeft={<PlusIcon />}
        buttonRight={<SignOut width={24} height={24} fill={COLORS.lightBlue} />}
        onPressButtonRight={handleSignOut}
        onPressButtonLeft={handleAddColumnModalVisible}
      />
      <ScrollView style={styles.container}>
        <ModalAddColumn
          visible={isAddColumnModalVisible}
          onRequestClose={handleCloseAddColumnModal}
        />

        <View style={styles.containerColumns}>
          {columns?.map(column => {
            return (
              <MyDeskItem
                key={column.id}
                column={column}
                onClick={() =>
                  navigation.navigate({
                    name: ScreenName.COLUMN,
                    params: {columnId: column?.id},
                  })
                }
              />
            );
          })}
        </View>

        <View />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },

  modal: {
    width: 500,
    height: 500,
    backgroundColor: COLORS.lightBlue,
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginBottom: 15,
  },

  title: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
    textAlign: 'center',
    paddingVertical: 22,
  },

  buttonAdd: {
    position: 'absolute',
    top: 24,
    right: 24,
  },

  containerColumns: {
    padding: 15,
  },

  loading: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
