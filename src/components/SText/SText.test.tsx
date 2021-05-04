/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';
import SText from './index';


interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}


describe('The stylish text', () => {
  it('renders correctly with text', () => {
    const { getByTestId } = render(<SText>Testi</SText>);
    const logo = getByTestId('SText');

    (expect(logo) as unknown as ExtendedMatchers).toHaveTextContent('Testi');
  }); 
});
