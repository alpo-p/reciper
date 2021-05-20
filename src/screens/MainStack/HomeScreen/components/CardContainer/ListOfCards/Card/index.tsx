import React from 'react';
import { View, Image } from 'react-native';

import STitle from '../../../../../../../components/STitle';
import { IRecipe } from '../../../../../../../types';

import InfoButton from './InfoButton';
import LikeButton from './LikeButton';
import PreparationTime from './PreparationTime';
import RecipeTags from './RecipeTags';

interface Props {
  testID?: string
  recipe: IRecipe
  handleLikeRecipe: () => void
  handleShowDetails: () => void
}

const Card = (props: Props) => {
  const { testID, recipe, handleLikeRecipe, handleShowDetails } = props;
  return (
    <View testID={testID}>
      <Image
        source={{ uri: recipe.pictureUrl }}
        testID='cardPicture'
      />
      <STitle testID='cardTitle'>{recipe.name}</STitle>
      <LikeButton onPress={handleLikeRecipe} />
      <InfoButton onPress={handleShowDetails} />
      <PreparationTime timeInMinutes={recipe.preparationTimeInMinutes} />
      <RecipeTags tags={recipe.tags} />
    </View>
  );
};

export default Card;