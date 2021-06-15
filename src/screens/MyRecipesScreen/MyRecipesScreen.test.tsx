import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import MyRecipesScreen from '.';

describe('MyRecipesScreen', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<MyRecipesScreen navigateToAddARecipe={() => null} testID='MyRecipesScreen' />));
  });

  it('should render', () => {
    expect(getByTestId('MyRecipesScreen')).toBeDefined();
  });

});