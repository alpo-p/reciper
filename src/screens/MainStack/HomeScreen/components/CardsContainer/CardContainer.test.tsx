import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import CardsContainer from '.';

describe('The CardContainer', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<CardsContainer />));
  });
  
  it('should have a list of cards inside it', () => {
    expect(getByTestId('listOfCards')).toBeDefined();
  });

});