import React from 'react';
import { Card as PCard } from 'react-native-paper';

import STitle from '../../../../../../../components/STitle';
import { IRecipe } from '../../../../../../../types';

import InfoButton from './InfoButton';
import LikeButton from './LikeButton';
import PreparationTime from './PreparationTime';
import RecipeTags from './RecipeTags';

import { styles } from './styles';

interface Props {
  testID?: string
  recipe: IRecipe
  handleLikeRecipe: () => void
  handleShowDetails: () => void
}

const Card = (props: Props) => {
  const { testID, recipe, handleLikeRecipe, handleShowDetails } = props;
  return (
    <PCard 
      style={styles.cardContainer}
      onPress={handleShowDetails}
      elevation={2} 
      testID={testID}
    >
      <PCard.Cover
        source={{ uri: recipe.pictureUrl }}
        testID='cardPicture'
      />
      <PCard.Content>
        <STitle testID='cardTitle'>{recipe.name}</STitle>
        <LikeButton onPress={handleLikeRecipe} />
        <InfoButton onPress={handleShowDetails} />
        <PreparationTime timeInMinutes={recipe.preparationTimeInMinutes} />
        <RecipeTags tags={recipe.tags} />
      </PCard.Content>
    </PCard>
  );
};

export default Card;