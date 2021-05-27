import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SIcon from "../../../components/SIcon";
import SText from "../../../components/SText";
import { MaterialIconName } from "../../../types";

const SingleItem = ({ item }: { item: string }) => {
  const [checked, setChecked] = useState(false);

  let name: MaterialIconName;
  name = 'checkbox-blank-outline';
  if (checked) {
    name= 'checkbox-marked-outline';
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => setChecked(!checked)}>
      <SIcon name={name} onPress={() => null}/>
      <SText>{item}</SText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

export default SingleItem;