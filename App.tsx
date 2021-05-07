import React from 'react';
import { Provider } from 'react-native-paper';

import { paperTheme } from './src/theme';

import Main from './src/Main';

export default function App() {
  return (
    <Provider theme={paperTheme}>
      <Main  />
    </Provider>
  );
}
