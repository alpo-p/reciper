import React from 'react';
import { View } from 'react-native';

interface Props {
  testID?: string
}

const CardContainer = (props: Props) => {
  const { testID } = props;
  return (
    <View testID={testID}>
    </View>
  );
};

export default CardContainer;