import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import TopBar from '.';

describe('The TopBar', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let handleNavigateToMyRecipes: () => void;

  beforeEach(() => {
    handleNavigateToMyRecipes = jest.fn();
    ({ getByTestId } = render(<TopBar navigateToMyRecipes={handleNavigateToMyRecipes} />));
  });

  it('should have a dark logo', () => {
    expect(getByTestId('LogoDark')).toBeDefined();
  });

  it('should have a button for MyRecipes', () => {
    expect(getByTestId('myRecipesButton')).toBeDefined();
  });

  it('should register a click on the MyRecipes button', () => {
    fireEvent.press(getByTestId('myRecipesButton'));
    expect(handleNavigateToMyRecipes).toHaveBeenCalledTimes(1);
  });
});