import { StyleSheet } from "react-native";
import theme from "../../../theme";
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from "../../../utils/utils";

export const styles = StyleSheet.create({
  topContainer: {
    height: theme.dimensions.height - theme.dimensions.statusBar,
  },
  container: {
    marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE,
    backgroundColor: theme.colors.primaryWhite,
  },
});