import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import Loading from '.';

describe('Loading component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<Loading testID='loading' />));
  });

  it('should render', () => {
    expect(getByTestId('loading')).toBeDefined();
  });

});