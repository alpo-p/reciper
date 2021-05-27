import { StyleSheet } from "react-native";
import theme from "../../../theme";
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from "../../../utils/utils";

export const styles = StyleSheet.create({
  topContainer: {
    height: theme.dimensions.height - theme.dimensions.statusBar,
    backgroundColor: theme.colors.primaryWhite,
  },
  container: {
    padding: 5,
    borderWidth: 0.5,
    borderColor: theme.colors.lightGrey,
    borderRadius: 5,
    marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE,
  },
  title: {
    color: theme.colors.lightBlack
  }
});