import React from 'react';
import { View } from 'react-native';
import StackOfCards from './StackOfCards';

interface Props {
  testID?: string
}

const CardContainer = (props: Props) => {
  const { testID } = props;
  return (
    <View testID={testID}>
      <StackOfCards testID='stackOfCards' />
    </View>
  );
};

export default CardContainer;