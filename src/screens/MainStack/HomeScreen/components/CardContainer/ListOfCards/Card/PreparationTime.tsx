import React from 'react';
import { View } from 'react-native';
import SIcon from '../../../../../../../components/SIcon';
import SText from '../../../../../../../components/SText';

interface Props {
  timeInMinutes: number
}

const PreparationTime = (props: Props) => {
  const { timeInMinutes } = props;

  return (
    <View testID='preparationTime'>
      <SIcon onPress={() => null} name='clock-outline' testID='preparationTimeIcon' />
      <SText>{timeInMinutes}</SText>
    </View>
  );
};

export default PreparationTime;