import React from 'react';
import { View } from 'react-native';

import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer';

import { styles } from './styles';

interface Props {
  navigateToMyRecipes: () => void
  navigateToAddARecipe: () => void
}

export const HomeScreenView = ({ navigateToMyRecipes, navigateToAddARecipe }: Props) => (
  <View testID='homeScreen' style={styles.homeContainer}>
    <TopBar 
      navigateToMyRecipes={navigateToMyRecipes} 
      navigateToAddARecipe={navigateToAddARecipe}
      testID='topBar'/>
    <CardContainer testID='cardContainer' />
  </View>
);

const HomeScreen= () => {
  const handleNavigateToMyRecipes = () => console.log("tässä!");
  const handleNavigateToAddARecipe = () => console.log("tässä!");

  return (
    <HomeScreenView 
      navigateToMyRecipes={handleNavigateToMyRecipes}
      navigateToAddARecipe={handleNavigateToAddARecipe}   
    />
  );
};

export default HomeScreen;