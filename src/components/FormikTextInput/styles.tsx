import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from '../../theme';

interface Styles {
  container: ViewStyle
  errorText: TextStyle,
  field: ViewStyle
  errorBorder: ViewStyle
  errorContainer: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
  },
  errorText: {
    marginTop: -5,
    color: theme.colors.error,
    fontSize: theme.fontSizes.small,
    alignSelf: 'flex-start'
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
  errorContainer: {
    minHeight: 8,
  },
  field: {
    borderRadius: theme.borders.borderRadius,
    marginBottom: 5,
  },
});
