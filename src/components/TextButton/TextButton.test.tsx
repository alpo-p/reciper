/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TextButton from './index';
import { ExtendedMatchers } from '../../types';

describe('The text button', () => {
  it('renders correctly with text based on props.children', () => {
    const { getByTestId } = render(<TextButton>Test</TextButton>);
    const button = getByTestId('TextButton');

    (expect(button) as unknown as ExtendedMatchers).toHaveTextContent('Test');
  }); 

  it('calls function provided to onPress correctly', () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(<TextButton onPress={handlePress}>Test</TextButton>);
    const button = getByTestId('TextButton');

    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
