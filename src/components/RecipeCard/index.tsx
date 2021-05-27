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
  hideButtons?: boolean
}

const Card = (props: Props) => {
  const { testID, recipe, handleLikeRecipe, handleShowDetails, hideButtons } = props;
  const id = recipe.id;

  const renderButtons = () => {
    if (!hideButtons) {
      return (
        <>
          <LikeButton onPress={() => handleLikeRecipe(id)} />
          <InfoButton onPress={() => handleShowDetails(id)} />
        </>
      );
    }
  };

  return (
    <PCard 
      style={styles.cardContainer}
      onPress={() => handleShowDetails(id)}
      elevation={2} 
      testID={testID}
    >
      <PCard.Cover
        style={{ width: 400, height: 250}}
        source={{ uri: recipe.pictureUrl }}
        testID='cardPicture'
      />
      <PCard.Content style={styles.cardContent}>
        <View style={styles.cardTitle}>
          <STitle style={styles.titleText} testID='cardTitle'>{recipe.name}</STitle>
        </View>
        {renderButtons()}
        <PreparationTime timeInMinutes={recipe.preparationTimeInMinutes} />
      </PCard.Content>
      <PCard.Content>
        <RecipeTags tags={recipe.tags} />
      </PCard.Content>
    </PCard>
  );
};

export default Card;