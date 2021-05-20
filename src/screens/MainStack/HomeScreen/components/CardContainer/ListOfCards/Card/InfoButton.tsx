import React from 'react';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../../../../../../theme';

interface Props {
  onPress: () => void
}

const InfoButton = ({ onPress }: Props) => {
  return (
    <IconButton
      icon={() => <MaterialCommunityIcons name='information-outline' />}
      size={20}
      color={theme.colors.primaryColor}
      testID='cardInfoButton'
      onPress={onPress}
    />
  );
};

export default InfoButton;