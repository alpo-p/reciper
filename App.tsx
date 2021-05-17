import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-native-paper';

import Navigator from './src/Navigator';

import { paperTheme } from './src/theme';
import useLoadFonts from './src/hooks/useLoadFonts';

import AuthStorage from './src/utils/authStorage';
import createApolloClient from './src/utils/apolloClient';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  const [fontsLoaded, error] = useLoadFonts(); 
  
  if (!fontsLoaded || error) {
    return <></>;
  }
  
  return (
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <Provider theme={paperTheme}>
          <Navigator />
        </Provider>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
}
