import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import CardContainer from '.';

describe('The CardContainer', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<CardContainer />));
  });

  it('should have a stack of cards inside it', () => {
    expect(getByTestId('stackOfCards')).toBeDefined();
  });

});