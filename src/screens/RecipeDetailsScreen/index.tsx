import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { IRecipe } from '../../types';
import TabbedView from './components/TabbedView';

interface Props {
  testID?: string
  route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>
}

const RecipeDetails = (props: Props) => {
  const { testID, route } = props;
  const { recipe } = route.params;

  const handleLikeRecipe = (id: string) => console.log("liked the recipe", id);

  return (
    <View testID={testID}>
      <TabbedView 
        testID="recipeDetailsTabView" 
        recipe={recipe} 
        handleLikeRecipe={handleLikeRecipe}
      />
    </View>
  );
};

export default RecipeDetails;