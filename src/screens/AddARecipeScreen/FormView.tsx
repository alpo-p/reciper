import React from 'react';
import { View } from 'react-native';
import FilledButton from '../../components/FilledButton';
import FormikTextInput from '../../components/FormikTextInput';
import { styles } from './styles';

export const FormView = ({ onSubmit }: { onSubmit: () => void; }) => (
  <View style={styles.formContainer}>
    <View style={styles.inputFields}>
      <FormikTextInput name="name" label="Name of the recipe" />
      <FormikTextInput multiline
        name="longDescription" label="The longish description of the recipe" />
    </View>
    <View style={styles.formButton}>
      <FilledButton onPress={onSubmit}>Add the recipe</FilledButton>
    </View>
  </View>
);