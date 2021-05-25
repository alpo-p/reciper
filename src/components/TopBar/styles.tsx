import { StyleSheet, ViewStyle } from "react-native";
import theme from "../../theme";

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
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 0.2, 
  },
  emptyContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    marginTop: 5,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: -10,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }
});