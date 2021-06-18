import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import ListOfCards from '../../components/ListOfCards';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import useFetchLikedRecipes from '../../hooks/useFetchLikedRecipes';
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

  const handleNavigateToHome = () => navigation.navigate('HomeScreen');
  const handleNavigateToAddARecipe = () => console.log('navigating to add a recipe');

  const handleShowDetails = () => console.log("showing details");

  return (
    <View testID={testID}>
      <TopBar showNavigateHome 
        navigateToAddARecipe={handleNavigateToAddARecipe} 
        navigateToHome={handleNavigateToHome}
      />
      <MyRecipesTitle />
      <ListOfCards 
        recipes={parsedRecipes} 
        handleShowDetails={handleShowDetails}
      />
    </View>
  );
};

export default MyRecipesScreen;