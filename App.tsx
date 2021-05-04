import React from 'react';
import { Provider } from 'react-native-paper';

import { paperTheme } from './src/theme';

import Main from './src/Main';
//import theme from './src/theme';



export default function App() {
  return (
    <Provider theme={paperTheme}>
      <Main  />
    </Provider>
  );
}
