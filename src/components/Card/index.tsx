import React from 'react';
import { View } from 'react-native';
import { Card as PCard } from 'react-native-paper';

import STitle from '../STitle';
import { IRecipe } from '../../types';

import InfoButton from './InfoButton';
import LikeButton from './LikeButton';
import PreparationTime from './PreparationTime';
import RecipeTags from './RecipeTags';

import { styles } from './styles';

interface Props {
  testID?: string
  recipe: IRecipe
  handleLikeRecipe: (id: string) => void
  handleShowDetails: (id: string) => void
}

const Card = (props: Props) => {
  const { testID, recipe, handleLikeRecipe, handleShowDetails } = props;
  const id = recipe.id;
  return (
    <PCard 
      style={styles.cardContainer}
      onPress={() => handleShowDetails(id)}
      elevation={2} 
      testID={testID}
    >
      <PCard.Cover
        source={{ uri: recipe.pictureUrl }}
        testID='cardPicture'
      />
      <PCard.Content style={styles.cardContent}>
        <View style={styles.cardTitle}>
          <STitle testID='cardTitle'>{recipe.name}</STitle>
        </View>
        <LikeButton onPress={() => handleLikeRecipe(id)} />
        <InfoButton onPress={() => handleShowDetails(id)} />
        <PreparationTime timeInMinutes={recipe.preparationTimeInMinutes} />
      </PCard.Content>
      <PCard.Content>
        <RecipeTags tags={recipe.tags} />
      </PCard.Content>
    </PCard>
  );
};

export default Card;