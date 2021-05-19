import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle
  logoContainer: ViewStyle
  button: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    //
    borderColor: 'red',
    borderWidth: 1,
  },
  logoContainer: {
    marginBottom: 15,
    justifyContent: 'center',
    //
    borderColor: 'red',
    borderWidth: 1,
  },
  button: {
    marginBottom: 10,
  }
});