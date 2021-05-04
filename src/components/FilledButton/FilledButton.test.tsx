/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import FilledButton from './index';


interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}


describe('The filled button', () => {
  it('renders correctly with text based on props.children', () => {
    const { getByTestId } = render(<FilledButton>Test</FilledButton>);
    const button = getByTestId('FilledButton');

    (expect(button) as unknown as ExtendedMatchers).toHaveTextContent('Test');
  }); 

  it('calls function provided to onPress correctly', () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(<FilledButton onPress={handlePress}>Test</FilledButton>);
    const button = getByTestId('FilledButton');

    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
