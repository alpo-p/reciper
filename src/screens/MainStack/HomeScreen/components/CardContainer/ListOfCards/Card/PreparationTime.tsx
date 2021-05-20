import React from 'react';
import { View } from 'react-native';
import SText from '../../../../../../../components/SText';

interface Props {
  timeInMinutes: string
}

const PreparationTime = (props: Props) => {
  const { timeInMinutes } = props;

  return (
    <View testID='preparationTime'>
      <SText>{timeInMinutes}</SText>
    </View>
  );
};

export default PreparationTime;