import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import TopBar from '../../components/TopBar';
import CardsContainer from './components/CardsContainer';

import { styles } from './styles';

interface Props {
  navigateToMyRecipes: () => void
  navigateToAddARecipe: () => void
}

export const HomeScreenView = ({ navigateToMyRecipes, navigateToAddARecipe }: Props) => (
  <View testID='homeScreen' style={styles.homeContainer}>
    <TopBar 
      navigateToMyRecipes={navigateToMyRecipes} 
      showMyRecipes
      navigateToAddARecipe={navigateToAddARecipe}
      testID='topBar'/>
    <CardsContainer testID='cardContainer' />
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToMyRecipes = () => navigation.navigate('MyRecipes');
  const handleNavigateToAddARecipe = () => console.log("Navigating to add a recipe");

  return (
    <HomeScreenView 
      navigateToMyRecipes={handleNavigateToMyRecipes}
      navigateToAddARecipe={handleNavigateToAddARecipe}   
    />
  );
};

export default HomeScreen;