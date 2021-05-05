/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Provider } from 'react-native-paper';

import { paperTheme } from './src/theme';

import Main from './src/Main';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'TangerineBold': require('./assets/fonts/TangerineBold.ttf'),
  }); 

  if (!fontsLoaded || error) {
    return <></>;
  }

  return (
    <Provider theme={paperTheme}>
      <Main  />
    </Provider>
  );
}
