import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useField } from 'formik';
import SText from '../../components/SText';

interface Props {
  name: string
  label: string
}

const FormikPicker = (props: Props) => {
  const { name, label } = props;
  const [field,, helpers] = useField(name);

  return (
    <View style={styles.container}>
      <SText>{ label }</SText>
      <Picker
        selectedValue={field.value as string}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => helpers.setValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
		
  }
});

export default FormikPicker;