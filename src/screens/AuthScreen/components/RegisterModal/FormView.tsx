import React from 'react';
import { View } from 'react-native';
import FilledButton from '../../../../components/FilledButton';
import FormikTextInput from '../../../../components/FormikTextInput';
import { styles } from './styles';


// TODO: next-button focuses on the next input...
export const FormView = ({ onSubmit }: { onSubmit: () => void; }) => (
  <View style={styles.formContainer}>
    <View style={styles.inputFields}>
      <FormikTextInput name="username" label="Username" />
      <FormikTextInput secureTextEntry name="password" label="Password" />
      <FormikTextInput secureTextEntry name="confirmation" label="Confirm your password" />
    </View>
    <View style={styles.formButton}>
      <FilledButton onPress={onSubmit}>Register</FilledButton>
    </View>
  </View>
);