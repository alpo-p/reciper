import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SText from '../../../components/SText';
import BottomButtons from './BottomButtons';
import { styles } from './sharedStyles';

interface Props {
  testID?: string
  ingredients: string[]
}

const SingleIngredient = ({ ingredient }: { ingredient: string }) => (
  <SText>{ingredient}</SText>
);

const Ingredients = (props: Props) => {
  const { ingredients } = props;
  
  return (
    <View style={styles.topContainer}>
      <FlatList
        style={styles.container}
        data={ingredients}
        renderItem={({ item }) => <SingleIngredient ingredient={item} />}
        keyExtractor={(i) => i}
      />
      <BottomButtons />
    </View>
  );
};

export default Ingredients;