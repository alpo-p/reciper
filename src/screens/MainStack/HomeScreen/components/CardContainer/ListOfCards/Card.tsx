import React from 'react';
import { View, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import STitle from '../../../../../../components/STitle';
import { IRecipe } from '../../../../../../types';
import theme from '../../../../../../theme';

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
      <IconButton
        icon={(props) => <MaterialCommunityIcons name='heart-outline' {...props} />}
        size={20}
        color={theme.colors.primaryColor}
        testID='cardHeartButton'
        onPress={handleLikeRecipe}
      />
      <IconButton
        icon={(props) => <MaterialCommunityIcons name='information-outline' {...props} />}
        size={20}
        color={theme.colors.primaryColor}
        testID='cardInfoButton'
        onPress={handleShowDetails}
      />
    </View>
  );
};

export default Card;