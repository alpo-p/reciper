import React from 'react';
import { View } from 'react-native';
import { IRecipeForm } from '../../types';
import { FormikForm } from './FormikForm';
import { styles } from './styles';

interface Props {
  testID?: string
}

const AddARecipeScreen = (props: Props) => {
  const { testID } = props;
  const handleSubmit = (values: IRecipeForm) => console.log(values);

  return (
    <View style={styles.container} testID={testID}>
      <FormikForm onSubmit={handleSubmit}/>
    </View>
  );
};

export default AddARecipeScreen;