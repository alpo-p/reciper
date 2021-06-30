import React from 'react';
import SIcon from '../SIcon';

interface Props {
  onPress?: () => void
}

const AddARecipeButton = ({ onPress }: Props) => (
  <SIcon onPress={onPress} name='plus' testID='addNewRecipeButton' size={40} />
);

export default AddARecipeButton;