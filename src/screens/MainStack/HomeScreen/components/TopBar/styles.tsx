import { StyleSheet, ViewStyle } from "react-native";
import theme from "../../../../../theme";

interface Styles {
  container: ViewStyle
  emptyContainer: ViewStyle
  logoContainer: ViewStyle
  buttonContainer: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderBottomColor: theme.colors.lightBlack,
    borderBottomWidth: 0.4, 
  },
  emptyContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 10,
  }
});