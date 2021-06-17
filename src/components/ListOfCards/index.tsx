import React  from 'react';
import { FlatList } from 'react-native';

import { IRecipe } from '../../types';
import RecipeCard from '../RecipeCard';

import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../utils/utils';

interface Props {
  testID?: string
  recipes: IRecipe[]
  likedRecipes?: string[]
  handleShowDetails: (id: string) => void
}

const ListOfCards = (props: Props) => {
  const { testID, recipes, handleShowDetails, likedRecipes } = props;

  return (
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE }}
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard 
          recipe={item} 
          testID='card'
          handleShowDetails={handleShowDetails}
          likedRecipes={likedRecipes}
        />
      )}
      keyExtractor={(i) => i.id}
      testID={testID}
    />
  );
};

export default ListOfCards;