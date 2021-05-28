/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp  } from '@react-navigation/native';
import { IRecipe } from '../../types';

import Description from './components/Description';
import theme from '../../theme';
import List from './components/List';

const TopTab = createMaterialTopTabNavigator();

interface Props {
  testID?: string
  route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>
}

const RecipeDetailsScreen = (props: Props) => {
  const { route } = props;
  const { recipe } = route.params;
  const handleLike = () => console.log("liked recipe: ", recipe.id);

  return (
    <TopTab.Navigator style={{flex: 1, marginTop: theme.dimensions.statusBar}}>
      <TopTab.Screen name="Description">
        {() => <Description recipe={recipe} handleLike={handleLike} />} 
      </TopTab.Screen>
      <TopTab.Screen name="Ingredients">
        {() => <List name="Ingredients" items={recipe.ingredients} handleLike={handleLike} />} 
      </TopTab.Screen>
      <TopTab.Screen name="Directions">
        {() => <List name="Directions" items={recipe.stepByStepDirections} handleLike={handleLike} />} 
      </TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default RecipeDetailsScreen;
