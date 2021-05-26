import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import SText from '../../../components/SText';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../../utils/utils';

interface Props {
  testID?: string
  directions: string[]
}

const SingleDirection = ({ direction }: { direction: string }) => (
  <SText>{direction}</SText>
);

const Directions = (props: Props) => {
  const { directions } = props;
  
  return (
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE}}
      data={directions}
      renderItem={({ item }) => <SingleDirection direction={item} />}
      keyExtractor={(i) => i}
    />
  );
};

export default Directions;