import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BottomButtons from './BottomButtons';
import { styles } from './sharedStyles';
import SingleItem from './SingleItem';

interface Props {
  testID?: string
  directions: string[]
}


const Directions = (props: Props) => {
  const { directions } = props;
  
  return (
    <View style={styles.topContainer}>
      <FlatList
        style={styles.container}
        data={directions}
        renderItem={({ item }) => <SingleItem item={item} />}
        keyExtractor={(i) => i}
      />
      <BottomButtons />
    </View>
  );
};

export default Directions;