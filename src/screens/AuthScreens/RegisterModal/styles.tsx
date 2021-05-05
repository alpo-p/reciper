import { StyleSheet, ViewStyle } from 'react-native';
import theme from '../../../theme';

interface Styles {
  modalContainer: ViewStyle,
  header: ViewStyle,
  formContainer: ViewStyle,
  formButton: ViewStyle,
  inputFields: ViewStyle,
}

export const styles: Styles = StyleSheet.create({
  modalContainer: {
    marginBottom: 40,
    height: 320
  },
  header: {
    alignSelf: 'center',
    marginBottom: 25,
  },
  formContainer: {
    alignItems: 'center',
  },
  inputFields: {
    width: theme.dimensions.smoothWidth
  },
  formButton: {
    width: theme.dimensions.smoothWidth,
    marginTop: 10
  }
});
