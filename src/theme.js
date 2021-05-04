import { Dimensions } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const theme = {
  colors: {
    peachCrayolaTransparent: 'rgba(241, 191, 152, 0.4)',
    peachCrayola: 'rgb(241, 191, 152)',
    nyanza: '#E1F4CB',
    laurelGreen: '#BACBA9',
    nickel: '#717568',
    rifleGreen: '#3f4739',
    gray: '#858585',
    darkGray: '#545454',
    //transparentGray: 'rgba(148, 148, 148, 0.1)',
  },
  dimensions: {
    height: Dimensions.get('window').height,
  },
  fontSizes: {
    medium: 18,
    bigger: 22,
  },
};

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.peachCrayola,
    text: theme.colors.darkGray 
  }
};

export default theme;
