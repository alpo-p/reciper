/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { render } from '@testing-library/react-native';
import React from 'react';
import { LoginModalView } from '.';

describe('Login modal', () => {
  const init = (visible: boolean) => {
    const toggle = () => console.log('toggling');
    const onSubmit = jest.fn();
    const { getByText, queryByText  } = render(
      <LoginModalView visible={visible} toggleVisible={toggle} handleSubmit={onSubmit} />
    );

    return { getByText, queryByText }; 
  };

  it('should render correctly by showing title "Welcome back!"', () => {
    const { getByText } = init(true);
    const text = getByText('Welcome back! Login below');
    expect(text).toBeTruthy();
  });

  it('should not be visible when visible is set to false', () => {
    const { queryByText } = init(false);
    
    expect(queryByText('Welcome back! Login below')).toBeFalsy();
  });

});
