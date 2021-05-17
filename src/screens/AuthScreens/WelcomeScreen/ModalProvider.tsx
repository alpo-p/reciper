import React from 'react';
import { Provider, Portal } from 'react-native-paper';
import { ILogin, IRegister } from '../../../types';
  
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

interface Props {
  handleSubmitRegister: (values: IRegister) => void
  registerVisible: boolean
  toggleRegisterModal: () => void
  handleSubmitLogin: (values: ILogin) => void
  loginVisible: boolean
  toggleLoginModal: () => void
  children?: React.ReactNode
}

const ModalProvider = ({ 
  handleSubmitRegister,
  registerVisible,
  toggleRegisterModal,
  handleSubmitLogin,
  loginVisible,
  toggleLoginModal,
  ...props }: Props) => (
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
    {props.children}
  </Provider>
);

export default ModalProvider;
