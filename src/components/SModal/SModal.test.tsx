import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import SModal from '.';

describe('Stylish modal', () => {
  it('should not be visible when visible is false', () => {
    let visible = false;
    const toggleVisible = () => visible = !visible;
    const { queryByText } = render(<SModal visible={visible} toggleVisible={toggleVisible}><Text>Testi</Text></SModal> );

    expect(queryByText('Testi')).toBeNull();
  }); 
  it('should be visible when visible is true', () => {
    let visible = true;
    const toggleVisible = () => visible = !visible;
    const { queryByText } = render(<SModal visible={visible} toggleVisible={toggleVisible}><Text>Testi</Text></SModal> );

    expect(queryByText('Testi')).not.toBeNull();
  }); 
});
