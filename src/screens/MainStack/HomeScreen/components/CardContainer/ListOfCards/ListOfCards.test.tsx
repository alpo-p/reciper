import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import ListOfCards from '.';

describe('The ListOfCards component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<ListOfCards />));
  });

  it('should have at least one Card inside it', () => {
    expect(getByTestId('card')).toBeDefined();
  });

});