import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from ".";
import { ReactTestInstance } from "react-test-renderer";

describe('The home screen', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<HomeScreen />));
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
