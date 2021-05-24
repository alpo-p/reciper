import React from 'react';
import { View } from 'react-native';
import ListOfCards from './ListOfCards';
import useGetRecipes from '../../../../../hooks/useGetRecipes';
import { IRecipes } from '../../../../../types';

interface Props {
  testID?: string
}

const CardsContainer = (props: Props) => {
  const { testID } = props;
  const recipes: IRecipes = useGetRecipes();
  return (
    <View testID={testID}>
      <ListOfCards recipes={recipes} testID='listOfCards' />
    </View>
  );
};

export default CardsContainer;