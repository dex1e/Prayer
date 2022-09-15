import React, {FC, ReactNode} from 'react';
import {Modal, View} from 'react-native';

interface ModalUiProps {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const ModalUi: FC<ModalUiProps> = ({children, visible, onClose}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}>
        {children}
      </Modal>
    </View>
  );
};
