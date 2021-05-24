import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import ListOfCards from '.';
import useGetRecipes from '../../../../../../hooks/useGetRecipes';

describe('The ListOfCards component', () => {
  let getAllByTestId: (testId: string) => ReactTestInstance[];
  const recipes = useGetRecipes();

  beforeEach(() => {
    ({ getAllByTestId } = render(<ListOfCards recipes={recipes} />));
  });

  it('should have 3 cards inside it', () => {
    expect(getAllByTestId('card')).toHaveLength(3);
  });

});