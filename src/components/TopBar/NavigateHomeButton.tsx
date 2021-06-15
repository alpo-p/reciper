import React from 'react';
import SIcon from '../SIcon';

interface Props {
  onPress?: () => void
}

const MyRecipesButton = ({ onPress }: Props) => (
  <SIcon onPress={onPress} name='home' testID='navigateToHomeButton' size={40} />
);

export default MyRecipesButton;