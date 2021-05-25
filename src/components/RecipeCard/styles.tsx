import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 2,
    marginBottom: 10,
    backgroundColor: theme.colors.primaryWhite,
  },
  cardTitle: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    left: 10,
    bottom: 42,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  }
}); 