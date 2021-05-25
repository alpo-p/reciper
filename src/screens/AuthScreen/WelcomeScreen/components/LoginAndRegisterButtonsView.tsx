import React from 'react';
import { View } from 'react-native';
import FilledButton from '../../../../components/FilledButton';
import OutlinedButton from '../../../../components/OutlinedButton';
import { styles } from '../styles';

export interface Props {
  toRegister: () => void
  toLogin: () => void
}

export const LoginAndRegisterButtonsView = ({ toRegister, toLogin }: Props) => (
  <View style={styles.buttons}>
    <FilledButton onPress={toRegister}>
      Register
    </FilledButton>
    <OutlinedButton onPress={toLogin} style={styles.outlinedButton}>
      Already an user? Login!
    </OutlinedButton>
  </View>
);
