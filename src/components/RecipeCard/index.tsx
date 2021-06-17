import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Card as PCard } from 'react-native-paper';

import STitle from '../STitle';
import { IRecipe } from '../../types';

import InfoButton from './InfoButton';
import LikeButton from '../LikeButton';
import PreparationTime from './PreparationTime';
import RecipeTags from './RecipeTags';

import { styles } from './styles';
import useLikeRecipe from '../../hooks/useLikeRecipe';

interface Props {
  testID?: string
  recipe: IRecipe
  handleShowDetails: (id: string) => void
  hideButtons?: boolean
  likedRecipes?: string[]
}

const Card = (props: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { likeRecipe } = useLikeRecipe();

  const { testID, recipe, handleShowDetails, hideButtons, likedRecipes } = props;
  const id = recipe.id;

  useEffect(() => {
    setIsLiked(Boolean(likedRecipes && likedRecipes.find(r => r === id)));
  }, []);

  const handlePress = () => {
    void likeRecipe(id);
    setIsLiked(!isLiked);
  };

  const renderButtons = () => {
    if (!hideButtons) {
      return (
        <>
          <LikeButton onPress={handlePress} isPressed={isLiked} />
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