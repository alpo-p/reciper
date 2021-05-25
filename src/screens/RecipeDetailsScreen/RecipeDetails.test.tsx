import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { IRecipe, IRecipes } from '../../types';
import useGetRecipes from '../../hooks/useGetRecipes';
import RecipeDetails from '.';
import { RouteProp } from '@react-navigation/native';

describe('The recipe details component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>;
  const recipes: IRecipes = useGetRecipes();

  beforeEach(() => {
    const recipe: IRecipe = recipes.data.allRecipes[0];
    route = { params: { recipe } } as unknown as RouteProp<{ params: { recipe: IRecipe} }, 'params'>;
    ({ getByTestId } = render(
      <RecipeDetails route={route} testID="recipeDetailsContainer" />
    ));
  });

  it('should render', () => {
    expect(getByTestId('recipeDetailsContainer')).toBeDefined();
  });

  it('should have a RecipeCard without buttons in it', () => {
    expect(getByTestId('recipeCardWithoutButtons')).toBeDefined();
    
  });

  it('should have a TabView inside', () => {
    expect(getByTestId('recipeDetailsTabView')).toBeDefined();
  });

});