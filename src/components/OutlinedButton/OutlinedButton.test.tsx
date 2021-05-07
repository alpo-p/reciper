/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import OutlinedButton from './index';
import { ExtendedMatchers } from '../../types';

describe('The filled button', () => {
  it('renders correctly with text based on props.children', () => {
    const { getByTestId } = render(<OutlinedButton>Test</OutlinedButton>);
    const button = getByTestId('OutlinedButton');

    (expect(button) as unknown as ExtendedMatchers).toHaveTextContent('Test');
  }); 

  it('calls function provided to onPress correctly', () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(<OutlinedButton onPress={handlePress}>Test</OutlinedButton>);
    const button = getByTestId('OutlinedButton');

    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
