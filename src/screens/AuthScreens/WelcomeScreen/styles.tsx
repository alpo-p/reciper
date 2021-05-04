import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from '../../../theme';

interface Styles {
  container: ViewStyle,
  subheading: TextStyle,
  img: ImageStyle
  form: ViewStyle
  textButton: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height,
    marginTop: '65%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  subheading: {
    marginTop: '5%',
    fontSize: theme.fontSizes.bigger
  },
  img: {
    width: '100%',
    height: '100%'
  },
  form: {
    //marginTop: '50%'
    position: 'absolute',
    alignSelf: 'center',
    bottom: '30%'
  },
  textButton: {
    marginTop: '5%',
  }
});
