import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import ListOfCards from '.';
import useGetRecipes from '../../../../../../hooks/useGetRecipes';

describe('The ListOfCards component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let getAllByTestId: (testId: string) => ReactTestInstance[];
  const recipes = useGetRecipes();

  beforeEach(() => {
    ({ getByTestId, getAllByTestId } = render(<ListOfCards recipes={recipes} />));
  });

  it('should have at least one Card inside it', () => {
    expect(getByTestId('card')).toBeDefined();
  });

  it('should have multiple cards inside it', () => {
    expect(geta);
  });

});