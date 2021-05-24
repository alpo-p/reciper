import React from 'react';
import SIcon from '../../../../../components/SIcon';

interface Props {
  onPress: () => void
}

const MyRecipesButton = ({ onPress }: Props) => (
  <SIcon onPress={onPress} name='heart' testID='myRecipesButton' size={40} />
);

export default MyRecipesButton;