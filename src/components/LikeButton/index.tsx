import React from 'react';
import SIcon from '../SIcon';

interface Props {
  onPress: () => void
  isPressed?: boolean
}

const LikeButton = ({ onPress, isPressed }: Props) => {
  const name = isPressed ? 'heart' : 'heart-outline';
  return (
    <SIcon onPress={onPress} name={name} testID='cardHeartButton' />
  );
};

export default LikeButton;