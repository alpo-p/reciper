import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import TopBar from '.';

describe('The TopBar', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    ({ getByTestId } = render(<TopBar />));
  });

  it('should have a logo', () => {
    expect(getByTestId('Logo')).toBeDefined();
  });

});