import React from 'react';
import { View } from 'react-native';
import ListOfCards from './ListOfCards';
import useGetRecipes from '../../../../../hooks/useGetRecipes';
import { IRecipes } from '../../../../../types';

interface Props {
  testID?: string
}

const CardsContainer = (props: Props) => {
  const { testID } = props;
  const recipes: IRecipes = useGetRecipes();
  const handleLikeRecipe = (id: string) => console.log("Liked recipe:", id);
  const handleShowDetails = (id: string) => console.log("Showing details:",id);

  return (
    <View testID={testID}>
      <ListOfCards 
        handleLikeRecipe={handleLikeRecipe}
        handleShowDetails={handleShowDetails}
        recipes={recipes} 
        testID='listOfCards' />
    </View>
  );
};

export default CardsContainer;