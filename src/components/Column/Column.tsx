import React from 'react';
import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '~assets';
import {IColumn} from '~types';

interface ColumnProps {
  column?: IColumn;
}

export const Column: FC<ColumnProps> = ({column}) => {
  return (
    <TouchableOpacity style={styles.column}>
      <Text>{column?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  column: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
  },

  columnTitle: {
    color: COLORS.primary,
    fontFamily: 'SF UI Text',
    fontSize: 17,
    lineHeight: 20,
  },
});
