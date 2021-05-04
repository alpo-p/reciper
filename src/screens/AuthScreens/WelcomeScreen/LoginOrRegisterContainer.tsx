import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import FilledButton from '../../../components/FilledButton';
import TextButton from '../../../components/TextButton';
import { styles } from './styles';

interface Props {
  toRegister: () => void
  toLogin: () => void
}

export const LoginOrRegisterView = ({toRegister, toLogin}: Props) => (
  <View style={styles.form}>
    <FilledButton onPress={toRegister}>
      Register
    </FilledButton>
    <TextButton onPress={toLogin} style={styles.textButton}>
      Already an user? Login!
    </TextButton>
  </View>
);

export const LoginOrRegisterContainer = () => {
  const navigation = useNavigation();
  const toRegister = () => navigation.navigate('Register');
  const toLogin = () => navigation.navigate('Login');

  return (
    <LoginOrRegisterView toRegister={toRegister} toLogin={toLogin} />
  );
};