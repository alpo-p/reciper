import React, { useState } from 'react';
import { Provider, Portal } from 'react-native-paper';
import { RegisterAndLoginFormValues } from '../../../types';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import { LoginAndRegisterButtonsView } from './LoginAndRegisterButtonsView';

export const LoginAndRegisterContainer = () => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);
  const toggleLoginModal = () => setLoginVisible(!loginVisible);

  const handleSubmitRegister = (values: RegisterAndLoginFormValues) => {
    console.log(values.username);
    console.log(values.password);
  };

  const handleSubmitLogin = (values: RegisterAndLoginFormValues) => {
    console.log(values.username);
    console.log(values.password);
  };

  return (
    <Provider>
      <Portal>
        <RegisterModal 
          handleSubmit={handleSubmitRegister} 
          visible={registerVisible} 
          toggleVisible={toggleRegisterModal} 
        />
        <LoginModal
          handleSubmit={handleSubmitLogin}
          visible={loginVisible}
          toggleVisible={toggleLoginModal}
        />
      </Portal>
      <LoginAndRegisterButtonsView toRegister={toggleRegisterModal} toLogin={toggleLoginModal} />
    </Provider>
  );
};