import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import SText from '../../../components/SText';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../../utils/utils';

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
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE}}
      data={ingredients}
      renderItem={({ item }) => <SingleIngredient ingredient={item} />}
      keyExtractor={(i) => i}
    />
  );
};

export default Ingredients;