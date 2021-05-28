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
  handleLike: () => void
  isLiked: boolean
}

const Description = (props: Props) => {
  const { testID, recipe, handleLike, isLiked } = props;
  
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
      <BottomButtons handleLike={handleLike} isLiked={isLiked}/>
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