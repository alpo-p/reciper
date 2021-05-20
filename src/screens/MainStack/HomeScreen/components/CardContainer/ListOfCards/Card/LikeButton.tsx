import React from 'react';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../../../../../../theme';

interface Props {
  onPress: () => void
}

const LikeButton = ({ onPress }: Props) => {
  return (
    <IconButton
      icon={() => <MaterialCommunityIcons name='heart-outline' />}
      size={20}
      color={theme.colors.primaryColor}
      testID='cardHeartButton'
      onPress={onPress}
    />
  );
};

export default LikeButton;