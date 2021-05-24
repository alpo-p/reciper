import React from 'react';
import { StyleSheet, View } from 'react-native';
import SIcon from '../../../../../../../components/SIcon';
import SText from '../../../../../../../components/SText';
import theme from '../../../../../../../theme';

interface Props {
  timeInMinutes: number
}

const PreparationTime = (props: Props) => {
  const { timeInMinutes } = props;

  return (
    <View style={styles.prepTime} >
      <SIcon onPress={() => null} name='clock-outline' testID='preparationTimeIcon' />
      <SText testID='preparationTime' style={styles.text}>{timeInMinutes} min</SText>
    </View>
  );
};

const styles = StyleSheet.create({
  prepTime: {
    flexDirection: 'row',
  },
  text: {
    fontSize: theme.fontSizes.mediumMinus,
  }
});

export default PreparationTime;