import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import useLogin from '../../../hooks/useLogin';

import { RegisterAndLoginFormValues } from '../../../types';

import { LoginAndRegisterButtonsView } from './LoginAndRegisterButtonsView';

import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import ModalProvider from './ModalProvider';

export const LoginAndRegisterContainer = () => {
  const navigation = useNavigation();

  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);
  const toggleLoginModal = () => setLoginVisible(!loginVisible);

  const handleSubmitRegister = (values: RegisterAndLoginFormValues) => {
    console.log(values.username);
    console.log(values.password);
  };

  const handleSubmitLogin = (values: RegisterAndLoginFormValues) => {
    const success = useLogin(values);
    if (success) {
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <ModalProvider
      handleSubmitRegister={handleSubmitRegister}
      registerVisible={registerVisible}
      toggleRegisterModal={toggleRegisterModal}
      handleSubmitLogin={handleSubmitLogin}
      loginVisible={loginVisible}
      toggleLoginModal={toggleLoginModal}
    >
      <LoginAndRegisterButtonsView toRegister={toggleRegisterModal} toLogin={toggleLoginModal} />
    </ModalProvider>
  );
};