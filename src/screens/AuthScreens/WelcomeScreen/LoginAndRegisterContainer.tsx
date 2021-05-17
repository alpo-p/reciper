import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import useLogin from '../../../hooks/useLogin';

import { ILogin, IRegister } from '../../../types';

import { LoginAndRegisterButtonsView } from './LoginAndRegisterButtonsView';

import ModalProvider from './ModalProvider';

export const LoginAndRegisterContainer = () => {
  const [signIn] = useLogin();

  const navigation = useNavigation();

  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);
  const toggleLoginModal = () => setLoginVisible(!loginVisible);

  //TODO: refactor these to the individual modals at some point
  const handleSubmitRegister = (values: IRegister) => {
    console.log(values.username);
    console.log(values.password);
  };

  const handleSubmitLogin = async (values: ILogin) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigation.navigate('HomeScreen');
    } catch (e) {
      //TODO: show incorrect password popup or something?
      console.log(e);
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