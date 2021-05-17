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

const RegisterModalView = ({ visible, toggleVisible, handleSubmit }: Props) => (
  <SModal style={styles.modalContainer} visible={visible} toggleVisible={toggleVisible}>
    <Header />
    <FormikForm onSubmit={handleSubmit}/> 
  </SModal>
);

const RegisterModal = ({visible, toggleVisible}: Omit<Props, 'handleSubmit'>) => {
  const handleSubmitRegister = (values: IRegister) => {
    console.log(values.username);
    console.log(values.password);
  };

  return (
    <RegisterModalView visible={visible} toggleVisible={toggleVisible} handleSubmit={handleSubmitRegister} />
  );
};

export default RegisterModal;