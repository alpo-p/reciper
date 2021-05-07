/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';
import Logo from './index';
import { ExtendedMatchers } from '../../types';

describe('The Logo', () => {
  it('renders correctly with text', () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId('Logo');

    (expect(logo) as unknown as ExtendedMatchers).toHaveTextContent('reciper');
  }); 
});
