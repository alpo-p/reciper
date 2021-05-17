import React, { useState } from 'react';

import { LoginAndRegisterButtonsView } from './LoginAndRegisterButtonsView';

import ModalProvider from './ModalProvider';

export const LoginAndRegisterContainer = () => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleRegisterModal = () => setRegisterVisible(!registerVisible);
  const toggleLoginModal = () => setLoginVisible(!loginVisible);

  return (
    <ModalProvider
      registerVisible={registerVisible}
      toggleRegisterModal={toggleRegisterModal}
      loginVisible={loginVisible}
      toggleLoginModal={toggleLoginModal}
    >
      <LoginAndRegisterButtonsView toRegister={toggleRegisterModal} toLogin={toggleLoginModal} />
    </ModalProvider>
  );
};