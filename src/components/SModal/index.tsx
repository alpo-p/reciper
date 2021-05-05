import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Modal } from 'react-native-paper';
import { styles } from './styles';

interface Props {
  visible: boolean
  toggleVisible: () => void
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>
}

const SModal = ({ visible, toggleVisible, ...props }: Props) => {
  const _style = [styles.container, props.style];

  return (
    <Modal 
      visible={visible} 
      onDismiss={toggleVisible}
      contentContainerStyle={_style}
    >
      {props.children}
    </Modal>
  );
};

export default SModal;