import React from 'react';
import { View, Image } from 'react-native';
import STitle from '../../../../../../components/STitle';
import { IRecipe } from '../../../../../../types';

interface Props {
  testID?: string
  recipe: IRecipe
}

const Card = (props: Props) => {
  const { recipe, testID } = props;
  return (
    <View testID={testID}>
      <Image
        source={{ uri: recipe.pictureUrl }}
        testID='cardPicture'
      />
      <STitle testID='cardTitle'>{recipe.name}</STitle>
    </View>
  );
};

export default Card;