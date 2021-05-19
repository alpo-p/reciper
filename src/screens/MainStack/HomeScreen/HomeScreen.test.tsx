import React from "react";
import { render } from "@testing-library/react-native";
import { HomeScreenView } from ".";
import { ReactTestInstance } from "react-test-renderer";

describe('The home screen', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let handleNavigateToMyRecipes: () => void;

  beforeEach(() => {
    handleNavigateToMyRecipes = jest.fn();
    ({ getByTestId } = render(<HomeScreenView navigateToMyRecipes={handleNavigateToMyRecipes} />));
  });

  it('should render', () => {
    expect(getByTestId('homeScreen')).toBeDefined();
  });

  it('should have a topBar', () => {
    expect(getByTestId('topBar')).toBeDefined();
  });

  it('should have a container for the cards', () => {
    expect(getByTestId('cardContainer')).toBeDefined();
  });

});
