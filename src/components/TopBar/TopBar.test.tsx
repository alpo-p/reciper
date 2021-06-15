import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import TopBar from '.';

describe('The TopBar', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let handleNavigateToMyRecipes: () => void;
  let handleNavigateToAddNewRecipe: () => void;

  beforeEach(() => {
    handleNavigateToMyRecipes = jest.fn();
    handleNavigateToAddNewRecipe = jest.fn();
    ({ getByTestId } = render(
      <TopBar navigateToMyRecipes={handleNavigateToMyRecipes} navigateToAddARecipe={handleNavigateToAddNewRecipe} showMyRecipes />
    ));
  });

  it('should have a dark logo', () => {
    expect(getByTestId('LogoDark')).toBeDefined();
  });

  describe('A button for MyRecipes (heart)', () => {
    it('should render correctly', () => {
      expect(getByTestId('myRecipesButton')).toBeDefined();
    });
    
    it('should register a click', () => {
      fireEvent.press(getByTestId('myRecipesButton'));
      expect(handleNavigateToMyRecipes).toHaveBeenCalledTimes(1);
    });
  });

  describe('A button for AddARecipe (plus)', () => {
    it('should render correctly', () => {
      expect(getByTestId('addNewRecipeButton')).toBeDefined();
    });
    
    it('should register a click', () => {
      fireEvent.press(getByTestId('addNewRecipeButton'));
      expect(handleNavigateToAddNewRecipe).toHaveBeenCalledTimes(1);
    });
  });
  
  
});