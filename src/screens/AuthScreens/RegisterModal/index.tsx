import React from 'react';
import { View } from 'react-native';


import SModal from '../../../components/SModal';

import { styles } from './styles';
import { FormikForm } from './FormikForm';
import BoldText from '../../../components/BoldText';
import { IRegister } from '../../../types';

interface Props {
  visible: boolean
  toggleVisible: () => void
  handleSubmit: (values: IRegister) => void
}

const Header = () => (
  <View style={styles.header}>
    <BoldText>Create an account</BoldText>
  </View>
);

const RegisterModal = ({ visible, toggleVisible, handleSubmit }: Props) => (
  <SModal style={styles.modalContainer} visible={visible} toggleVisible={toggleVisible}>
    <Header />
    <FormikForm onSubmit={handleSubmit}/> 
  </SModal>
);

export default RegisterModal;