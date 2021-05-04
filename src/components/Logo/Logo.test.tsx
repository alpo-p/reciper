/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';
import Logo from './index';


interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}


describe('The Logo', () => {
  it('renders correctly with text', () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId('Logo');

    (expect(logo) as unknown as ExtendedMatchers).toHaveTextContent('Reciper');
  }); 
});
