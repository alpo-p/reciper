import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { IRecipe, IRecipes } from '../../../types';
import useGetRecipes from '../../../hooks/useGetRecipes';
import RecipeDetails from '.';

describe('The recipe details component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let recipe: IRecipe;
  const recipes: IRecipes = useGetRecipes();

  beforeEach(() => {
    recipe = recipes.data.allRecipes[0];
    ({ getByTestId } = render(
      <RecipeDetails recipe={recipe} testID="recipeDetailsContainer" />
    ));
  });

  it('should render', () => {
    expect(getByTestId('recipeDetailsContainer')).toBeDefined();
  });

  describe('should have a card with', () => {
    it('a correct title', () => {
      expect(getByTestId('detailsTitle')).toHaveTextContent('Uunifetapasta');
    });
  });
  


});