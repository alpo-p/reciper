import React from 'react';
import { View } from 'react-native';

import LogoDark from '../LogoDark';
import { styles } from './styles';

import MyRecipesButton from './MyRecipesButton';
import AddARecipeButton from './AddARecipeButton';

interface Props {
  testID?: string
  navigateToMyRecipes: () => void
  navigateToAddARecipe: () => void
}

const TopBar = (props: Props) => {
  const { testID, navigateToMyRecipes, navigateToAddARecipe } = props;

  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.logoContainer} >
        <LogoDark />
      </View>
      <View style={styles.emptyContainer}></View>
      <View style={styles.buttonContainer} >
        <AddARecipeButton onPress={navigateToAddARecipe} />
        <MyRecipesButton onPress={navigateToMyRecipes} />
      </View>
    </View>
  );
};

export default TopBar;