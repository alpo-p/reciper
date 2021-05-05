import React, { useState } from 'react';
import { View } from 'react-native';
import { Provider, Portal } from 'react-native-paper';
import FilledButton from '../../../components/FilledButton';
import OutlinedButton from '../../../components/OutlinedButton';
import RegisterModal from '../RegisterModal';
import { styles } from './styles';

interface Props {
  toRegister: () => void
  toLogin: () => void
}

export const LoginAndRegisterButtonsView = ({toRegister, toLogin}: Props) => (
  <View style={styles.buttons}>
    <FilledButton onPress={toRegister}>
      Register
    </FilledButton>
    <OutlinedButton onPress={toLogin} style={styles.outlinedButton}>
      Already an user? Login!
    </OutlinedButton>
  </View>
);

export const LoginAndRegisterContainer = () => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleRegister = () => setRegisterVisible(!registerVisible);
  const toggleLogin = () => setLoginVisible(!loginVisible);

  return (
    <Provider>
      <Portal>
        <RegisterModal registerVisible={registerVisible} toggleRegisterVisible={toggleRegister} />
      </Portal>
      <LoginAndRegisterButtonsView toRegister={toggleRegister} toLogin={toggleLogin} />
    </Provider>
  );
};