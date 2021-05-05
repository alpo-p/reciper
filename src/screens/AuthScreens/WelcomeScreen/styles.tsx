import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from '../../../theme';

interface Styles {
  container: ViewStyle,
  subheading: TextStyle,
  img: ImageStyle
  buttons: ViewStyle
  outlinedButton: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height,
  },
  logo : {
    marginTop: 130
  },
  subheading: {
    marginTop: 390,
  },
  img: {
    width: '100%',
    height: '100%'
  },
  buttons: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  outlinedButton: {
    marginTop: 10,
  },
});
