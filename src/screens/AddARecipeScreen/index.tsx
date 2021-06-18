import React from 'react';
import { View } from 'react-native';
import STitle from '../../components/STitle';

interface Props {
  testID?: string
}

const AddARecipeScreen = (props: Props) => {
  const { testID } = props;
  return (
    <View testID={testID}>
      <STitle style={{color: 'black'}}>Here we'll add a new recipe</STitle>
    </View>
  );
};

export default AddARecipeScreen;