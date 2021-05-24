import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import STitle from '../../../components/STitle';

import { IRecipe } from '../../../types';

interface Props {
  testID?: string
  route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>
}

const RecipeDetails = (props: Props) => {
  const { testID, route } = props;
  const { recipe } = route.params;

  return (
    <View testID={testID}>
      <STitle testID="detailsTitle">{recipe.name}</STitle>
    </View>
  );
};

export default RecipeDetails;