import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '~assets';
import {getData} from '~services';
import Plus from '../../assets/images/Plus.svg';

export const MyDeskScreen = () => {
  useEffect(() => {
    getColumns();
  }, []);

  const getColumns = async () => {
    await getData('columns');
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>My Desk</Text>

        <TouchableOpacity style={styles.buttonAdd}>
          <Plus />
        </TouchableOpacity>
      </View>

      <View style={styles.columns}>
        <View style={styles.column}>ColumItem</View>
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

  columns: {},

  column: {},
});
