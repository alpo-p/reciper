import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { IRecipe } from '../../../types';
import ListOfCards from '../../../components/ListOfCards';
import Loading from '../../../components/Loading';

import useGetRecipes from '../../../hooks/useGetRecipes';
import useFetchLikedRecipes from '../../../hooks/useFetchLikedRecipes';

interface Props {
  testID?: string
}

interface ViewProps {
  testID?: string
  recipes: IRecipe[]
  likedRecipes: string[]
  handleShowDetails: (id: string) => void
}

export const CardsContainerView = ({ testID, recipes, likedRecipes, handleShowDetails }: ViewProps) => (
  <View testID={testID}>
    <ListOfCards 
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
  const { recipes: likedRecipes, loading: _loading} = useFetchLikedRecipes();

  
  if (loading || _loading) return <Loading />;
  
  const parsedRecipes = recipes.data.allRecipes;
  const likedRecipeIds = likedRecipes.data.likedRecipesByCurrentUser.map(recipe => recipe.id);

  const handleShowDetails = (id: string) => 
    navigation.navigate('RecipeDetails', {
      recipe: parsedRecipes.find(r => r.id === id),
      likedRecipes: likedRecipeIds
    });

  return (
    <CardsContainerView 
      testID={testID} 
      recipes={parsedRecipes}
      likedRecipes={likedRecipeIds}
      handleShowDetails={handleShowDetails} 
    /> 
  );
};

export default CardsContainer;