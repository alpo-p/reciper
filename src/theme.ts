import { Dimensions, StatusBar } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const theme = {
  colors: {
    primaryWhite: '#f5f5f5',
    primaryColor: '#2a9d8f',
    error: '#e76f51',
    lightBlack: '#666666',
    lightGrey: '#d3d3d3'
  },
  dimensions: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    statusBar: StatusBar.currentHeight as number,
    smoothWidth: '95%'
  },
  fontSizes: {
    small: 12,
    mediumMinus: 15,
    medium: 18,
    bigMinus: 25,
    bigger: 40,
    huge: 85,
  },
  borders: {
    borderRadius: 10,
  }
};

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primaryColor,
    accent: theme.colors.primaryColor,
    text: theme.colors.lightBlack, 
  }
};

export default theme;
