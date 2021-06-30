import { StyleSheet, ViewStyle } from 'react-native';
import theme from '../../theme';

interface Styles {
  container: ViewStyle,
  formContainer: ViewStyle,
  formButton: ViewStyle,
  inputFields: ViewStyle,
}

export const styles: Styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height,
  },
  formContainer: {
    alignItems: 'center',
  },
  inputFields: {
    width: theme.dimensions.smoothWidth,
  },
  formButton: {
    width: theme.dimensions.smoothWidth,
    marginTop: 10
  }
});
