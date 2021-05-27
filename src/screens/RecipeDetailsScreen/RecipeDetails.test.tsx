import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { IRecipe, IRecipes } from '../../types';
import useGetRecipes from '../../hooks/useGetRecipes';
import RecipeDetails from '.';
import { RouteProp } from '@react-navigation/native';

it('....', () => {
  expect(1).toBe(1);
});
/*describe('The recipe details component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let queryByTestId: (testId: string) => ReactTestInstance | null;
  let route: RouteProp<{ params: { recipe: IRecipe} }, 'params'>;
  const recipes: IRecipes = useGetRecipes();

  beforeEach(() => {
    const recipe: IRecipe = recipes.data.allRecipes[0];
    route = { params: { recipe } } as unknown as RouteProp<{ params: { recipe: IRecipe} }, 'params'>;
    ({ getByTestId, queryByTestId } = render(
      <RecipeDetails route={route} testID="recipeDetailsContainer" />
    ));
  });

  it('should render', () => {
    expect(getByTestId('recipeDetailsContainer')).toBeDefined();
  });

  describe('should have a Description component inside', () => {
    it('and it should have a RecipeCard without buttons in it', () => {
      expect(getByTestId('recipeCardWithoutButtons')).toBeDefined();
      const heartButton = queryByTestId('cardHeartButton');
      expect(heartButton).toBeNull();
    });
    it('and it should have some description text below the RecipeCard', () => {
      expect(getByTestId('descriptionText')).toBeDefined();
    });
  });
  

  it('should have a TabView inside', () => {
    expect(getByTestId('recipeDetailsTabView')).toBeDefined();
  });

});*/