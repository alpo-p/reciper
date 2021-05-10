import React from 'react';
import { Provider } from 'react-native-paper';

import { paperTheme } from './src/theme';

import useLoadFonts from './src/hooks/useLoadFonts';
import Routes from './src/Routes';

export default function App() {
  const [fontsLoaded, error] = useLoadFonts(); 
  
  if (!fontsLoaded || error) {
    return <></>;
  }
  
  return (
    <Provider theme={paperTheme}>
      <Routes  />
    </Provider>
  );
}
