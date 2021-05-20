import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import Card from './Card';
import useGetRecipes from './useGetRecipes';
import { IRecipe, IRecipes } from '../../../../../../types';

describe('The Card components', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    const recipes: IRecipes = useGetRecipes();
    const recipe: IRecipe = recipes.data.allRecipes[0];

    ({ getByTestId } = render(<Card recipe={recipe} testID='card' />));
  });
  it('should render', () => {
    expect(getByTestId('card')).toBeDefined();
  });
  it('should have a picture component', () => {
    expect(getByTestId('cardPicture')).toBeDefined();
  });
  it('should have a heart button', () => {
  });
  it('should have an info button', () => {
    
  });

  it('should show the preparation time', () => {
    
  });
  it('should show some tags related to the recipe', () => {
    
  });
});
