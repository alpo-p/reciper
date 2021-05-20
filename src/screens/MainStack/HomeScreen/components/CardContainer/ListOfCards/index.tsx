import React from 'react';
import { View } from 'react-native';
import { IRecipe, IRecipes } from '../../../../../../types';
import Card from './Card';

interface Props {
  testID?: string
  recipes: IRecipes
}

const ListOfCards = (props: Props) => {
  const { testID, recipes } = props;

  const recipe: IRecipe =  recipes.data.allRecipes[0]; 

  const handleLikeRecipe = () => console.log("Liked recipe");
  const handleShowDetails = () => console.log("Showing details");

  return (
    <View testID={testID}>
      <Card 
        recipe={recipe} 
        testID='card'
        handleLikeRecipe={handleLikeRecipe}
        handleShowDetails={handleShowDetails}
      />
    </View>
  );
};

export default ListOfCards;