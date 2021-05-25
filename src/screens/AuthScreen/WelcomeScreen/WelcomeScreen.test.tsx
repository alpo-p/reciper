import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { LoginAndRegisterButtonsView } from "./components/LoginAndRegisterButtonsView";

describe('The welcome screen', () => {
  it('should render buttons with correct text and should register clicks', () => {
    const handlePress = jest.fn();

    const { getByText } = render(
      <LoginAndRegisterButtonsView 
        toRegister={handlePress} 
        toLogin={handlePress}
      />
    );

    const registerButton = getByText('Register');
    const loginButton = getByText('Already an user? Login!');

    fireEvent.press(registerButton);
    fireEvent.press(loginButton);

    expect(handlePress).toHaveBeenCalledTimes(2);
  });
  
});
