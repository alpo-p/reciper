import React from 'react';
import { View } from 'react-native';
import ListOfCards from './ListOfCards';

interface Props {
  testID?: string
}

const CardContainer = (props: Props) => {
  const { testID } = props;
  return (
    <View testID={testID}>
      <ListOfCards testID='listOfCards' />
    </View>
  );
};

export default CardContainer;