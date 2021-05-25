import React from 'react';
import { Provider, Portal } from 'react-native-paper';
  
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';

interface Props {
  registerVisible: boolean
  toggleRegisterModal: () => void
  loginVisible: boolean
  toggleLoginModal: () => void
  children?: React.ReactNode
}

const ModalProvider = ({ 
  registerVisible,
  toggleRegisterModal,
  loginVisible,
  toggleLoginModal,
  ...props }: Props) => (
  <Provider>
    <Portal>
      <RegisterModal 
        visible={registerVisible} 
        toggleVisible={toggleRegisterModal} 
      />
      <LoginModal
        visible={loginVisible}
        toggleVisible={toggleLoginModal}
      />
    </Portal>
    {props.children}
  </Provider>
);

export default ModalProvider;
