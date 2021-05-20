import React from 'react';
import { Alert, View } from 'react-native';


import SModal from '../../../components/SModal';

import { styles } from './styles';
import { FormikForm } from './FormikForm';
import BoldText from '../../../components/BoldText';
import { IRegister } from '../../../types';
import useRegister from '../../../hooks/useRegister';
import useLogin from '../../../hooks/useLogin';
import { useNavigation } from '@react-navigation/native';

interface Props {
  visible: boolean
  toggleVisible: () => void
  handleSubmit: (values: IRegister) => void
}

//todo: refactor the pure components out
const Header = () => (
  <View style={styles.header}>
    <BoldText>Create an account</BoldText>
  </View>
);

export const RegisterModalView = ({ visible, toggleVisible, handleSubmit }: Props) => (
  <SModal style={styles.modalContainer} visible={visible} toggleVisible={toggleVisible}>
    <Header />
    <FormikForm onSubmit={handleSubmit}/> 
  </SModal>
);

const RegisterModal = ({visible, toggleVisible}: Omit<Props, 'handleSubmit'>) => {
  const [signUp] = useRegister();
  const [signIn] = useLogin();
  const navigation = useNavigation();

  const handleSubmitRegister = async (values: IRegister) => {
    const { username, password, confirmation } = values;
    if (password !== confirmation) {
      throw new Error("Password doesn't match confirmation!");
    }

    let success: boolean;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      success = true;
    } catch(e) {
      Alert.alert('The username already exists');
      success= false;
    }

    if (success) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }]
      });
    }
  };

  return (
    <RegisterModalView visible={visible} toggleVisible={toggleVisible} handleSubmit={handleSubmitRegister} />
  );
};

export default RegisterModal;
