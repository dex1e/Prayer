import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '~assets';
import {Column} from '~components/Column/Column';
import {getColumns} from '~store/features/columns';
import {useAppDispatch, useAppSelector} from '~store/hooks';

export const MyDeskScreen = () => {
  const columns = useAppSelector(state => state.columns.columns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getColumns());
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {columns?.map(column => {
          return <Column key={column.id} column={column} />;
        })}
      </View>

      <View />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginBottom: 15,
  },

  title: {
    fontFamily: 'SF UI Text',
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

  container: {
    padding: 15,
  },
});
