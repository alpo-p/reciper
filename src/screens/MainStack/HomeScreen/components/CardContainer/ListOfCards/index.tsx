import React  from 'react';
import { FlatList } from 'react-native';
import { IRecipes } from '../../../../../../types';
import Card from './Card';

interface Props {
  testID?: string
  recipes: IRecipes
}

const ListOfCards = (props: Props) => {
  const { testID, recipes } = props;

  const parsedRecipes = recipes.data.allRecipes;

  const handleLikeRecipe = () => console.log("Liked recipe");
  const handleShowDetails = () => console.log("Showing details");

  return (
    <FlatList
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