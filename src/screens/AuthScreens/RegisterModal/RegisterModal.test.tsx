/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { render } from '@testing-library/react-native';
import React from 'react';
import RegisterModal from '.';

describe('Register modal', () => {
  const init = (visible: boolean) => {
    const toggle = () => console.log('toggling');
    const { getByText, queryByText  } = render(
      <RegisterModal visible={visible} toggleVisible={toggle} />
    );

    return { getByText, queryByText }; 
  };

  it('should render correctly by showing title "Register a new user"', () => {
    const { getByText } = init(true);
    const text = getByText('Create an account');
    expect(text).toBeTruthy();
  });

  it('should not be visible when visible is set to false', () => {
    const { queryByText } = init(false);
    
    expect(queryByText('Create an account')).toBeFalsy();
  });

});
