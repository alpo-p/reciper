import React from 'react';
import { StyleSheet, View } from 'react-native';
import SIcon from '../SIcon';
import SText from '../SText';
import theme from '../../theme';

interface Props {
  timeInMinutes: number
}

const PreparationTime = (props: Props) => {
  const { timeInMinutes } = props;

  return (
    <View style={styles.prepTime} >
      <SIcon color={theme.colors.lightBlack} onPress={() => null} name='clock-outline' testID='preparationTimeIcon' />
      <SText testID='preparationTime' style={styles.text}>{timeInMinutes} min</SText>
    </View>
  );
};

const styles = StyleSheet.create({
  prepTime: {
    flexDirection: 'row',
    flex: 2,
  },
  text: {
    fontSize: theme.fontSizes.small,
    marginLeft: -5,
  }
});

export default PreparationTime;