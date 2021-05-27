import React from 'react';
import { View } from 'react-native';
import ListOfCards from './ListOfCards';
import useGetRecipes from '../../../../hooks/useGetRecipes';
import { IRecipes } from '../../../../types';
import { useNavigation } from '@react-navigation/core';
import Loading from '../../../../components/Loading';

interface Props {
  testID?: string
}

interface ViewProps {
  testID?: string
  recipes: IRecipes
  handleLikeRecipe: (id: string) => void
  handleShowDetails: (id: string) => void
}

export const CardsContainerView = ({ testID, recipes, handleLikeRecipe, handleShowDetails }: ViewProps) => (
  <View testID={testID}>
    <ListOfCards 
      handleLikeRecipe={handleLikeRecipe}
      handleShowDetails={handleShowDetails}
      recipes={recipes} 
      testID='listOfCards' />
  </View>
);

const CardsContainer = (props: Props) => {
  const { testID } = props;
  const navigation = useNavigation();

  const { recipes, loading } = useGetRecipes();

  if (loading) return <Loading />;

  const handleLikeRecipe = (id: string) => console.log("liked:",recipes.data.allRecipes.find(r => r.id === id));
  const handleShowDetails = (id: string) => 
    navigation.navigate('RecipeDetails', {
      recipe: recipes.data.allRecipes.find(r => r.id === id)
    });

  return (
    <CardsContainerView 
      testID={testID} 
      recipes={recipes}
      handleLikeRecipe={handleLikeRecipe} 
      handleShowDetails={handleShowDetails} 
    /> 
  );
};

export default CardsContainer;