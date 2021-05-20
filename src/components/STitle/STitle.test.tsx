/* eslint-disable @typescript-eslint/ban-types */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';
import STitle from './index';
import { ExtendedMatchers } from '../../types';

describe('The stylish title text', () => {
  it('renders correctly with text from props.children', () => {
    const { getByTestId } = render(<STitle testID='STitle'>Testi</STitle>);
    const sTitle = getByTestId('STitle');

    (expect(sTitle) as unknown as ExtendedMatchers).toHaveTextContent('Testi');
  }); 
});
