import React from 'react';
import { View } from 'react-native';
import { IRecipe, IRecipes } from '../../../../../../types';
import Card from './Card';
import useGetRecipes from './useGetRecipes';

interface Props {
  testID?: string
}

const ListOfCards = (props: Props) => {
  const { testID } = props;

  const recipes: IRecipes = useGetRecipes();
  const recipe: IRecipe =  recipes.data.allRecipes[0]; 

  return (
    <View testID={testID}>
      <Card 
        recipe={recipe} 
        testID='card'
      />
    </View>
  );
};

export default ListOfCards;