import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from '../../../theme';

interface Styles {
  container: ViewStyle,
  logo: ViewStyle,
  subheading: TextStyle,
  img: ImageStyle,
  buttons: ViewStyle,
  outlinedButton: ViewStyle,
}

export const styles: Styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height,
  },
  logo : {
    marginTop: 220
  },
  subheading: {
    marginTop: 300,
  },
  img: {
    width: '100%',
    height: '100%'
  },
  buttons: {
    marginTop: 20,
    alignSelf: 'center',
    width: theme.dimensions.smoothWidth,
  },
  outlinedButton: {
    marginTop: 10,
  },
});
