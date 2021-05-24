import React from 'react';
import { View } from 'react-native';
import ListOfCards from './ListOfCards';
import useGetRecipes from '../../../../../hooks/useGetRecipes';
import { IRecipes } from '../../../../../types';
import { useNavigation } from '@react-navigation/core';

interface Props {
  testID?: string
}

const CardsContainer = (props: Props) => {
  const { testID } = props;
  const navigation = useNavigation();
  const recipes: IRecipes = useGetRecipes();

  const handleLikeRecipe = (id: string) => console.log("liked:",recipes.data.allRecipes.find(r => r.id === id));
  const handleShowDetails = (id: string) => 
    navigation.navigate('RecipeDetails', {
      recipe: recipes.data.allRecipes.find(r => r.id === id)
    });

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