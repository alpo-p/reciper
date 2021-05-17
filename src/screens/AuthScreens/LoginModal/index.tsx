import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import useLogin from '../../../hooks/useLogin';
import SModal from '../../../components/SModal';

import { styles } from './styles';
import { FormikForm } from './FormikForm';
import BoldText from '../../../components/BoldText';
import { ILogin } from '../../../types';

interface Props {
  visible: boolean
  toggleVisible: () => void
  handleSubmit: (values: ILogin) => void
}

const Header = () => (
  <View style={styles.header}>
    <BoldText>Welcome back! Login below</BoldText>
  </View>
);

const LoginModalView = ({ visible, toggleVisible, handleSubmit }: Props) => (
  <SModal style={styles.modalContainer} visible={visible} toggleVisible={toggleVisible}>
    <Header />
    <FormikForm onSubmit={handleSubmit}/> 
  </SModal>
);

const LoginModal = ({ visible, toggleVisible }: Omit<Props, 'handleSubmit'>) => {
  const [signIn] = useLogin();
  const navigation = useNavigation();

  const handleSubmitLogin = async (values: ILogin) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }]
      });
    } catch (e) {
      //TODO: show incorrect password popup or something?
      console.log(e);
    }
  };

  return (
    <LoginModalView visible={visible} toggleVisible={toggleVisible} handleSubmit={handleSubmitLogin} />
  );
};

export default LoginModal;