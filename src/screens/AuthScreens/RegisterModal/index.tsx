import React from 'react';
import SModal from '../../../components/SModal';
import SText from '../../../components/SText';
import { styles } from './styles';

interface Props {
  registerVisible: boolean
  toggleRegisterVisible: () => void
}

const RegisterModal = ({ registerVisible, toggleRegisterVisible }: Props) => {
  return (
    <SModal style={styles.container} visible={registerVisible} toggleVisible={toggleRegisterVisible}>
      <SText>Toimii</SText>
    </SModal>
  );
};

export default RegisterModal;