import React from 'react';
import { useField } from 'formik';
import { View } from 'react-native';
import TextInput from './TextInput';
import SText from '../SText';
import { styles } from './styles';

interface Props {
  name: string
  placeholder: string
  secureTextEntry?: boolean
}

const FormikTextInput = ({ name, ...props}: Props) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        {showError && 
          <SText style={styles.errorText}>
            {meta.error}
          </SText>
        }
      </View>
      <TextInput
        style={styles.field}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value as string}
        error={showError}
        {...props}
      />
    </View>
  );
};

export default FormikTextInput;