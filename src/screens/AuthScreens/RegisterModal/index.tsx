import React from 'react';
import { View } from 'react-native';


import SModal from '../../../components/SModal';

import { styles } from './styles';
import { FormikForm } from './FormikForm';
import BoldText from '../../../components/BoldText';
import { RegisterAndLoginFormValues } from '../../../types';

interface Props {
  registerVisible: boolean
  toggleRegisterVisible: () => void
  handleSubmit: (values: RegisterAndLoginFormValues) => void
}

const Header = () => (
  <View style={styles.header}>
    <BoldText>Register a new user</BoldText>
  </View>
);

const RegisterModal = ({ registerVisible, toggleRegisterVisible, handleSubmit }: Props) => (
  <SModal style={styles.modalContainer} visible={registerVisible} toggleVisible={toggleRegisterVisible}>
    <Header />
    <FormikForm onSubmit={handleSubmit}/> 
  </SModal>
);

export default RegisterModal;