import React from 'react';
import { StyleSheet, View } from 'react-native';
import RecipeCard from '../../../components/RecipeCard';
import SText from '../../../components/SText';
import theme from '../../../theme';
import { IRecipe } from '../../../types';
import BottomButtons from './BottomButtons';

interface Props {
  testID?: string
  recipe: IRecipe
}

const Description = (props: Props) => {
  const { testID, recipe } = props;
  
  return (
    <View style={styles.container} testID={testID}>
      <RecipeCard 
        hideButtons
        testID="recipeCardWithoutButtons"
        recipe={recipe}
        handleShowDetails={() => console.log('show details')}
        handleLikeRecipe={() => null}
      />
      <View style={styles.textContainer}>
        <SText testID="descriptionText">{recipe.longDescription}</SText>
      </View>
      <BottomButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height - theme.dimensions.statusBar,
  },
  textContainer: {
    padding: 20,
  }
});

export default Description;