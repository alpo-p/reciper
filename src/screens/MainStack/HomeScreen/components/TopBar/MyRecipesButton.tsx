import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import theme from '../../../../../theme';

interface Props {
  onPress: () => void
}

const MyRecipesButton = ({ onPress }: Props) => (
  <IconButton 
    icon={(props) => <MaterialCommunityIcons name='heart' {...props} />}
    size={40}
    color={theme.colors.primaryColor}
    testID='myRecipesButton' 
    onPress={onPress}
  />
);

export default MyRecipesButton;