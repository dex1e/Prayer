import React from 'react';
import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';

import {IColumn} from '~types';

interface MyDeskItemProps {
  column?: IColumn;
  onClick: () => void;
}

export const MyDeskItem: FC<MyDeskItemProps> = ({column, onClick}) => {
  return (
    <TouchableOpacity style={styles.column} onPress={onClick}>
      <Text style={styles.columnTitle} numberOfLines={2}>
        {column?.title}
      </Text>
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
    fontFamily: FONT_FAMILY.primary,
    fontSize: 17,
    lineHeight: 20,
    overflow: 'hidden',
  },
});
