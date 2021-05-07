import { Dimensions } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const theme = {
  colors: {
    primaryWhite: '#f5f5f5',
    primaryColor: '#2a9d8f',
    error: '#e76f51',
    lightBlack: '#666666',
  },
  dimensions: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    smoothWidth: '95%'
  },
  fontSizes: {
    small: 12,
    medium: 18,
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
    text: theme.colors.primaryWhite, 
  }
};

export default theme;
