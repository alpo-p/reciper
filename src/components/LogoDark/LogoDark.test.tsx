/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';
import LogoDark from './index';
import { ExtendedMatchers } from '../../types';

describe('The Logo', () => {
  it('renders correctly with text', () => {
    const { getByTestId } = render(<LogoDark />);
    const logo = getByTestId('LogoDark');

    (expect(logo) as unknown as ExtendedMatchers).toHaveTextContent('Reciper');
  }); 
});
