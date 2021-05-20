import React from 'react';
import { View } from 'react-native';
import { IRecipe, IRecipes } from '../../../../../../types';
import Card from './Card';
import useGetRecipes from './useGetRecipes';

interface Props {
  testID?: string
}

const ListOfCards = (props: Props) => {
  const { testID } = props;

  const recipes: IRecipes = useGetRecipes();
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