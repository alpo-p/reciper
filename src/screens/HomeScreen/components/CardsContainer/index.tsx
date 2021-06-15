import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { IRecipes } from '../../../../types';
import ListOfCards from '../ListOfCards';
import Loading from '../../../../components/Loading';

import useGetRecipes from '../../../../hooks/useGetRecipes';
import useGetLikedRecipes from '../../../../hooks/useGetLikedRecipes';
import useLikeRecipe from '../../../../hooks/useLikeRecipe';

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

  const { likeRecipe } = useLikeRecipe();
  
  if (loading || _loading) return <Loading />;
  
  const handleLikeRecipe = async (id: string) => await likeRecipe(id);

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