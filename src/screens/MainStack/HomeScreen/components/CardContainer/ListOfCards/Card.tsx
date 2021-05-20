import React from 'react';
import { View } from 'react-native';
import STitle from '../../../../../../components/STitle';
import { IRecipe } from '../../../../../../types';

interface Props {
  testID?: string
  recipe: IRecipe
}

const Card = (props: Props) => {
  const { recipe, testID } = props;
  return (
    <View testID={testID}>
      <STitle>{recipe.name}</STitle>
    </View>
  );
};

export default Card;