import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BottomButtons from './BottomButtons';
import { styles } from './sharedStyles';
import SingleItem from './SingleItem';

interface Props {
  testID?: string
  ingredients: string[]
}

const Ingredients = (props: Props) => {
  const { ingredients } = props;
  
  return (
    <View style={styles.topContainer}>
      <FlatList
        style={styles.container}
        data={ingredients}
        renderItem={({ item }) => <SingleItem item={item} />}
        keyExtractor={(i) => i}
      />
      <BottomButtons />
    </View>
  );
};

export default Ingredients;