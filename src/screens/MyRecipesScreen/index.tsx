import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import ListOfCards from '../../components/ListOfCards';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import useFetchLikedRecipes from '../../hooks/useFetchLikedRecipes';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../utils/utils';
import MyRecipesTitle from './MyRecipesTitle';

interface Props {
  testID?: string
}

const MyRecipesScreen = (props: Props) => {
  const { testID  } = props;
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
    <View style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE + 10 }} testID={testID}>
      <TopBar showNavigateHome 
        navigateToAddARecipe={handleNavigateToAddARecipe} 
        navigateToHome={handleNavigateToHome}
      />
      <MyRecipesTitle />
      <ListOfCards 
        recipes={parsedRecipes} 
        handleShowDetails={handleShowDetails}
        likedRecipes={likedRecipeIds}
      />
    </View>
  );
};

export default MyRecipesScreen;