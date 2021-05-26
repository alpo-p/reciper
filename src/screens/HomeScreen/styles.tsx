import { StyleSheet, ViewStyle } from 'react-native';
import theme from '../../theme';

interface Styles {
  homeContainer: ViewStyle,
}

export const styles: Styles = StyleSheet.create({
  homeContainer: {
    height: theme.dimensions.height,
  },
});
