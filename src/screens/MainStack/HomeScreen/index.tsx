import React from 'react';
import { View } from 'react-native';

import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer';

import { styles } from './styles';

interface Props {
  navigateToMyRecipes: () => void
}

export const HomeScreenView = ({ navigateToMyRecipes }: Props) => (
  <View testID='homeScreen' style={styles.homeContainer}>
    <TopBar navigateToMyRecipes={navigateToMyRecipes} testID='topBar'/>
    <CardContainer testID='cardContainer' />
  </View>
);

const HomeScreen= () => {
  const handleNavigateToMyRecipes = () => console.log("tässä!");

  return (
    <HomeScreenView navigateToMyRecipes={handleNavigateToMyRecipes} />
  );
};

export default HomeScreen;