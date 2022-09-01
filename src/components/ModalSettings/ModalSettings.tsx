import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '~assets';
import {CloseIcon} from '~components/icons';
import {Header, ModalUi} from '~components/ui';

interface ModalSettingsProps {
  visible: boolean;
  onRequestClose: () => void;
}

export const ModalSettings: FC<ModalSettingsProps> = ({
  visible,
  onRequestClose,
}) => {
  return (
    <ModalUi visible={visible} onRequestClose={onRequestClose}>
      <Header
        title="Settings"
        isDividerActive
        buttonRight={<CloseIcon fill={COLORS.lightBlue} />}
        onPressButtonRight={onRequestClose}
      />
      <View>
        <Text>Rename Column</Text>

        <Text>Delete column</Text>
      </View>
    </ModalUi>
  );
};
