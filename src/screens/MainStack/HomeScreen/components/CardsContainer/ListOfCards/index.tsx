import React  from 'react';
import { FlatList } from 'react-native';
import { IRecipes } from '../../../../../../types';
import Card from './Card';

interface Props {
  testID?: string
  recipes: IRecipes
}

const BOTTOM_MARGIN_GLITCH_FIX_VALUE = 50;

const ListOfCards = (props: Props) => {
  const { testID, recipes } = props;

  const parsedRecipes = recipes.data.allRecipes;

  const handleLikeRecipe = (id: string) => console.log("Liked recipe:", id);
  const handleShowDetails = (id: string) => console.log("Showing details:",id);

  return (
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE }}
      data={parsedRecipes}
      renderItem={({ item }) => (
        <Card 
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