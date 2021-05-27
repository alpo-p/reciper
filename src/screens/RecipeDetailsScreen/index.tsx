/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp  } from '@react-navigation/native';
import { IRecipe } from '../../types';

import Description from './components/Description';
import Ingredients from './components/Ingredients';
import theme from '../../theme';
import Directions from './components/Directions';

const TopTab = createMaterialTopTabNavigator();

interface Props {
  testID?: string
  route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>
}

const RecipeDetailsScreen = (props: Props) => {
  const { route } = props;
  const { recipe } = route.params;

  return (
    <TopTab.Navigator style={{flex: 1, marginTop: theme.dimensions.statusBar}}>
      <TopTab.Screen name="Description">
        {() => <Description recipe={recipe} />} 
      </TopTab.Screen>
      <TopTab.Screen name="Ingredients">
        {() => <Ingredients ingredients={recipe.ingredients} />} 
      </TopTab.Screen>
      <TopTab.Screen name="Directions">
        {() => <Directions directions={recipe.stepByStepDirections} />} 
      </TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default RecipeDetailsScreen;
