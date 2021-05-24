import { StyleSheet } from "react-native";
import theme from "../../../../../../../theme";

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    backgroundColor: theme.colors.primaryWhite,
  },
  cardTitle: {
    position: 'absolute',
    left: 10,
    bottom: 70,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  }
}); 