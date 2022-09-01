import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';
import {ModalSettings} from '~components';
import {InputWithIcon} from '~components/ui';

interface MyPrayersScreenProps {
  isSettingsModalVisible: boolean;
  onCloseSettingsModalVisible: () => void;
}

export const MyPrayersScreen: FC<MyPrayersScreenProps> = ({
  isSettingsModalVisible,
  onCloseSettingsModalVisible,
}) => {
  return (
    <ScrollView style={styles.container}>
      <ModalSettings
        visible={isSettingsModalVisible}
        onRequestClose={onCloseSettingsModalVisible}
      />
      <View style={styles.inputItem}>
        <InputWithIcon placeholder="Add a prayer..." />
      </View>

      <View>
        <Text>sds</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.white,
  },

  inputItem: {
    paddingBottom: 15,
  },
});
