import React from 'react';
import { View } from 'react-native';
import FilledButton from '../../../components/FilledButton';
import FormikTextInput from '../../../components/FormikTextInput';
import { styles } from './styles';


export const FormView = ({ onSubmit }: { onSubmit: () => void; }) => (
  <View style={styles.formContainer}>
    <View style={styles.inputFields}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <FormikTextInput secureTextEntry name="confirmation" placeholder="Password confirmation" />
    </View>
    <View style={styles.formButton}>
      <FilledButton onPress={onSubmit}>Register</FilledButton>
    </View>
  </View>
);