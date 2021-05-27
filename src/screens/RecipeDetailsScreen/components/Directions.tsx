import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SText from '../../../components/SText';
import BottomButtons from './BottomButtons';
import { styles } from './sharedStyles';

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
    <View style={styles.topContainer}>
      <FlatList
        style={styles.container}
        data={directions}
        renderItem={({ item }) => <SingleDirection direction={item} />}
        keyExtractor={(i) => i}
      />
      <BottomButtons />
    </View>
  );
};

export default Directions;