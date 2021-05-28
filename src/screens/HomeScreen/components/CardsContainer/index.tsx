import React from 'react';
import { View } from 'react-native';
import ListOfCards from './ListOfCards';
import useGetRecipes from '../../../../hooks/useGetRecipes';
import { IRecipes } from '../../../../types';
import { useNavigation } from '@react-navigation/core';
import Loading from '../../../../components/Loading';
import useGetLikedRecipes from '../../../../hooks/useGetLikedRecipes';

interface Props {
  testID?: string
}

interface ViewProps {
  testID?: string
  recipes: IRecipes
  likedRecipes: string[]
  handleLikeRecipe: (id: string) => void
  handleShowDetails: (id: string) => void
}

export const CardsContainerView = ({ testID, recipes, likedRecipes, handleLikeRecipe, handleShowDetails }: ViewProps) => (
  <View testID={testID}>
    <ListOfCards 
      handleLikeRecipe={handleLikeRecipe}
      handleShowDetails={handleShowDetails}
      recipes={recipes} 
      likedRecipes={likedRecipes}
      testID='listOfCards' />
  </View>
);

const CardsContainer = (props: Props) => {
  const { testID } = props;
  const navigation = useNavigation();

  const { recipes, loading } = useGetRecipes();
  const { likedRecipes, _loading } = useGetLikedRecipes();
  
  if (loading || _loading) return <Loading />;

  const handleLikeRecipe = (id: string) => console.log("liked:",recipes.data.allRecipes.find(r => r.id === id));
  const handleShowDetails = (id: string) => 
    navigation.navigate('RecipeDetails', {
      recipe: recipes.data.allRecipes.find(r => r.id === id),
      likedRecipes
    });

  return (
    <CardsContainerView 
      testID={testID} 
      recipes={recipes}
      likedRecipes={likedRecipes}
      handleLikeRecipe={handleLikeRecipe} 
      handleShowDetails={handleShowDetails} 
    /> 
  );
};

export default CardsContainer;