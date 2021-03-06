import React from 'react';
import { View } from 'react-native';

import LogoDark from '../LogoDark';
import { styles } from './styles';

import MyRecipesButton from './MyRecipesButton';
import AddARecipeButton from './AddARecipeButton';
import NavigateHomeButton from './NavigateHomeButton';
import LogoutButton from './LogoutButton';

interface Props {
  testID?: string
  navigateToMyRecipes?: () => void
  navigateToAddARecipe?: () => void
  navigateToHome?: () => void
  hideNavigateToMyRecipes?: boolean
  showMyRecipes?: boolean
  showNavigateHome?: boolean
}

const TopBar = (props: Props) => {
  const { testID, navigateToMyRecipes, 
    navigateToAddARecipe, navigateToHome, 
    showMyRecipes, showNavigateHome, hideNavigateToMyRecipes } = props;

  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.logoContainer} >
        <LogoDark />
      </View>
      <View style={styles.emptyContainer}></View>
      <View style={styles.buttonContainer} >
        <LogoutButton />
        {!hideNavigateToMyRecipes && <AddARecipeButton onPress={navigateToAddARecipe} />}
        {showMyRecipes && <MyRecipesButton onPress={navigateToMyRecipes} />}
        {showNavigateHome && <NavigateHomeButton onPress={navigateToHome} />}
      </View>
    </View>
  );
};

export default TopBar;