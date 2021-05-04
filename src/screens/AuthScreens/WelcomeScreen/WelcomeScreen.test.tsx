import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ExtendedMatchers } from '../../../test_types';
import { WelcomeText } from '.';
import { LoginOrRegisterView } from './LoginOrRegisterContainer';

describe('The welcome screen', () => {
  it('should render welcome text correctly', () => {
    const { getByTestId } = render(<WelcomeText />);
    const welcomeText = getByTestId('WelcomeText');

    (expect(welcomeText) as unknown as ExtendedMatchers).toHaveTextContent('WELCOME TO');
    (expect(welcomeText) as unknown as ExtendedMatchers).toHaveTextContent('Find the best recipes!');
  });

  it('should render buttons with correct text and should register clicks', () => {
    const handlePress = jest.fn();

    const { getByText } = render(
      <LoginOrRegisterView 
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
