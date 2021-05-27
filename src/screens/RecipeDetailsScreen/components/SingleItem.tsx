import React from "react";
import { StyleSheet, View } from "react-native";
import SIcon from "../../../components/SIcon";
import SText from "../../../components/SText";

const SingleItem = ({ item }: { item: string }) => (
  <View style={styles.container}>
    <SIcon name='clipboard-check' onPress={() => null} />
    <SText>{item}</SText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

export default SingleItem;