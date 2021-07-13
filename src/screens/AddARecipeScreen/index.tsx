import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import TopBar from '../../components/TopBar';
import AddARecipeTab from './components/AddARecipeTab';
import AddedRecipesTab from './components/AddedRecipesTab';

const TopTab = createMaterialTopTabNavigator();

const AddARecipeScreen = () => {
  const navigation = useNavigation();
  const handleNavigateHome = () => navigation.navigate('HomeScreen');
  const handleNavigateMyRecipes = () => navigation.navigate('MyRecipes');

  return (
    <>
      <TopBar 
        hideNavigateToMyRecipes 
        showMyRecipes
        showNavigateHome
        navigateToHome={handleNavigateHome}
        navigateToMyRecipes={handleNavigateMyRecipes}
      />
      <TopTab.Navigator>
        <TopTab.Screen name='Add a recipe'>
          { () => <AddARecipeTab /> }
        </TopTab.Screen>
        <TopTab.Screen name="Recipes I've added">
          { () => <AddedRecipesTab /> }
        </TopTab.Screen>
      </TopTab.Navigator>
    </>
  );
};

export default AddARecipeScreen;