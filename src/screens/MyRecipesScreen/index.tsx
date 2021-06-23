import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Loading from '../../components/Loading';
import useFetchLikedRecipes from '../../hooks/useFetchLikedRecipes';
import MyRecipesView from './MyRecipesView';

const MyRecipesScreen = () => {
  const navigation = useNavigation();
  const { recipes, loading } = useFetchLikedRecipes();

  if (loading) return <Loading />;

  const parsedRecipes = recipes?.data.likedRecipesByCurrentUser;
  const likedRecipeIds = parsedRecipes.map(recipe => recipe.id);

  const handleNavigateToHome = () => navigation.navigate('HomeScreen');
  const handleNavigateToAddARecipe = () => navigation.navigate('AddARecipe');

  const handleShowDetails = (id: string) => 
    navigation.navigate('RecipeDetails', {
      recipe: parsedRecipes.find(r => r.id === id),
      likedRecipes: likedRecipeIds,
      navigateBackToMyRecipes: true
    });

  return (
    <MyRecipesView 
      navigateToAddARecipe={handleNavigateToAddARecipe} 
      navigateToHome={handleNavigateToHome}
      recipes={parsedRecipes} 
      handleShowDetails={handleShowDetails}
      likedRecipes={likedRecipeIds}
    />
  );
};

export default MyRecipesScreen;