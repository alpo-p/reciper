import React from 'react';
import { View } from 'react-native';
import STitle from '../../../components/STitle';

import { IRecipe } from '../../../types';

interface Props {
  testID?: string
  recipe: IRecipe
}

const RecipeDetails = (props: Props) => {
  const { testID, recipe } = props;
  return (
    <View testID={testID}>
      <STitle testID="detailsTitle">{recipe.name}</STitle>
    </View>
  );
};

export default RecipeDetails;