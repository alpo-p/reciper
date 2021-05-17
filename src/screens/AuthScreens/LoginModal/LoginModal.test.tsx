/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { render } from '@testing-library/react-native';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import RegisterModal from '.';

import AuthStorage from '../../../utils/authStorage';
import createApolloClient from '../../../utils/apolloClient';
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);



//// NOTE: these tests broke down when fixed login; huge troubles getting them to work again...
describe('Login modal', () => {
  const init = (visible: boolean) => {
    const toggle = () => console.log('toggling');
    const { getByText, queryByText  } = render(
      <ApolloProvider client={apolloClient}>
        <RegisterModal visible={visible} toggleVisible={toggle} />
      </ApolloProvider>
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
