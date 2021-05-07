/* eslint-disable @typescript-eslint/no-misused-promises */
import { render } from '@testing-library/react-native';
import React from 'react';
import RegisterModal from '.';

describe('Register modal', () => {
  const init = () => {
    const visible = true;
    const toggle = () => console.log('toggling');
    const submit = jest.fn();
    const { getByText } = render(
      <RegisterModal registerVisible={visible} toggleRegisterVisible={toggle} handleSubmit={submit} />
    );

    return { getByText };
  };

  it('should render correctly by showing title "Register a new user"', () => {
    const { getByText } = init();
    const text = getByText('Register a new user');
    expect(text).toBeTruthy();
  });
});
