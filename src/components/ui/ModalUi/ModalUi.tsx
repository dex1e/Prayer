import React, {FC, ReactNode} from 'react';
import {Modal, ScrollView} from 'react-native';

interface ModalUiProps {
  children: ReactNode;
  visible: boolean;
  onRequestClose: () => void;
}

export const ModalUi: FC<ModalUiProps> = ({
  children,
  visible,
  onRequestClose,
}) => {
  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onRequestClose}>
        {children}
      </Modal>
    </ScrollView>
  );
};
