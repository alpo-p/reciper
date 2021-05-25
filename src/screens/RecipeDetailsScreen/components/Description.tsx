import React from 'react';
import { ScrollView } from 'react-native';
import RecipeCard from '../../../components/RecipeCard';
import SText from '../../../components/SText';
import { IRecipe } from '../../../types';

interface Props {
  testID?: string
  recipe: IRecipe
  handleLikeRecipe: (id: string) => void
}

const Description = (props: Props) => {
  const { testID, recipe, handleLikeRecipe } = props;
  return (
    <ScrollView testID={testID}>
      <RecipeCard 
        hideButtons
        testID="recipeCardWithoutButtons"
        recipe={recipe}
        handleShowDetails={() => console.log('show details')}
        handleLikeRecipe={handleLikeRecipe}
      />
      <SText testID="descriptionText">{recipe.longDescription}</SText>
    </ScrollView>
  );
};

export default Description;