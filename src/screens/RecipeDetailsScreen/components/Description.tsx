import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RecipeCard from '../../../components/RecipeCard';
import SText from '../../../components/SText';
import { IRecipe } from '../../../types';

interface Props {
  testID?: string
  recipe: IRecipe
}

const Description = (props: Props) => {
  const { testID, recipe } = props;
  
  return (
    <ScrollView style={styles.container} testID={testID}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    padding: 20,
  }
});

export default Description;