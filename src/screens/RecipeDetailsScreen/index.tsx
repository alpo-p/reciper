/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import { IRecipe } from '../../types';

import Description from './components/Description';
import Ingredients from './components/Ingredients';
import theme from '../../theme';
import Directions from './components/Directions';

const Tab = createMaterialTopTabNavigator();

interface Props {
  testID?: string
  route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>
}

const RecipeDetailsScreen = (props: Props) => {
  const { route } = props;
  const { recipe } = route.params;

  return (
    <Tab.Navigator style={{marginTop: theme.dimensions.statusBar}}>
      <Tab.Screen name="Description">
        {() => <Description recipe={recipe} />} 
      </Tab.Screen>
      <Tab.Screen name="Ingredients">
        {() => <Ingredients ingredients={recipe.ingredients} />} 
      </Tab.Screen>
      <Tab.Screen name="Directions">
        {() => <Directions directions={recipe.stepByStepDirections} />} 
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default RecipeDetailsScreen;
