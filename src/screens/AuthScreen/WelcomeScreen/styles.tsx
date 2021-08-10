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
    height: theme.dimensions.height + theme.dimensions.statusBar,
  },
  logo : {
    // Dirty hack to make buttons scale correctly depending on if gesture navigation is enabled or not
    marginTop: theme.dimensions.height/4
  },
  subheading: {
    marginTop: 270,
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
