import React  from 'react';
import { FlatList } from 'react-native';
import { IRecipes } from '../../../../../types';
import RecipeCard from '../../../../../components/RecipeCard';

interface Props {
  testID?: string
  recipes: IRecipes
  handleLikeRecipe: (id: string) => void
  handleShowDetails: (id: string) => void
}

const BOTTOM_MARGIN_GLITCH_FIX_VALUE = 50;

const ListOfCards = (props: Props) => {
  const { testID, recipes, handleLikeRecipe, handleShowDetails } = props;

  const parsedRecipes = recipes.data.allRecipes;

  return (
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE }}
      data={parsedRecipes}
      renderItem={({ item }) => (
        <RecipeCard 
          recipe={item} 
          testID='card'
          handleLikeRecipe={handleLikeRecipe}
          handleShowDetails={handleShowDetails}
        />
      )}
      keyExtractor={(i) => i.id}
      testID={testID}
    />
  );
};

export default ListOfCards;