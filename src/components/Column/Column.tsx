import React from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {IColumn} from '~types';

interface ColumnProps {
  column: IColumn;
}

export const Column: FC<ColumnProps> = ({column}) => {
  return (
    <View>
      <Text>{column.title}</Text>
    </View>
  );
};
