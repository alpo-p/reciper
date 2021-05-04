import { Dimensions, Platform } from 'react-native';
import { configureFonts, DefaultTheme } from 'react-native-paper';

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
  fonts: {
    main: Platform.select({
      android: 'sans-serif-light',
      ios: 'GillSans-Light'
    })
  },
  fontSizes: {
    medium: 14,
    bigger: 16,
  },
};

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  }
};

export const paperTheme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.rifleGreen,
    //accent: theme.colors.mainGreen,
  }
};

export default theme;
