import { Dimensions, Platform } from 'react-native';

const theme = {
  colors: {
    mainPastel: 'rgba(255, 220, 186, 0.5)',
    mainGreen: '#86ab82',
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

export default theme;
