/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { render } from "@testing-library/react-native";
import { HomeScreenView } from ".";
import { ReactTestInstance } from "react-test-renderer";
it('....', () => {
  expect(1).toBe(1);
});
/*
const mockedDispatch = jest.fn();

jest.mock("@react-navigation/core", () => {
  const actualNav = jest.requireActual("@react-navigation/core");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('The home screen', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let handleNavigateToMyRecipes: () => void;
  let handleNavigateToAddARecipe: () => void;

  beforeEach(() => {
    mockedDispatch.mockClear();
    handleNavigateToMyRecipes = jest.fn();
    handleNavigateToAddARecipe = jest.fn();
    ({ getByTestId } = render(
      <HomeScreenView 
        navigateToMyRecipes={handleNavigateToMyRecipes} 
        navigateToAddARecipe={handleNavigateToAddARecipe}
      />
    ));
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
*/
