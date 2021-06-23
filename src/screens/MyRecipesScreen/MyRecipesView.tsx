import React from 'react';
import { View } from 'react-native';
import ListOfCards from '../../components/ListOfCards';
import TopBar from '../../components/TopBar';
import { IRecipe } from '../../types';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../utils/utils';
import MyRecipesTitle from './MyRecipesTitle';

interface Props {
  navigateToAddARecipe: () => void
  navigateToHome: () => void
  recipes: IRecipe[]
  handleShowDetails: (id: string) => void
  likedRecipes: string[]
  testID?: string
}

const MyRecipesView  = (props: Props) => {
  const { navigateToAddARecipe, navigateToHome, recipes,
    handleShowDetails, likedRecipes, testID } = props;

  return (
    <View testID={testID} style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE + 10 }}>
      <TopBar showNavigateHome 
        navigateToAddARecipe={navigateToAddARecipe} 
        navigateToHome={navigateToHome}
      />
      <MyRecipesTitle />
      <ListOfCards 
        recipes={recipes} 
        handleShowDetails={handleShowDetails}
        likedRecipes={likedRecipes}
      />
    </View>
  );
};

export default MyRecipesView;