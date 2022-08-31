import React, {FC, useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {ModalAddColumn} from '~components';
import {Column} from '~components/Column/Column';

import {getColumns} from '~store/features/columns';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

interface MyDeskScreenProps {
  isAddColumnModalVisible: boolean;
  setIsAddColumnModalVisible: (isAddColumnModalVisible: boolean) => void;
  onPress?: any;
}

export const MyDeskScreen: FC<MyDeskScreenProps> = ({
  isAddColumnModalVisible,
  setIsAddColumnModalVisible,
}) => {
  const columns = useAppSelector(state => state.columns.columns);
  const getColumnsFetchStatus = useAppSelector(
    state => state.columns.getColumnsFetchStatus,
  );

  const dispatch = useAppDispatch();

  const isLoading = getColumnsFetchStatus === FetchStatus.PENDING;

  useEffect(() => {
    dispatch(getColumns());
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

  return (
    <ScrollView style={styles.container}>
      <ModalAddColumn
        visible={isAddColumnModalVisible}
        onRequestClose={() => setIsAddColumnModalVisible(false)}
      />

      <View style={styles.containerColumns}>
        {columns?.map(column => {
          return <Column key={column?.id} column={column} />;
        })}
      </View>

      <View />
    </ScrollView>
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
});
